import ErrorBoudary from './errorboundary';
import Hero from './Color';
import styled from 'styled-components';
// Error boundary cannot be functional component
function App() {
  const array = [
    'black',
    'lightgreen',
    'lightblue',
    'white',
    'blue',
    'red',
    'green',
    'purple',
  ];
  return (
    <Container>
      {array.map((item) => (
        <ErrorBoudary key={item}>
          <Hero colorname={item}></Hero>
        </ErrorBoudary>
      ))}
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 50%;
  height: 100%;
`;
