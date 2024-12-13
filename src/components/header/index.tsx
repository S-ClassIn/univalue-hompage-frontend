"use client";

import * as S from "./style";
import Image from "next/image";

const Header = () => {
  return (
    <S.HeaderLayout>
      <S.HeaderBox>
        <img src="/univalueLogo.svg" alt="Univalue Logo" />
        <S.ELearnBtn>E러닝</S.ELearnBtn>
      </S.HeaderBox>
    </S.HeaderLayout>
  );
};

export default Header;
