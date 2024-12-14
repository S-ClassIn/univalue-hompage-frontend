"use client";

import React, { useState } from "react";
import * as S from "./style";

const Info = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 카드의 인덱스

  const cards = [
    {
      id: 1,
      title: "온/오프라인 맞춤 컨설팅",
      tags: ["#course", "#course", "#course"],
      image: "/path-to-image1.jpg",
    },
    {
      id: 2,
      title: "창업·취업·진로 역량강화 프로그램",
      tags: ["#course", "#course", "#course"],
      image: "/path-to-image2.jpg",
    },
    {
      id: 3,
      title: "대강사 매칭 프로그램",
      tags: ["#course", "#course", "#course"],
      image: "/path-to-image3.jpg",
    },
    // 필요에 따라 더 추가 가능
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
        <S.Title1>다양한 서비스,</S.Title1>
        <S.Title2>다양한 가치</S.Title2>
        <S.SubTitle1>유니밸류는 다양한 서비스로 </S.SubTitle1>
        <S.SubTitle2>많은 가치를 선사하고자 합니다. </S.SubTitle2>
      </S.TextBox>
      <S.CardSlider>
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
        <S.CardsWrapper currentIndex={currentIndex}>
          {cards.map((card) => (
            <S.Card key={card.id}>
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.CardTags>
                {card.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}

                <img src={card.image} alt={card.title} />
              </S.CardTags>
            </S.Card>
          ))}
        </S.CardsWrapper>
      </S.CardSlider>
    </S.InfoLayout>
  );
};

export default Info;
