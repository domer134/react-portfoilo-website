import styles from './ProjectsStyles.module.css'
import pizza from '../../assets/pizza-logo.svg'
import logo from '../../assets/logo-copyright.svg'
import ProjectCard from '../../common/ProjectCard'
import Manage from '../../assets/config-color-manage-svgrepo-com.svg'

function Projects() {
	return (
		<section id='projects' className={styles.container}>
			<h1 className='sectionTitle'>Projects</h1>
			<div className={styles.projectsContainer}>
				<ProjectCard
					src={pizza}
					link='https://github.com/domer134/react-pizza-without-typescript'
					h3='React-pizza'
					p='Pizza-store app'
				/>
				<ProjectCard
					src={logo}
					link='https://github.com/domer134/Circle-ip'
					h3='Circle'
					p='Circle web'
				/>
				<ProjectCard
					src={Manage}
					link='https://github.com/domer134/proect-1'
					h3='Manage'
					p='Fem-manage'
				/>
			</div>
		</section>
	)
}

export default Projects
