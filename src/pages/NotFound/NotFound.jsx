import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundHamster from "../../assets/notfound-hamster.svg";
import * as S from "./NotFound.style";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoPrevPage = () => {
    navigate(-1);
  };

  return (
    <S.LayOut>
      <img
        src={NotFoundHamster}
        alt="햄스터 아이콘"
        style={{ width: 222, height: 222 }}
      />
      <S.NotFoundMessage>페이지를 찾을 수 없습니다.ㅜㅜ</S.NotFoundMessage>
      <Button type="button" children="이전 페이지" onClick={handleGoPrevPage} />
    </S.LayOut>
  );
};

export default NotFound;
