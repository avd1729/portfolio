import styles from './ProjectsStyles.module.css';
import revise_automate from '../../assets/revise_automate.jpg';
import starry_ai_night from '../../assets/starry_ai_night.jpg';
import culinary_bot from '../../assets/culinary_bot.jpg';
import titanic from '../../assets/titanic.jpg';
import dataweave from '../../assets/dataweave.jpg'
import huehush from '../../assets/huehush.jpg'
import qchat from '../../assets/qchat.jpg'
import coffeemasters from '../../assets/coffeemasters.jpg'
import rescuetails from '../../assets/rescuetails.jpg'
import milo from '../../assets/milo.jpg'
import textify from '../../assets/textify.jpg'
import vielnet from '../../assets/vielnet.jpg'
import talk from '../../assets/talk.jpg'
import loadbalancer from '../../assets/loadbalancer.jpg'
import cloud from '../../assets/cloud.jpg'
import melodymap from '../../assets/melodymap.jpg'
import he from '../../assets/he.jpg'
import journee from '../../assets/journee.jpg'
import shakespeare from '../../assets/shakespeare.jpg'
import codesmith from '../../assets/codesmith.jpg'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={milo}
          link="https://github.com/avd1729/Milo"
          h3="Milo"
          p="Movie Booking System"
        />
        <ProjectCard
          src={textify}
          link="https://github.com/avd1729/Textify"
          h3="Textify"
          p="Smart Android Keyboard"
        />
        <ProjectCard
          src={revise_automate}
          link="https://github.com/avd1729/Revision-Automate"
          h3="Revise Automate"
          p="DSA Automation Script"
        />
        <ProjectCard
          src={starry_ai_night}
          link="https://github.com/avd1729/Starry-AI-Night"
          h3="Starry AI Night"
          p="Gen AI (CycleGAN)"
        /> 
        <ProjectCard
          src={coffeemasters}
          link="https://github.com/avd1729/Coffee-Masters-Flutter"
          h3="Coffee Masters"
          p="Coffee Ordering App"
        />
        <ProjectCard
          src={dataweave}
          link="https://github.com/avd1729/DataWeave"
          h3="DataWeave"
          p="Synthetic data gen"
        />
        <ProjectCard
          src={culinary_bot}
          link="https://github.com/avd1729/CulinaryBot"
          h3="Culinary Bot"
          p="LLM Finetuning"
        />
        <ProjectCard
          src={huehush}
          link="https://github.com/avd1729/hue-hush"
          h3="Huehush"
          p="PyPi package"
        />
        <ProjectCard
          src={journee}
          link="https://github.com/avd1729/Talk-Space"
          h3="Journee"
          p="Uber App (GPS)"
        /> 
        <ProjectCard
          src={vielnet}
          link="https://github.com/avd1729/VeilNet"
          h3="VeilNet"
          p="Steganography (GAN)"
        />
        <ProjectCard
          src={loadbalancer}
          link="https://github.com/avd1729/Load-Balancer"
          h3="Load Balancer"
          p="Custom load balancer"
        />
        <ProjectCard
          src={qchat}
          link="https://github.com/avd1729/Q-Chat"
          h3="QChat"
          p="Quantum Chat App"
        />
        <ProjectCard
          src={melodymap}
          link="https://github.com/avd1729/Q-Chat"
          h3="Melody Map"
          p="Recommendation system"
        />
        <ProjectCard
          src={codesmith}
          link="https://github.com/avd1729/Cloudburst-Prediction-System"
          h3="CodeSmith"
          p="AWS Ecosystem App"
        />
        <ProjectCard
          src={shakespeare}
          link="https://github.com/avd1729/RescueTails"
          h3="Shakespeare"
          p="Text Generation (RNN)"
        />
        <ProjectCard
          src={titanic}
          link="https://github.com/avd1729/Titanic-fate-prediction-Website"
          h3="Titanic Fate"
          p="Machine Learning"
        />
         <ProjectCard
          src={he}
          link="https://github.com/avd1729/Titanic-fate-prediction-Website"
          h3="GNN Recommends"
          p="Homomorphic Encryption"
        />
        <ProjectCard
          src={talk}
          link="https://github.com/avd1729/Talk-Space"
          h3="TalkSpace"
          p="Social Media App"
        />
        <ProjectCard
          src={rescuetails}
          link="https://github.com/avd1729/RescueTails"
          h3="Rescue Tails"
          p="Pet Adoption App"
        />
        <ProjectCard
          src={cloud}
          link="https://github.com/avd1729/Cloudburst-Prediction-System"
          h3="Cloud Burst"
          p="Deep Learning"
        />
       
      </div>
    </section>
  );
}

export default Projects;
