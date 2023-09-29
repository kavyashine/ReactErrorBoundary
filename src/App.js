import './App.css';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <h1 className='heading'>Implementing Error Boundaries</h1>
      <ErrorBoundary>
      <Counter/>
      </ErrorBoundary>
      
    </div>
  );
}

export default App;
