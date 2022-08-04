import styled, { css } from "styled-components";
import { Modal } from "../ModalBlank/styles";

export const ModalWithImage = styled(Modal)`
  overflow: hidden;
`;

export const Container = styled.div`
  padding: 16px;
`;

export const Image = styled.img`
  width: 100%;
  height: 152px;
`;

type TitleProps = {
  color?: string;
};

export const Title = styled.h2<TitleProps>`
  ${({ theme, color }) => css`
    text-align: center;
    color: ${color || theme.colors.ribonBlack};
  `}
`;

export const Body = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.darkGray};
    text-align: center;
    margin: 8px 0px 20px;
  `}
`;

export const RowsModalRow = styled.div`
  display: flex;
  margin-bottom: 28px;
`;
