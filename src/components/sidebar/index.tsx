import styled from "styled-components";

export const SideBarLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;
  height: 1024px;

  .logo {
    width: 99.478px;
    height: 44px;
    flex-shrink: 0;
    margin: 40px 160px 0 32px;
  }
`;

export const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 83px;
`;

export const Home = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 199px 8px 32px;
  cursor: pointer;

  p {
    padding-left: 16px;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.032px;
  }

  &:hover {
    background-color: #e8e8e8;
    border-radius: 12px;
  }
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0 10px 32px;
  cursor: pointer;

  p {
    padding-left: 16px;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: -0.032px;
  }

  &:hover {
    background-color: #e8e8e8;
    border-radius: 12px;
  }
`;

const Sidebar = ({
  onUploadClick,
  onHomeClick,
}: {
  onUploadClick: () => void;
  onHomeClick: () => void;
}) => {
  return (
    <SideBarLayout>
      <img className="logo" src="/adminLogo.svg" alt="logo" />
      <SideBarBox>
        <Home onClick={onHomeClick}>
          <img src="/home.svg" alt="home" />
          <p>홈</p>
        </Home>

        <Upload onClick={onUploadClick}>
          <img src="/upload.svg" alt="upload" />
          <p>영상 업로드</p>
        </Upload>
      </SideBarBox>
    </SideBarLayout>
  );
};

export default Sidebar;
