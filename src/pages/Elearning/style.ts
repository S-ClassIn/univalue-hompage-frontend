import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 10;
  background: #fff;
  margin-top: 40px;
`;

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1023px;
  padding: 16px 32px;
  border-radius: 100px;
  background: rgba(11, 11, 11, 0.15);
`;

export const ELearnBtn = styled.div`
  display: flex;
  padding: 8px 36px;
  background-color: #fff;
  border-radius: 12px;
  font-family: "Pretendard-Regular";
  font-weight: 550;
  line-height: 22px;
`;

export const LearningLayout = styled.div`
  padding: 150px 104px 0 104px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: left;
`;

// Card 그리드
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
  display: flex;
  width: 293px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 164px;
  flex-shrink: 0;
  background-color: #f7f7f7;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h3`
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  margin: 0;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #666;
  justify-content: flex-start;
`;

export const Name = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  color: #000;
`;

export const Job = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.14px;
`;
export const Pagination = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const PageButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#21b8bd" : "#f0f0f0")};
  color: ${(props) => (props.isActive ? "#fff" : "#000")};
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    background-color: #21b8bd;
    color: #fff;
  }
`;
