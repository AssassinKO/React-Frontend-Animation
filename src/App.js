import logo from './logo.svg';
import './App.css';
import Announcement from  './Components/Anouncement/announcement';
import Header from './Components/Header/header';
import Section1 from './Components/Section1/section1'

function App() {
  return (
    <div className="App">
      <Announcement />
      <Header />
      <Section1 />
      {/* background-image */}
     <img src="assests\background\597288_plain-white-backgrounds-hd_1000x800_h.webp" className="background-image"></img>
    </div>
  );
}

export default App;
