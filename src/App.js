import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <h1 className='text-3xl font-bold text-sky-700'>Hello E-Commerce</h1>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
