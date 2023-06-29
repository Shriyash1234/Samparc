import './App.css';
import Header from './components/header'
import Exams from './components/exams'
import Carousel from './components/carousel'
import Registration from './components/registeration';
import DailyContests from './components/dailyContests';
import { FooterContainer } from './components/footercontainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <DailyContests/>
      <Exams/>
      <Registration/>
      <FooterContainer/>
    </div>
  );
}

export default App;
