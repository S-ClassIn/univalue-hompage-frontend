"use client";

import React, { useEffect, useState } from "react";
import * as S from "./style";
import { getVideoFile, vidioPage } from "../apis/videoApis";

interface LectureInfo {
  id: number;
  videoName: string;
  videoPath: string;
  uuid: string;
  title: string;
  name: string;
  role: string;
}

const Elearning = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lecture, setLecture] = useState<LectureInfo[]>([]);
  const [totalPage, setTotalPage] = useState(0);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await vidioPage(1);
        setLecture(res.content);
        setTotalPage(res.totalPages);
        console.log(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

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
          {lecture.map((card) => (
            <S.Card key={card.id}>
              <S.CardTitle>{card.title}</S.CardTitle>
              <S.CardInfo>
                <S.Name>{card.name}</S.Name>
                <S.Job>{card.role}</S.Job>
              </S.CardInfo>
            </S.Card>
          ))}
        </S.CardGrid>

        <S.Pagination>
          <S.PageButton
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
          >
            {"<"}
          </S.PageButton>
          {Array.from({ length: totalPage }).map((_, index) => (
            <S.PageButton
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </S.PageButton>
          ))}
          <S.PageButton
            onClick={() =>
              handlePageChange(
                currentPage < totalPage ? currentPage + 1 : totalPage,
              )
            }
          >
            {">"}
          </S.PageButton>
        </S.Pagination>
      </S.LearningLayout>
    </>
  );
};

export default Elearning;
