"use client";

import React, { useState, useEffect } from "react";
import * as S from "./style";

const Landing = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const LandingData = [
    {
      id: 1,
      title1: "세상을 변화시키는 저희는 ",
      title2: "유니밸류입니다",
      subTitle: "가치있는 세상을 만들어갑니다.",
    },
    {
      id: 2,
      title1: "주식회사 쓰담마케팅과 ",
      title2: "업무 협력 및 공동 프로젝트 수행",
      subTitle: "2024.01.23",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) =>
        prev === LandingData.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.MainLayout>
      <S.LandingBox>
        <S.Title1>{LandingData[currentBanner].title1}</S.Title1>
        <S.Title2>{LandingData[currentBanner].title2}</S.Title2>
        <S.SubTitle>{LandingData[currentBanner].subTitle}</S.SubTitle>
        <S.Dots>
          {LandingData.map((_, index) => (
            <S.Dot key={index} isActive={currentBanner === index} />
          ))}
        </S.Dots>
      </S.LandingBox>
    </S.MainLayout>
  );
};

export default Landing;
