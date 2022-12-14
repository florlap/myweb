import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './styles/components/app.sass'
import { Link } from "react-dom";

function App() {


  return (
    <div id="portfolio">
    <h1>Florencia Romina Lapadatoff </h1>
    <Sidebar/>
    <MainContent/>
    </div>
  )
}

export default App
