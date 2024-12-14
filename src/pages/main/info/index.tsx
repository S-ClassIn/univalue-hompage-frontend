"use client";

import React, { useState, useEffect } from "react";
import * as S from "./style";

const Info = () => {
  return (
    <S.InfoLayout>
      <S.TextBox>
        <S.Title1>다양한 서비스,</S.Title1>
        <S.Title2>다양한 가치</S.Title2>
        <S.SubTitle1>유니밸류는 다양한 서비스로 </S.SubTitle1>
        <S.SubTitle2>많은 가치를 선사하고자 합니다. </S.SubTitle2>
      </S.TextBox>
    </S.InfoLayout>
  );
};

export default Info;
