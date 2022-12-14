import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiReact,
  DiSass,
  DiPostgresql,
  

} from 'react-icons/di';

import { SiRedux, SiPostman, SiExpress} from 'react-icons/si'

import '../styles/components/technologies.sass'

const tech= [
  { id: 'javascript', name: 'JS', icon: <DiJavascript1/>},
  { id: 'html', name: 'HTML5', icon: <DiHtml5/>},
  { id: 'css', name: 'CSS3', icon: <DiCss3/>},
  { id: 'postgresql', name: 'PostgreSql', icon: <DiPostgresql/>},
  { id: 'node', name: 'Node.js', icon: <DiNodejs/>},
  { id: 'express', name: 'Express', icon: <SiExpress/>},
  { id: 'postman', name: 'Postman', icon: <SiPostman/>},
  { id: 'react', name: 'React', icon: <DiReact/>},
  { id: 'redux', name: 'Redux', icon: <SiRedux/>},
  { id: 'sass', name: 'Sass', icon: <DiSass/>}
];

const Technologies = () => {
  return (
    <section className='technologies-container'>
     <h2>Tecnologias</h2>
     <div className='technologies-grid'>
      { tech.map((t)=> (
        <div className='technology-card'id={t.id} key={t.id}>
          {t.icon}
          <div className='technology-info'>
           <h3>{t.name}</h3>
           
          </div>
        </div>
      ))}
     </div>
    </section>
  )
}

export default Technologies
