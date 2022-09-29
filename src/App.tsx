import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  //styled를 사용시 CSS작성법으로 사용가능, 원하는 이름 가능
  display: flex;
  width: 100vh;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;
const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>HELLO</Title>
    </Wrapper>
  );
}

export default App;
//styled.input.attrs({required:true}) 작성시  컴포넌트 생성시 속성 부여 가능
//animation은 styled가 아닌 keyframes로 작성
