"use client";

import React, { useState } from "react";
import * as S from "./style";

const Elearn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "온/오프라인 맞춤 컨설팅",
      job: "강사",
      name: "박진수",
    },
    {
      id: 2,
      title: "창업·취업·진로 역량강화 프로그램",
      job: "강사",
      name: "박진수",
    },
    {
      id: 3,
      title: "대강사 매칭 프로그램",
      job: "강사",
      name: "박진수",
    },

    {
      id: 4,
      title: "대강사 매칭 프로그램",
      job: "강사",
      name: "박진수",
    },

    {
      id: 5,
      title: "대강사 매칭 프로그램",
      job: "강사",
      name: "박진수",
    },
  ];

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <S.InfoLayout>
      <S.TextBox>
        <S.Title>E러닝</S.Title>
        <S.BtnBox>
          <S.ArrowButton onClick={handlePrev} disabled={currentIndex === 0}>
            &lt;
          </S.ArrowButton>
          <S.ArrowButton
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
          >
            &gt;
          </S.ArrowButton>
        </S.BtnBox>
      </S.TextBox>
      <S.CardSlider>
        <S.CardsWrapper currentIndex={currentIndex}>
          {cards.map((card) => (
            <S.Card key={card.id}>
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.NameBox>
                <S.Job>{card.job}</S.Job>
                <S.Name>{card.name}</S.Name>
              </S.NameBox>
            </S.Card>
          ))}
        </S.CardsWrapper>
      </S.CardSlider>
    </S.InfoLayout>
  );
};

export default Elearn;
