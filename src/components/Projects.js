import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaReact, FaNode, FaDatabase, FaJs } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Live Auction Website",
      description: "Real-time auction platform with WebSocket integration for live bidding. Features include real-time updates, secure payment integration, and responsive design.",
      tech: ["React.js", "Node.js", "MongoDB", "WebSocket"],
      color: "#84fab0",
      github: "https://github.com/prudhvi9121/Live_Auctions",
      live: "https://liveauctions.netlify.app/",
      icon: <FaReact />
    },
    {
      title: "CODEX",
      description: "A comprehensive coding platform tracker that aggregates progress and achievements across multiple coding platforms into a unified dashboard.",
      tech: ["React Native", "Node.js", "MongoDB", "APIs"],
      color: "#8fd3f4",
      github: "https://github.com/prudhvi9121/CodeX_Application",
      live: "#",
      icon: <FaDatabase />
    },
    {
      title: "Simple Photo Editor",
      description: "User-friendly photo editing application with features like filters, cropping, and basic image manipulation tools.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#a8c0ff",
      github: "https://github.com/prudhvi9121/Simple_Photo_Editor",
      live: "#",
      icon: <FaJs />
    }
  ];

  return (
    <ProjectsSection id='projects'>
      <ContentWrapper>
        <HeaderSection>
          <SectionTitle>
            Featured Projects
            <TitleAccent>My Recent Work</TitleAccent>
          </SectionTitle>
          <SectionDescription>
            Here are some of my notable projects that showcase my skills and experience
          </SectionDescription>
        </HeaderSection>

        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectContent>
                <IconContainer style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)` }}>
                  {project.icon}
                </IconContainer>
                
                <ProjectHeader>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectLinks>
                    <IconLink href={project.github} target="_blank" title="View Code">
                      <FaGithub />
                    </IconLink>
                    <IconLink href={project.live} target="_blank" title="Live Demo">
                      <FaExternalLinkAlt />
                    </IconLink>
                  </ProjectLinks>
                </ProjectHeader>

                <ProjectDescription>{project.description}</ProjectDescription>

                <TechStack>
                  {project.tech.map((tech, i) => (
                    <TechTag 
                      key={i} 
                      style={{ 
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}30`
                      }}
                    >
                      {tech}
                    </TechTag>
                  ))}
                </TechStack>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ContentWrapper>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, rgba(132,250,176,0.1) 0%, rgba(143,211,244,0.1) 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2d3436;
`;

const TitleAccent = styled.span`
  display: block;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3.5rem;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #636e72;
  max-width: 600px;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3436;
  margin: 0;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const IconLink = styled.a`
  color: #636e72;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #2d3436;
    transform: translateY(-2px);
  }
`;

const ProjectDescription = styled.p`
  color: #636e72;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #2d3436;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export default Projects;