import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../../firebase/firebase'; // firebase 경로 import
import { collection, getDocs, query, where } from 'firebase/firestore';

function Score() {
  const [lostNum, setLostNum] = useState(0);
  const [lostTotal, setLostTotal] = useState(0);
  const [foundNum, setFoundNum] = useState(0);
  const [foundTotal, setFoundTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // `lostItems`에서 데이터 가져오기
        const lostRef = collection(db, 'lostItems');
        const lostSnapshot = await getDocs(lostRef);
        const lostUnresolved = query(lostRef, where('solved', '==', false));
        const lostUnresolvedSnapshot = await getDocs(lostUnresolved);

        setLostTotal(lostSnapshot.size); // 총 게시물 수
        setLostNum(lostUnresolvedSnapshot.size); // 미해결 수

        // `foundItems`에서 데이터 가져오기
        const foundRef = collection(db, 'FoundItems');
        const foundSnapshot = await getDocs(foundRef);
        const foundUnresolved = query(foundRef, where('solved', '==', false));
        const foundUnresolvedSnapshot = await getDocs(foundUnresolved);

        setFoundTotal(foundSnapshot.size); // 총 게시물 수
        setFoundNum(foundUnresolvedSnapshot.size); // 미해결 수
      } catch (error) {
        console.error('Firestore 데이터 가져오기 실패:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScoreContainer>
      <Lost borderColor="#FF7473">
        <Title>분실한 물품</Title>
        <NumberContainer>
          <NumberRow>
            <NumberText>{lostNum}</NumberText>
            <Divider>|</Divider>
            <NumberText>{lostTotal}</NumberText>
          </NumberRow>
          <NumberDescription>
            <DescriptionText>미해결</DescriptionText>
            <DescriptionText>총 게시물</DescriptionText>
          </NumberDescription>
        </NumberContainer>
      </Lost>
      <Found borderColor="#47B8E0">
        <Title>보관중인 물품</Title>
        <NumberContainer>
          <NumberRow>
            <NumberText>{foundNum}</NumberText>
            <Divider>|</Divider>
            <NumberText>{foundTotal}</NumberText>
          </NumberRow>
          <NumberDescription>
            <DescriptionText>미해결</DescriptionText>
            <DescriptionText>총 게시물</DescriptionText>
          </NumberDescription>
        </NumberContainer>
      </Found>
    </ScoreContainer>
  );
}

export default Score;


const ScoreContainer = styled.div`
  height: 110px;
  position: relative;
  margin-top: 125px; 
`;

const Lost = styled.div`
  display: flex;
  position: absolute;
  left: 1192px;
  padding: 10px;
  flex-direction: column;
  align-items: center;

  width: 200px;
  height: 110px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.borderColor};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Found = styled(Lost)`
  left: 1452px;
  border-color: ${(props) => props.borderColor};
`;

const Title = styled.p`
  position: absolute;
  top: -10px;
  margin: 0;
  padding: 0 10px;

  background: white;
  font-size: 16px;
  font-weight: bold;
  z-index: 1;
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumberRow = styled.div`
  display: flex;
  margin-top: 28px;
  align-items: center; 
  gap: 35px;
`;

const NumberText = styled.p`
  margin: 0px;
  font-size: 25px;
  font-weight: bold;
`;

const Divider = styled.div`
  display: flex;
  font-size: 20px;
  color: #FFC952;
`;

const NumberDescription = styled.div`
  display: flex;
  padding-left: 12px;
  justify-content: space-between; 

  width: 100%;
  gap: 30px;
`;

const DescriptionText = styled.p`
  margin: 0;
  text-align: center; 
  font-size: 17px;
  color: #aaa;
`;
