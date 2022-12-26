import Card from './components/card';
import CheckoutCard from './components/checkoutCard';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Row-Card">
        <Card />
        <CheckoutCard />
      </div>
    </div>
  );
}

export default App;
