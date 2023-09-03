import './App.css';
import Header from './components/header'
import Exams from './components/exams'
import Carousel from './components/carousel'
import DailyContests from './components/dailyContests';
import MonthlyExams from './components/monthlyExams';
import TestseriesInfo from './components/testseriesInfo';
import Loans from './components/loans';
import {FooterContainer}  from './components/footercontainer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <DailyContests/>
      <MonthlyExams/>
      <Exams/>
      <TestseriesInfo/>
      <Loans/>
      <FooterContainer/>
    </div>
  );
}

export default App;
