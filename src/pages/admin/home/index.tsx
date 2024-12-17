"use client";

import { lectureList, deleteLecture } from "@/pages/apis/videoApis";
import { useEffect, useState } from "react";
import styled from "styled-components";
import EditVideoModal from "@/components/modal";

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

  border-bottom: 1px solid #e0e0e0;
  background-color: white;
  padding: 15px 0;
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState<LectureInfo | null>(
    null,
  );

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await lectureList();
        setLecture(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchLectures();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteLecture(id);
      setLecture((prev) => prev.filter((item) => item.id !== id));
      alert("강의가 삭제되었습니다.");
    } catch (err) {
      console.error(err);
      alert("강의 삭제에 실패했습니다.");
    }
  };

  const handleEdit = (lecture: LectureInfo) => {
    setSelectedLecture(lecture);
    setIsEditModalOpen(true);
  };

  const closeModal = () => {
    setIsEditModalOpen(false);
    setSelectedLecture(null);
  };

  const refreshLectures = async () => {
    try {
      const res = await lectureList();
      setLecture(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <HomeContainer>
      <CardList>
        {lecture.map((item) => (
          <Card key={item.id}>
            <div>
              <p>{item.title}</p>
              <p>{item.name}</p>
            </div>
            <IconBox>
              <img
                src="/pen.svg"
                alt="edit"
                onClick={() => handleEdit(item)}
                style={{ cursor: "pointer" }}
              />
              <img
                src="/delete.svg"
                alt="delete"
                onClick={() => handleDelete(item.id)}
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Card>
        ))}
      </CardList>

      {isEditModalOpen && selectedLecture && (
        <EditVideoModal
          onClose={closeModal}
          lectureInfo={selectedLecture}
          refreshLectures={refreshLectures}
        />
      )}
    </HomeContainer>
  );
};

export default HomePage;
