import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import ProjectNavigation from '../components/projects/ProjectNavigation';
import ProjectHero from '../components/projects/ProjectHero';
import ProjectMetrics from '../components/projects/ProjectMetrics';
import ProjectTimeline from '../components/projects/ProjectTimeline';
import ProjectFeatures from '../components/projects/ProjectFeatures';
import ProjectChallenges from '../components/projects/ProjectChallenges';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectAnimations from '../components/projects/ProjectAnimations';
import ProjectLearnings from '../components/projects/ProjectLearnings';
import ScrollToTopButton from '../components/common/ScrollToTopButton';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!project) {
      navigate('/', { state: { scrollToProjects: true } });
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <ProjectNavigation githubUrl={project.githubUrl} demoUrl={project.demoUrl} />
      <ProjectHero project={project} />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        <ProjectMetrics
          duration={project.duration}
          role={project.role}
          institution={project.institution}
          mentor={project.mentor}
          technologies={project.technologies}
        />

        <ProjectFeatures features={project.features} />
        
        <ProjectChallenges challenges={project.challenges} />

        <ProjectTimeline responsibilities={project.responsibilities} />
        
        <ProjectGallery images={project.images} />
        
        <ProjectAnimations animations={project.animations} />
        
        <ProjectLearnings project={project} />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ProjectDetail;