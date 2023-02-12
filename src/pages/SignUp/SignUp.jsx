import InputForm from "../../components/AuthForm/AuthForm";

// SignUp true/false 에 따라 InputForm 페이지에서 로그인 화면 보일지 회원가입 화면 보일지 달라짐

const SignUp = () => {
  return <InputForm signUp={true} />;
};

export default SignUp;
