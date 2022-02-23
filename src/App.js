import ErrorBoudary from './Errorboundary';
import Hero from './Components/Color';
import styled from 'styled-components';
import Navbar from './Components/Navbar';
import './Styles/navbar.scss';
// Error boundary cannot be functional component
function App() {
  const array = ['black', 'lightgreen', 'lightblue', 'white', 'blue', 'red', 'green', 'purple'];
  return (
    <Container>
      <Navbar />
      {array.map((item) => (
        <ErrorBoudary key={item}>
          <Hero colorname={item}></Hero>
        </ErrorBoudary>
      ))}
      <button className='myButton'>You can click me</button>
    </Container>
  );
}

export default App;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
