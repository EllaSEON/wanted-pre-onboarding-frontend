import Input from "../../components/Input/Input";
import * as S from "./SignIn.style";

const SignIn = () => {
  return (
    <S.LoginWrapper>
      <S.MainWrapper>
        <S.LoginTitle>로그인</S.LoginTitle>
        <form>
          <Input
            data-testid="email-input"
            label="이메일"
            forid="email"
            type="email"
          />
          <Input
            data-testid="password-input"
            label="비밀번호"
            forid="password"
            type="password"
          />
          <div>메세지</div>
          <S.LoginBtn data-testid="signin-button" children="로그인" />
        </form>
        <S.LoginLink to="/signup">이메일로 회원가입</S.LoginLink>
      </S.MainWrapper>
    </S.LoginWrapper>
  );
};

export default SignIn;
