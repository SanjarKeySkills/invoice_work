import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import LinkBlock from './components/LinkBlock/LinkBlock';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Services />
      <LinkBlock />
    </div>
  );
}

export default App;
