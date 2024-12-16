"use client";

import Main from "@/pages/main";
import { useAuthService } from "@/utils/auth/useAuthService";
import { useAxiosInterceptor } from "@/utils/cusomAxios";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const { hash } = window.location;
    const params = new URLSearchParams(hash.substring(1));
    const accessToken = params.get("access_token");

    if (accessToken) {
      console.log("Access Token Found:", accessToken);
      useAuthService();
      useAxiosInterceptor();
    } else {
      console.log("Access Token Not Found");
    }
  }, []);

  return (
    <>
      <Main />
    </>
  );
}
