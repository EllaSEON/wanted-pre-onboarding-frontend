import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/context";
import * as S from "./Splash.style";
import hamster from "../../assets/hamster.svg";
import titleImg from "../../assets/main-title.svg";

const Splash = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // 자동로그인 기능 : 토큰이 있으면 바로 todo 페이지로
  useEffect(() => {
    if (user.access_token !== null) {
      navigate("/todo");
    }
  });

  return (
    <S.LoginWrapper>
      <S.LogoImg src={hamster} alt="햄스터 로고" />
      <br />
      <S.TitleImg src={titleImg} alt="기본 페이지 타이틀" />
      <S.LinkWrapper>
        <S.JoinLink to="/signin">이메일로 로그인</S.JoinLink>
        <S.JoinLink to="/signup">회원가입</S.JoinLink>
      </S.LinkWrapper>
    </S.LoginWrapper>
  );
};

export default Splash;
