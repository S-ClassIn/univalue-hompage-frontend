import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 32px;
  width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 40px 32px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const UploadBox = styled.div<{ dragActive: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px dashed ${(props) => (props.dragActive ? "#00bcd4" : "#969696")};
  border-radius: 8px;
  margin-top: 20px;
  background-color: ${(props) => (props.dragActive ? "#e0f7fa" : "#f6f6f6")};
  padding: 50px 0;
  transition: all 0.2s ease-in-out;
`;

export const UploadText = styled.p`
  color: #969696;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.18px;
`;

export const OrText = styled.p`
  color: #969696;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.18px;
`;

export const FileName = styled.p`
  margin: 0;
  color: #b8b8b8;
  font-family: Pretendard;
  font-size: 14px;
`;

export const VideoName = styled.p`
  margin: 0;
  color: #0b0b0b;
  font-family: Pretendard;
  font-size: 14px;
`;
export const UploadSuccessBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const FileBox = styled.div`
  margin: 48px 0 0 32px;
  display: flex;
  flex-direction: column;
`;
export const UploadedVideo = styled.video`
  width: 264px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`;

export const FileInfo = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 0px 0px 8px 8px;
  background-color: #f6f6f6;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 8px;
  }

  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 14px;
    outline: none;

    &:focus {
      border-color: #00bcd4;
      background-color: #e0f7fa;
    }
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end; /* 버튼을 오른쪽 정렬 */
  gap: 16px; /* 버튼 간의 간격 */
  margin-top: 20px; /* 상단 여백 */
`;

export const CancelButton = styled.button`
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const UploadButton = styled.button`
  background-color: #00bcd4;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #00acc1;
  }
`;
