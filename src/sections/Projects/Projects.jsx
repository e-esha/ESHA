import coder from '../../assets/coder.jpg';
import webdesign from '../../assets/webdesign.png';
import ProjectCard from '../../common/ProjectCard';
import style from './ProjectsStyle.module.css';
function Projects() {
  return (<section id='projects' className={style.container}>
    <h1 className='sectionTitle'>Projects</h1>
   <div className={style.projectsContainer}>
   <ProjectCard src={webdesign} link={""} h3="Webdesign"
   p="I am interested "/>

<ProjectCard src={coder} link={""} h3="Coding"
   p="I am interested "/>

   </div>
  </section>
  
  );
}

export default Projects;