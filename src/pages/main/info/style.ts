import styled from "styled-components";

interface CardsWrapperProps {
  currentIndex: number;
}

export const InfoLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 188px 0 188px 104px;
  background-color: #fff;
`;

export const TextBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 28%;
`;

export const Title1 = styled.p`
  font-family: Pretendard;
  color: #000;
  font-size: 48px;

  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.64px;
`;

export const Title2 = styled(Title1)``;

export const SubTitle1 = styled.p`
  margin-top: 2%;
  font-family: Pretendard;
  color: #666666;
  font-size: 20px;

  font-style: normal;
  font-weight: 500;

  line-height: 32px;
  letter-spacing: 0.2px;
`;

export const SubTitle2 = styled.p`
  font-family: Pretendard;
  color: #666666;
  font-size: 20px;

  font-style: normal;
  font-weight: 500;

  line-height: 32px;
  letter-spacing: 0.2px;
`;

export const CardSlider = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

export const CardsWrapper = styled.div<CardsWrapperProps>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 348}px)`};
  width: fit-content;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 397px;
  height: 502px;
  margin: 0 10px;
  border-radius: 16px;
  background-color: #f8f8f8;

  img {
    width: 100%;
    height: 310px;
    object-fit: cover;
    border-radius: 0 0 16px 16px;
  }
`;

export const CardTitle = styled.p`
  font-family: Pretendard;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.28px;
  padding: 20px;
`;

export const CardTags = styled.div`
  display: flex;
  gap: 5px;
  padding: 20px 0 10px 20px;

  span {
    font-family: Pretendard;
    font-size: 16px;
    color: #21b8bd;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
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
