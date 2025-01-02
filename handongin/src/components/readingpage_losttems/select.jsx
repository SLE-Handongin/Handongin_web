import styled from 'styled-components'
import select from '../../assets/select.png'

function Select() {

  return (
    <>
      <SelectContainer>
        <SelectName><NameText color='#34314C'>분실물 종류</NameText></SelectName>
      </SelectContainer>
    </>
  )
}

export default Select

const SelectContainer = styled.div`
    width: 584px; 
    height: 52px;
`

const SelectName = styled.div`
    width: 148px;
    height: 52px;
    border-radius: 15px;
    background: #47B8E0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NameText = styled.p`
    color: ${(props) => props.Color};
    text-align: center;
    font-family: Inter;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`