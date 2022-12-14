import { FaLinkedinIn, FaGithubAlt} from 'react-icons/fa';

import '../styles/components/networks.sass';


const redes = [
   { name: "linkedin", icon: <FaLinkedinIn/> },
   { name: "github", icon: <FaGithubAlt/> }
];

const Networks = () => {
  return (
    <section id='networks'>
      {redes.map((r)=> (
        <a href='#' className='redes-btn' id={r.name} key={r.name}>
             {r.icon} 
        </a>
      ))}
    </section>
  )
}

export default Networks