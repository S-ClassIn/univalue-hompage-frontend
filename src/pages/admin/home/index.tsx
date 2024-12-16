"use client";

import { lectureList, vidioPage } from "@/pages/apis/videoApis";
import { useEffect, useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 20px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e0e0e0;
  height: 100vh;
`;

const CardList = styled.div`
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  display: flex;
  align-items: center;

  justify-content: space-between;
  background-color: white;
  padding: 15px 0;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid #e0e0e0;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Name = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  color: #969696;
  margin-top: 2px;
`;

const IconBox = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 40px;
`;

interface LectureInfo {
  id: number;
  videoName: string;
  videoPath: string;
  uuid: string;
  title: string;
  name: string;
  role: string;
}

const HomePage = () => {
  const [lecture, setLecture] = useState<LectureInfo[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await lectureList();
        setLecture(res);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <HomeContainer>
      <CardList>
        {lecture.map((item, index) => (
          <div key={item.id}>
            <Card>
              <InfoBox>
                <TextBox>
                  <Text>{item.title}</Text>
                  <Name>{item.name}</Name>
                </TextBox>
              </InfoBox>
              <IconBox>
                <img src="/pen.svg" alt="icon" />
                <img src="/delete.svg" alt="icon" />
              </IconBox>
            </Card>
            {index !== lecture.length - 1 && <Divider />}{" "}
          </div>
        ))}
      </CardList>
    </HomeContainer>
  );
};

export default HomePage;
