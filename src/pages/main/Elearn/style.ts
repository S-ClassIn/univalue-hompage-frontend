import styled from "styled-components";

interface CardsWrapperProps {
  currentIndex: number;
}

export const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 188px 0 188px 104px;
  background-color: #fff;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

export const Title = styled.p`
  font-family: Pretendard;
  color: #000;
  font-size: 48px;

  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.64px;
`;

export const CardSlider = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const CardsWrapper = styled.div<CardsWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
  transition: transform 0.5s ease;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 348px;
  height: 400px;
  padding: 32px 24px 38px 24px;
  gap: 91px;

  margin-right: 10px;
  border-radius: 16px;
  background-color: #f8f8f8;

  &:hover {
    background-color: #21b8bd;
  }
`;

export const CardTitle = styled.p`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.28px;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 188px;
`;

export const ArrowButton = styled.button`
  background-color: #ffffff;
  border: none;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Job = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;

  line-height: 160%;
  letter-spacing: 0.18px;
`;

export const Name = styled.p`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  color: #666666;

  line-height: 160%;
  letter-spacing: 0.18px;
`;
