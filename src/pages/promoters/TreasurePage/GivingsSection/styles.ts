import { BoldSpan } from "components/atomics/typography/Spans/styles";
import styled from "styled-components";

export const Container = styled.div``;

export const TextLastCard = styled.h4`
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const LastCardCarousel = styled.a`
  width: 206px;
  height: 123px;
  margin: 8px;
  padding: 12px 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.lightShadow};
`;

export const GivingText = styled(BoldSpan)`
  line-height: 22px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mediumGray};
`;

export const CardBlank = styled.div`
  max-width: 206px;
  padding: 18px 29px 12px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.lightShadow};
`;

export const Image = styled.img`
  height: 40px;
`;

export const SectionTitle = styled.h4`
  margin-top: 28px;
  color: ${({ theme }) => theme.colors.darkGray};
`;
