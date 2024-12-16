"use client";

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

const HomePage = () => {
  const cardsData = [
    {
      id: 1,
      image: "/image-placeholder1.jpg",
      text: "매력적인 목소리로 나를 변화시키는 방법 1",
      name: "김성욱 이사",
    },
    {
      id: 2,
      image: "/image-placeholder2.jpg",
      text: "매력적인 목소리로 나를 변화시키는 방법 2",
      name: "김성욱 이사",
    },
    {
      id: 3,
      image: "/image-placeholder3.jpg",
      text: "매력적인 목소리로 나를 변화시키는 방법 3",
      name: "김성욱 이사",
    },
    {
      id: 4,
      image: "/image-placeholder4.jpg",
      text: "매력적인 목소리로 나를 변화시키는 방법 4",
      name: "김성욱 이사",
    },
    {
      id: 5,
      image: "/image-placeholder5.jpg",
      text: "매력적인 목소리로 나를 변화시키는 방법 5",
      name: "김성욱 이사",
    },
    {
      id: 6,
      image: "/image-placeholder6.jpg",
      text: "매력적인 목소리로 나를 변화시키는 방법 6",
      name: "김성욱 이사",
    },
  ];

  return (
    <HomeContainer>
      <CardList>
        {cardsData.map((item, index) => (
          <div key={item.id}>
            <Card>
              <InfoBox>
                <Image src={item.image} alt={item.text} />
                <TextBox>
                  <Text>{item.text}</Text>
                  <Name>{item.name}</Name>
                </TextBox>
              </InfoBox>
              <IconBox>
                <img src="/pen.svg" alt="icon" />
                <img src="/delete.svg" alt="icon" />
              </IconBox>
            </Card>
            {index !== cardsData.length - 1 && <Divider />}{" "}
          </div>
        ))}
      </CardList>
    </HomeContainer>
  );
};

export default HomePage;
