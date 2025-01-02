import styled from 'styled-components';
import { useState } from 'react';

function Selection({TabChange}){
  const [WhatTab, SetTab] = useState("lost");

  const SelectionTab = (tab) => {
    SetTab(tab);
    TabChange(tab);
  }

  return(
    <SelectionContainer>
      <Category>
        <Title isSelected={WhatTab === "lost"}onClick={() => SelectionTab("lost")}>분실한 물품</Title>
        <Title isSelected={WhatTab === "found"} onClick={() => SelectionTab("found")}>보관중인 물품</Title>
      </Category>
      <Line>
        <Horizon/>
        <CurrentBar isLeft={WhatTab === "lost"}></CurrentBar>
      </Line>
    </SelectionContainer>
  )
}

export default Selection;

const SelectionContainer = styled.div`
  display: flex;  
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 25px;
  align-items: center;
  width: 100%;
`

const Category = styled.div`
  position: relative;   
  display: flex;
  gap: 30px;
  height:30px;
  width:100%; 
  margin-left:500px;
`

const Title = styled.div`
  position: relative; 
  text-align: center;
  font-size: 17px;
  color: ${(props) => (props.isSelected ? "#000000" : "#978F8F")};

  cursor: pointer;
`

const Line = styled.div`
  height: 5px;
  position: relative;
  width: 100%;
  max-width: 1450px;
`;

const Horizon = styled.div`
  height: 1px;
  position: relative;
  width: 100%;
  background-color:black;
  margin:2px;
`;

const CurrentBar = styled.div`
  position: absolute;
  margin:-5px;
  

  left: ${(props) => (props.isLeft ? "0%" : "9%")};
  transition: left 0.3s ease;

  width: 9%;
  height: 5px;
  border-radius: 10px;
  background-color: #FFC952;
`;
