"use client";

import React, { useState } from "react";
import * as S from "./style";

const Elearn = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "이것만 따라쓰면 자소서 합격",
      job: "강사",
      name: "강지원",
    },
    {
      id: 2,
      title: "면접 잘 붙는 사람 특징",
      job: "강사",
      name: "김시연",
    },
    {
      id: 3,
      title: "친구와 불편한 관계 유지해야할까요?",
      job: "강사",
      name: "박강원",
    },

    {
      id: 4,
      title: "대체불가능한 사람이 되는 법",
      job: "강사",
      name: "김영은",
    },

    {
      id: 5,
      title: "챗 GPT와 함께 취업하기",
      job: "강사",
      name: "유기상",
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
