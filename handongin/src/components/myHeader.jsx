import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import report from '../../assets/report.png';
import profile from '../../assets/profile.png';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../firebase/firebase'; // Firebase DB 연결

import Score from './score';
import Selection from './Selection';
import ContentBox from './box';

function MyHeader() {
  const [tab, setTab] = useState('lost'); // 현재 선택된 탭
  const [items, setItems] = useState([]); // 전체 데이터

  // Firebase 데이터 가져오기
  const fetchData = async () => {
    try {
      const collectionRef = tab === 'lost' ? collection(db, 'lostItems') : collection(db, 'FoundItems');
      const snapshot = await getDocs(collectionRef);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        source: doc.ref.parent.id, // 컬렉션 이름 가져오기
        ...doc.data(),
      }));
      setItems(data);
    } catch (error) {
      console.error('Firebase 데이터 가져오기 실패:', error);
    }
  };
  
  

  useEffect(() => {
    fetchData();
  }, [tab]);

  // 탭 변경 핸들러
  const handleTabChange = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <HeaderContainer>
        <Img src={logo} Width="404px" Height="119px" Cursor="pointer"></Img>
        <MenuContainer MarginLeft="168px">
          <MenuText>보관중인 분실물</MenuText>
        </MenuContainer>
        <MenuContainer MarginLeft="62px">
          <MenuText>분실물 요청</MenuText>
        </MenuContainer>
        <MenuContainer MarginLeft="62px">
          <MenuText>분실물 신고</MenuText>
        </MenuContainer>
        <NameContainer MarginLeft="260px">
          <MenuText>loy** 님</MenuText>
        </NameContainer>
        <ReportContainer>
          <MenuText>신고내역 조회</MenuText>
          <Img src={report} Width="24px" Height="24px"></Img>
        </ReportContainer>
        <Img src={profile} Width="52px" Height="52px" MarginLeft="19px" MarginBottom="25px"></Img>
      </HeaderContainer>

      <Score />
      <Selection TabChange={handleTabChange} />
      <ContentList>
  {items.map((item) => (
    <ContentBox
      key={item.id}
      source={item.source} // 소속 정보 전달
      solved={item.solved}
      postnum={item.postnum}
      category={item.category}
      title={item.title}
      location={item.place}
      date={item.date}
    />
  ))}
</ContentList>

    </div>
  );
}

export default MyHeader;

const HeaderContainer = styled.div`
  width: 1920px;
  height: 133px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: 1px solid #d9d9d9;
`;

const Img = styled.img`
  width: ${(props) => props.Width};
  height: ${(props) => props.Height};
  margin-left: ${(props) => props.MarginLeft};
  margin-bottom: ${(props) => props.MarginBottom};
  cursor: ${(props) => props.Cursor};
`;

const MenuContainer = styled.div`
  margin-left: ${(props) => props.MarginLeft};
  height: 83px;
  width: 174px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border-bottom: 5px solid #ff7473;
    cursor: pointer;
  }
`;

const MenuText = styled.p`
  color: #34314c;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const NameContainer = styled.div`
  margin-left: ${(props) => props.MarginLeft};
  height: 92px;
  width: 174px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReportContainer = styled.div`
  width: 157px;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffc952;
  border-radius: 10px;
  margin-bottom: 25px;
  cursor: pointer;
`;

const ContentList = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 20px auto;
`;
