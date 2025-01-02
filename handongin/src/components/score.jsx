import styled from 'styled-components';

function Score({LostNum, LostTotal, FoundNum, FoundTotal}) {
  return (
    <ScoreContainer>
      <Lost borderColor="#FF7473">
        <Title>분실한 물품</Title>
        <NumberContainer>
          <NumberRow>
            <NumberText>{LostNum}</NumberText>
            <Divider>|</Divider>
            <NumberText>{LostTotal}</NumberText>
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
            <NumberText>{FoundNum}</NumberText>
            <Divider>|</Divider>
            <NumberText>{FoundTotal}</NumberText>
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
`
/*
  
*/ 
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
  margin-top: -15px;
  padding-left: 12px;
  justify-content: space-between; 

  width: 100%;
  gap: 30px;
`;

const DescriptionText = styled.p`
  marign: 0;
  text-align: center; 
  
  font-size: 17px;
  color: #aaa;
`;