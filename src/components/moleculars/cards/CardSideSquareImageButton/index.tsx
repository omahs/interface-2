import Button from "components/atomics/Button";
import * as S from "./styles";
import CardSquareImage from "../CardSquareImage";

export type Props = {
  title: string;
  text: string;
  image: string;
  buttonText: string;
  onButtonClick: () => void;
};
function CardSideSquareImageButton({
  title,
  text,
  image,
  buttonText,
  onButtonClick,
}: Props): JSX.Element {
  return (
    <S.Container>
      <S.LeftContainer>
        <S.ImageContainer>
          <CardSquareImage image={image} />
        </S.ImageContainer>
        <Button
          text={buttonText}
          onClick={onButtonClick}
          style={{ borderRadius: 16, fontSize: 12, height: 28 }}
        />
      </S.LeftContainer>
      <S.RightContainer>
        <S.Title>{title}</S.Title>
        <S.Text>{text}</S.Text>
      </S.RightContainer>
    </S.Container>
  );
}

export default CardSideSquareImageButton;
