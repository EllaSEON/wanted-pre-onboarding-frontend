import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthAPI from "../../api/AuthAPI";
import Input from "../../components/Input/Input";
import * as S from "./SignIn.style";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false); // disabled를 결정하는 state
  const [message, setMessage] = useState("");

  const handleData = (event) => {
    if (event.target.type === "email") {
      setEmail(event.target.value);
    } else if (event.target.type === "password") {
      setPassword(event.target.value);
      setMessage("비밀번호 8자리 이상 입력하세요");
    }
  };

  // 정규표현식 일치 엽에 따라 버튼색이 바뀌는 함수
  const handleCheckValid = () => {
    return email.includes("@") && password.length >= 8
      ? setIsValid(true) || setMessage("")
      : setIsValid(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await AuthAPI.getSignIn(email, password);
    localStorage.setItem("access_token", data.data.access_token);
    navigate("/todolist");
  };

  return (
    <S.LoginWrapper>
      <S.MainWrapper>
        <S.LoginTitle>로그인</S.LoginTitle>
        <form onSubmit={handleSubmit}>
          <Input
            data-testid="email-input"
            label="이메일"
            forid="email"
            type="email"
            value={email}
            onChange={handleData}
            onKeyUp={handleCheckValid}
          />
          <Input
            data-testid="password-input"
            label="비밀번호"
            forid="password"
            type="password"
            value={password}
            onChange={handleData}
            onKeyUp={handleCheckValid}
          />
          <div>{message}</div>
          <S.LoginBtn
            data-testid="signin-button"
            children="로그인"
            disabled={!isValid}
          />
        </form>
        <S.LoginLink to="/signup">이메일로 회원가입</S.LoginLink>
      </S.MainWrapper>
    </S.LoginWrapper>
  );
};

export default SignIn;
