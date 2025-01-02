import styled from 'styled-components';

function ContentBox({ status, postnum, title, type,  location, date }){
  const LimitedTitle = title.length > 99 ? title.slice(0, 99) + "..." : title;
  return(
    <BoxContainer status={status}>
      <Left>
        <Status status={status}>{status}</Status>
        <Postnum>{postnum}</Postnum>
      </Left>
      
      <Title>{LimitedTitle}</Title>
      
      <Right>
        <TypeLocation>
          {type} | {location}
        </TypeLocation>
        <Date>{date}</Date>
      </Right>
    </BoxContainer>
  )
}

export default ContentBox;

const BoxContainer = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
  align-items:center;

  width: 1400px;
  height: 95px;
  padding: 15px;
  border: 3px solid  ${(props) => props.status === '분실' ? '#FF7473' : props.status === '보관' ? '#47B8E0' : '#A0A0A0'};
  background-color: #ffffff;
  border-radius: 10px;

`

const Left = styled.div`
  gap:10px;
  width: 80px;
  text-align:center;
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  padding-right: 30px;
`

const Status = styled.div`
  color: ${(props) =>
    props.status === '분실' ? '#FF7473' : props.status === '보관' ? '#47B8E0' : '#A0A0A0'};
  font-weight: bold;
  font-size: 14px;
  
`

const Postnum = styled.div`
  font-size: 17px;
  color: #7E6363;
`

const Title = styled.div`
  flex: 1;
  padding-left:20px;

  font-size: 17px;
  font-weight: bold;
  color: #000000;

  
`

const TypeLocation = styled.div`
    font-size:17px;
    color: #000000;
    font-weight: bold;
`

const Date = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #000000;
`