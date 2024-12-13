import styled from "styled-components";

interface DotProps {
  isActive: boolean;
}

export const MainLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 40px 208px;
  background-color: #21b8bd;
`;

export const LandingBox = styled.div`
  transition: background-color 0.3s ease;
  padding-top: 84px;
`;

export const Title1 = styled.p`
  font-family: Pretendard;
  color: #fff;
  font-size: 60px;

  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  letter-spacing: 0.64px;
`;

export const Title2 = styled.p`
  margin-bottom: 12px;
  font-family: Pretendard;
  color: #fff;
  font-size: 60px;

  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.64px;
`;

export const SubTitle = styled.p`
  margin-bottom: 48px;
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;

  font-weight: 200;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const Dots = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Dot = styled.div<DotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;

  background-color: ${({ isActive }) => (isActive ? "#ffffff" : "#bbbbbb")};
  transition: background-color;
`;
