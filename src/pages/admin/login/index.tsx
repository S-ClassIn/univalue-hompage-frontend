"use client";

import { authUrl } from "@/pages/apis/getAuthUrl";
import { useEffect } from "react";
import styled from "styled-components";

export const LoginLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 194px;
`;
export const LoginBtn = styled.button`
  display: flex;
  margin-top: 64px;
  height: 56px;
  padding: 16px 120px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;

  p {
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    letter-spacing: -0.028px;
  }
`;

const AdminLogin = () => {
  let OAUTH_URL = "";
  useEffect(() => {
    const getAuthUrl = async () => {
      try {
        const res = await authUrl();
        OAUTH_URL = res;
      } catch (err) {
        console.log(err);
      }
    };
    getAuthUrl();
  }, []);

  const locateOauth = () => {
    window.location.href = OAUTH_URL;
  };
  return (
    <LoginLayout onClick={locateOauth}>
      <img src="/adminLogo.svg" alt="logo" />
      <LoginBtn>
        <img src="/google.svg" alt="google" />
        <p>구글로 시작하기</p>
      </LoginBtn>
    </LoginLayout>
  );
};

export default AdminLogin;
