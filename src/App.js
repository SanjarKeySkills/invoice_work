import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import LinkBlock from './components/LinkBlock/LinkBlock';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <LinkBlock />
      <Portfolio />
    </div>
  );
}

export default App;
