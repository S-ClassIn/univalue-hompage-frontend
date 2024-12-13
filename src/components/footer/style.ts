import styled from "styled-components";

export const FooterLayout = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #111;
  color: #fff;
  padding: 40px 100px;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 100px;
    height: auto;
  }
`;

export const Address = styled.div`
  line-height: 1.4;
  font-size: 14px;
  font-family: "Pretendard";
  color: #fff;
  margin-top: 15%;

  div {
    margin-bottom: 4px;
  }
`;

export const RightBox = styled.div`
  margin-top: 6%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: right;

  p {
    margin: 2px 0;

    line-height: 1.4;
    font-size: 14px;
    font-family: "Pretendard";
    color: #fff;
  }
`;

export const Contact = styled.div`
  margin-top: 10px;
`;

export const RowBox = styled.div`
  display: flex;
  gap: 70px;
`;

export const BusinessNumbers = styled.div`
  margin-top: 10px;
`;
