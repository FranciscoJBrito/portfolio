import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Projects = () => {
  return (
    <div className='main_project_layout'>
      <ProjectCard title='Project 1' stack='React, Node, Express' image='https://via.placeholder.com/150' />
      <ProjectCard title='Project 2' stack='Vue, Node, Express' image='https://via.placeholder.com/150' />
      <ProjectCard title='Project 3' stack='Angular, Node, Express' image='https://via.placeholder.com/150' />
    </div>
  )
}

export default Projects