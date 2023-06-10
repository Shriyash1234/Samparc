import './App.css';
import Header from './components/header'
import Exams from './components/exams'
import Carousel from './components/carousel'
import Registration from './components/registeration';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Exams/>
      <Registration/>
    </div>
  );
}

export default App;
