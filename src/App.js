import './App.css';
import ErrorBoudary from './errorboundary';
import Hero from './Hero';
// Error boundary cannot be functional component
function App() {
  const array = ['Pavana', 'Rachana', 'Kavana'];
  return array.map((item) => (
    <ErrorBoudary>
      <Hero heroname={item}></Hero>
    </ErrorBoudary>
  ));
}

export default App;
