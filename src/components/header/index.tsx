"use client";

import React, { useState, useEffect } from "react";
import * as S from "./style";

const Header = () => {
  const [isWhiteMode, setIsWhiteMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY > 0 && scrollY < viewportHeight) {
        setIsWhiteMode(false);
      } else if (scrollY >= viewportHeight) {
        setIsWhiteMode(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.HeaderLayout isWhiteMode={isWhiteMode}>
      <S.HeaderBox isWhiteMode={isWhiteMode}>
        <img src="/univalueLogo.svg" alt="Univalue Logo" />
        <S.ELearnBtn>E러닝</S.ELearnBtn>
      </S.HeaderBox>
    </S.HeaderLayout>
  );
};

export default Header;
