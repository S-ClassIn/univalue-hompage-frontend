"use client";

import React, { useState } from "react";
import * as S from "./style";

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
  {
    id: 6,
    title: "온/오프라인 맞춤 컨설팅",
    job: "강사",
    name: "박진수",
  },
  {
    id: 7,
    title: "창업·취업·진로 역량강화 프로그램",
    job: "강사",
    name: "박진수",
  },
  {
    id: 8,
    title: "대강사 매칭 프로그램",
    job: "강사",
    name: "박진수",
  },
];

const Elearning = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 8;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const currentCards = cards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {/* Header */}
      <S.HeaderLayout>
        <S.HeaderBox>
          <img src="/univalueLogo.svg" alt="Univalue Logo" />
          <S.ELearnBtn>E러닝</S.ELearnBtn>
        </S.HeaderBox>
      </S.HeaderLayout>

      <S.LearningLayout>
        <S.Title>E러닝</S.Title>
        <S.CardGrid>
          {currentCards.map((card) => (
            <S.Card key={card.id}>
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.CardInfo>
                <S.Name>{card.name}</S.Name>
                <S.Job>{card.job}</S.Job>
              </S.CardInfo>
            </S.Card>
          ))}
        </S.CardGrid>

        <S.Pagination>
          {Array.from({ length: totalPages }).map((_, index) => (
            <S.PageButton
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </S.PageButton>
          ))}
        </S.Pagination>
      </S.LearningLayout>
    </>
  );
};

export default Elearning;
