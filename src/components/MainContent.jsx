import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';
import '../styles/components/maincontent.sass';
//import Landing from './Landing';

const MainContent = () => {
  return (
    <main id='main-content'>
      <About/>
      <Technologies/>
      <Projects/>
      {/* <Landing/> */}
    </main>
  )
}

export default MainContent