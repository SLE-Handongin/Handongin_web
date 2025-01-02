import styled from 'styled-components'

function Title() {

  return (
    <>
    <Div>
        <TitleContainer>
            <TitleTextArea type='text' placeholder='* 제목을 입력하세요'></TitleTextArea>
        </TitleContainer>
    </Div>
    </>
  )
}

export default Title;

const TitleContainer = styled.div`
    margin-top: 35px; 
    width: 1330px;
    height: 85px;
    border-radius: 10px;
    border: 3px solid #FF7473;
    display: flex;
    align-items: center;
    justify-content: center;
`

const TitleTextArea = styled.input`
    border: none;
    outline: none;
    width: 1287px;
    height: 37px;
    font-size:18px;
    color: #34314C;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    width: 1920px;
    height: 117px;
`