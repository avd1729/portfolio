import styles from './ProjectsStyles.module.css';
import revise_automate from '../../assets/revise_automate.jpg';
import starry_ai_night from '../../assets/starry_ai_night.jpg';
import culinary_bot from '../../assets/culinary_bot.jpg';
import titanic from '../../assets/titanic.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={revise_automate}
          link="https://github.com/avd1729/Revision-Automate"
          h3="Revise Automate"
          p="Automation App"
        />
         <ProjectCard
          src={culinary_bot}
          link="https://github.com/avd1729/CulinaryBot"
          h3="Culinary Bot"
          p="LLM Finetuning App"
        />
        <ProjectCard
          src={starry_ai_night}
          link="https://github.com/avd1729/Starry-AI-Night"
          h3="Starry AI night"
          p="Generative AI App"
        /> 
        <ProjectCard
          src={titanic}
          link="https://github.com/avd1729/Titanic-fate-prediction-Website"
          h3="Titanic fate prediction"
          p="Machine Learning App"
        />
      </div>
    </section>
  );
}

export default Projects;
