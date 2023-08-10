import {Title,TitleSmall,Container,GlobalStyle} from './style'


function App() {
  return (
    <>
    <GlobalStyle/>
    <Container>
      <Title fontSize={20}>
        Hello World!!
        <span>Meu lugar</span>
      </Title>
      <TitleSmall>text small</TitleSmall>
    </Container>
    </>
  );
}

export default App;
