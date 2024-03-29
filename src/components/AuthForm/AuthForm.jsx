import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../api/AuthAPI";
import { AuthContext } from "../../context/context";
import Input from "../Input/Input";
import notice from "../../utils/noticeUtils";
import * as S from "./AuthForm.style";
import { ToastContainer } from "react-toastify";

const AuthForm = ({ signUp }) => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false); // disabled를 결정하는 state

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
    }
  };

  // 유효성검사에 따라 버튼색이 바뀌는 함수
  const handleCheckValid = () => {
    return email.includes("@") && password.length >= 8
      ? setIsValid(true)
      : setIsValid(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (signUp) {
      try {
        await AuthAPI.getSignUp(email, password);
        navigate("/signin");
      } catch (error) {
        notice("error", error.response.data.message);
      }
    } else {
      try {
        const data = await AuthAPI.getSignIn(email, password);
        localStorage.setItem("access_token", data.data.access_token);
        const loginData = {
          access_token: data.data.access_token,
        };
        dispatch({ type: "login", payload: loginData });
        navigate("/todo");
      } catch (error) {
        notice("error", error.response.data.message);
      }
    }
  };

  // 로컬스토리지에 토큰 있는 상태라면 todo 경로
  useEffect(() => {
    if (user.access_token !== null) {
      navigate("/todo");
    }
  });

  return (
    <S.InputFormWrapper>
      <S.MainWrapper>
        <S.MainTitle>{signUp ? "회원가입" : "로그인"}</S.MainTitle>
        <form onSubmit={handleSubmit}>
          <Input
            data-testid="email-input"
            label="이메일"
            forid="email"
            type="email"
            placeholder="이메일 주소를 입력해주세요"
            value={email}
            onChange={handleData}
            onKeyUp={handleCheckValid}
          />
          <Input
            data-testid="password-input"
            label="비밀번호"
            forid="password"
            type="password"
            placeholder="비밀번호 8자 이상 입력해주세요"
            value={password}
            onChange={handleData}
            onKeyUp={handleCheckValid}
          />
          {signUp ? (
            <S.SubmitBtn
              data-testid="signup-button"
              children="회원가입"
              disabled={!isValid}
            />
          ) : (
            <S.SubmitBtn
              data-testid="signin-button"
              children="로그인"
              disabled={!isValid}
            />
          )}
        </form>
      </S.MainWrapper>
      <ToastContainer />
    </S.InputFormWrapper>
  );
};

export default AuthForm;
