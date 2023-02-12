import { StyledBtn, SIZES, COLOR } from "./Button.style";

const Button = ({
  type,
  disabled,
  children,
  size,
  btncolor,
  onClick,
  className,
}) => {
  const sizeStyle = SIZES[size];
  const btnColor = COLOR[btncolor];
  return (
    <StyledBtn
      type={type}
      disabled={disabled}
      sizeStyle={sizeStyle}
      btncolor={btnColor}
      onClick={onClick}
      className={className}
    >
      {children}
    </StyledBtn>
  );
};

export default Button;
