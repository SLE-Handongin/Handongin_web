import styled from 'styled-components'
import logo from '../../assets/logo.png'
import report from '../../assets/report.png'
import profile from '../../assets/profile.png'

import Score from './score';
import Selection from './Selection';
import ContentBox from './box';


function Header() {

  return (
    <>
        <div style={{width: '100%', height: '100%'}}>
            <HeaderContainer>
                <Img src={logo} Width='404px' Height='119px' Cursor='pointer'></Img>
                <MenuContainer MarginLeft='168px'>
                    <MenuText>보관중인 분실물</MenuText>
                </MenuContainer>
                <MenuContainer MarginLeft='62px'>
                    <MenuText>분실물 요청</MenuText>
                </MenuContainer>
                <MenuContainer MarginLeft='62px'>
                    <MenuText>분실물 신고</MenuText>
                </MenuContainer>
                <NameContainer MarginLeft='260px'>
                    <MenuText>loy** 님</MenuText>
                </NameContainer>
                <ReportContainer>
                    <MenuText>신고내역 조회</MenuText>
                    <Img src={report} Width='24px' Height='24px'></Img>
                </ReportContainer>
                <Img src={profile} Width='52px' Height='52px' MarginLeft='19px' MarginBottom='25px'></Img>
            </HeaderContainer>

            <Score />
            <Selection />
            <ContentBox
                status= "분실"
                postnum = "1058"
                title="1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999991111111111"
                type="카드"
                location="현동홀"
                date="2024.12.30"
            />
            <ContentBox
                status="보관"
                postnum = "30"
                title = "너무 어렵다"
                type = "스마트폰"
                location = "느헤미야 홀"
                date =" 2024.12.31"
            />
            <ContentBox
                status="해결완료"
                postnum = "18"
                title = "됐어"
                type = "학생증"
                location = "상상랩 2"
                date =" 2024.12.31"
            />
        </div>
    </>
  )
}

export default Header

const HeaderContainer = styled.div`
    width: 1920px;
    height: 133px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    border-bottom: 1px solid #D9D9D9;
`

const Img = styled.img`
    width: ${(props) => props.Width};
    height: ${(props) => props.Height};
    margin-left: ${(props) => props.MarginLeft};
    margin-bottom: ${(props) => props.MarginBottom};
    cursor: ${(props) => props.Cursor};
`

const MenuContainer = styled.div`
    margin-left: ${(props) => props.MarginLeft};
    height: 83px;
    width: 174px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        border-bottom: 5px solid #FF7473;
        cursor: pointer;
    }
`

const MenuText = styled.p`
    color: #34314C;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
const NameContainer = styled.div`
    margin-left: ${(props) => props.MarginLeft};;
    height: 92px;
    width: 174px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ReportContainer = styled.div`
    width: 157px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #FFC952;
    border-radius: 10px;
    margin-bottom: 25px;
    cursor: pointer;
`