import Avatar from '../img/imgcv.jpg';
//import '../styles/components/sidebar.sass'
//import Avatar from '../img/img perfil.jpg'
import Information from './Information';
import Networks from './Networks';


const Sidebar = () => {
  return (
    <aside id='sidebar'>
    <img src={Avatar} alt="Florencia Lapadatoff" /> 
    <h2 className='title'>FullStack developer web</h2> 
    <Networks/>
    <Information/>
    <a href='' download='' className='btn'>Descargar cv </a>  
    
     <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, quos sunt architecto neque fuga quis dolor obcaecati! Alias,
       recusandae. Natus aliquam ut esse at perspiciatis illo ratione placeat, consequatur cum!
     </p>
    </aside>
  )
}

export default Sidebar