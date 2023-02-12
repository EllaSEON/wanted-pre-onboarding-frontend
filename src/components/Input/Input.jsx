import * as S from "./Input.style";

const Input = (props) => {
  const {
    label,
    forid,
    type,
    placeholder,
    className,
    state,
    onChange,
    onKeyUp,
    onBlur,
  } = props;

  return (
    <S.LabelInputWrap className={className}>
      <S.Label htmlFor={forid}>{label}</S.Label>
      <S.Input
        type={type}
        id={forid}
        placeholder={placeholder}
        value={state}
        onChange={onChange}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
      />
    </S.LabelInputWrap>
  );
};

export default Input;
