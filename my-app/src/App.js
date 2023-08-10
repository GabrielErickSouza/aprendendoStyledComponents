import {Title,TitleSmall,Container} from './style'

function App() {
  return (
    <Container>
      <Title fontsize={20}>
        Hello World!!
        <span>Meu lugar</span>
      </Title>
      <TitleSmall>text small</TitleSmall>
    </Container>
  );
}

export default App;
