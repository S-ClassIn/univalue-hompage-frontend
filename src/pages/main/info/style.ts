import styled from "styled-components";

export const InfoLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 188px 104px;
  background-color: #fff;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
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
  font-family: Pretendard;
  color: #666666;
  font-size: 20px;

  font-style: normal;
  font-weight: 500;

  line-height: 32px;
  letter-spacing: 0.2px;

  margin-top: 2%;
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
