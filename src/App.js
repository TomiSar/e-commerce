import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <h1 className='text-3xl font-bold text-sky-700'>E-Commerce</h1>
        <br />
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
