import styled, { css } from "styled-components";

interface ModeProps {
  isWhiteMode: boolean;
}

export const HeaderLayout = styled.div<ModeProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 200px;
  background-color: #21b8bd;
  position: fixed;
  z-index: 10;

  ${(props) =>
    props.isWhiteMode &&
    css`
      background: #fff;
    `}
`;

export const HeaderBox = styled.div<ModeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1023px;
  padding: 16px 32px;
  border-radius: 100px;
  background: rgba(250, 250, 250, 0.3);

  ${(props) =>
    props.isWhiteMode &&
    css`
      background: rgba(11, 11, 11, 0.15);
    `}
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
