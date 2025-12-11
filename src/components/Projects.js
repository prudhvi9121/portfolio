import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaReact, FaVideo, FaPaintBrush, FaBullhorn } from 'react-icons/fa';
import { useState } from 'react';
import social1 from '../assets/social_images/1.png';
import social2 from '../assets/social_images/2.png';
import social3 from '../assets/social_images/3.png';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const webProjects = [
    {
      title: "Avenues Global School",
      description: "Complete school website with modern UI/UX design and full-stack development. Features include responsive design, interactive components, and optimized performance.",
      tech: ["React.js", "Node.js", "Figma", "UI/UX Design"],
      github: "https://github.com/prudhvi9121/Avenues_Global_School",
      live: "https://www.avenuesglobalschool.in/",
      icon: <FaReact />
    },
    {
      title: "Live Auction Website",
      description: "Real-time auction platform with WebSocket integration for live bidding. Features include real-time updates, secure payment integration, and responsive design.",
      tech: ["React.js", "Node.js", "MongoDB", "WebSocket"],
      github: "https://github.com/prudhvi9121/Live_Auctions",
      live: "https://liveauctions.netlify.app/",
      icon: <FaReact />
    },
    {
      title: "CODEX",
      description: "A comprehensive coding platform tracker that aggregates progress and achievements across multiple coding platforms into a unified dashboard.",
      tech: ["React Native", "Node.js", "MongoDB", "APIs"],
      github: "https://github.com/prudhvi9121/CodeX_Application",
      live: "#",
      icon: <FaCode />
    },
    {
      title: "Simple Photo Editor",
      description: "User-friendly photo editing application with features like filters, cropping, and basic image manipulation tools.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/prudhvi9121/Simple_Photo_Editor",
      live: "#",
      icon: <FaCode />
    }
  ];

  const videoProjects = [
    {
      title: "Instagram Reel 1",
      description: "Creative video editing showcase",
      embedUrl: "https://www.instagram.com/reel/DREfGQMDWgp/embed",
      tech: ["Premiere Pro", "After Effects"]
    },
    {
      title: "Instagram Reel 2",
      description: "Video editing project",
      embedUrl: "https://www.instagram.com/reel/DP4QmmVDKP6/embed",
      tech: ["Video Editing", "Motion Graphics"]
    },
    {
      title: "Instagram Reel 3",
      description: "Creative content production",
      embedUrl: "https://www.instagram.com/reel/DQi8_P1gZmj/embed",
      tech: ["Premiere Pro", "Color Grading"]
    },
    {
      title: "Instagram Reel 4",
      description: "Video production showcase",
      embedUrl: "https://www.instagram.com/reel/DQ_IuWCjRBj/embed",
      tech: ["After Effects", "Motion Graphics"]
    },
    {
      title: "Instagram Reel 5",
      description: "Creative video editing",
      embedUrl: "https://www.instagram.com/reel/DR_nNf7jYrg/embed",
      tech: ["Premiere Pro", "Video Editing"]
    },
    {
      title: "Instagram Reel 6",
      description: "Video content creation",
      embedUrl: "https://www.instagram.com/reel/DJed98ytQem/embed",
      tech: ["Video Production", "Editing"]
    },
    {
      title: "Instagram Reel 7",
      description: "Professional video editing",
      embedUrl: "https://www.instagram.com/reel/DKT31aQtAUg/embed",
      tech: ["Premiere Pro", "After Effects"]
    }
  ];

  const uiuxProjects = [
    {
      title: "Luno - AI Chatbot App",
      description: "Interactive prototype for an AI-powered chatbot application with modern UI/UX design",
      figmaUrl: "https://embed.figma.com/proto/StQp0wnU035z5NsqPAEzoD/Luno---AI-Chatbot-App?page-id=0%3A1&node-id=521-374&p=f&viewport=25%2C160%2C0.49&scaling=min-zoom&content-scaling=fixed&embed-host=share",
      tech: ["Figma", "Prototyping", "UI Design"]
    },
    {
      title: "Sample UI/UX Project 2",
      description: "Add your design project description here",
      figmaUrl: "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_LINK", // Replace with your Figma link
      tech: ["Adobe XD", "User Research"]
    }
  ];

  const socialMediaProjects = [
    {
      imageUrl: social1
    },
    {
      imageUrl: social2
    },
    {
      imageUrl: social3
    }
  ];

  const tabs = [
    { id: 'web', label: 'Web Development', icon: <FaCode /> },
    { id: 'video', label: 'Video Editing', icon: <FaVideo /> },
    { id: 'uiux', label: 'UI/UX Design', icon: <FaPaintBrush /> },
    { id: 'social', label: 'Social Media', icon: <FaBullhorn /> }
  ];

  return (
    <ProjectsSection id='projects'>
      <ContentWrapper>
        <HeaderSection>
          <SectionTitle>
            Featured Projects
            <TitleAccent>My Portfolio</TitleAccent>
          </SectionTitle>
          <SectionDescription>
            Explore my work across different domains
          </SectionDescription>
        </HeaderSection>

        <TabContainer>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              as={motion.button}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <TabIcon>{tab.icon}</TabIcon>
              <TabLabel>{tab.label}</TabLabel>
            </Tab>
          ))}
        </TabContainer>

        <TabContent>
          {activeTab === 'web' && (
            <ProjectGrid
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {webProjects.map((project, index) => (
                <WebProjectCard
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectContent>
                    <IconContainer>
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
                        <TechTag key={i}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  </ProjectContent>
                </WebProjectCard>
              ))}
            </ProjectGrid>
          )}

          {activeTab === 'video' && (
            <VideoGrid
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {videoProjects.map((project, index) => (
                <VideoProjectCard
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoEmbed>
                    <iframe
                      src={project.embedUrl}
                      title={project.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      scrolling="no"
                    ></iframe>
                  </VideoEmbed>
                </VideoProjectCard>
              ))}
            </VideoGrid>
          )}

          {activeTab === 'uiux' && (
            <UIUXGrid
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {uiuxProjects.map((project, index) => (
                <UIUXProjectCard
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FigmaEmbed>
                    <iframe
                      src={project.figmaUrl}
                      title={project.title}
                      allowFullScreen
                    ></iframe>
                  </FigmaEmbed>
                  <UIUXInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <TechStack>
                      {project.tech.map((tech, i) => (
                        <TechTag key={i}>{tech}</TechTag>
                      ))}
                    </TechStack>
                  </UIUXInfo>
                </UIUXProjectCard>
              ))}
            </UIUXGrid>
          )}

          {activeTab === 'social' && (
            <SocialGrid
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {socialMediaProjects.map((project, index) => (
                <SocialMediaCard
                  key={index}
                  as={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <SocialImage src={project.imageUrl} alt="Social Media Post" />
                </SocialMediaCard>
              ))}
            </SocialGrid>
          )}
        </TabContent>
      </ContentWrapper>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
`;

const TitleAccent = styled.span`
  display: block;
  color: #000000;
  font-size: 3rem;
  position: relative;
  margin-top: 0.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 15px;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
    
    @media (max-width: 768px) {
      width: 150px;
    }
  }
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const Tab = styled.button`
  background: ${props => props.active ? '#000000' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#000000'};
  border: 2px solid #000000;
  padding: 1rem 2rem;
  border-radius: 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  font-family: 'Space Grotesk', sans-serif;
  box-shadow: ${props => props.active ? '3px 3px 0px rgba(0, 0, 0, 0.3)' : '3px 3px 0px rgba(0, 0, 0, 1)'};

  &:hover {
    background: ${props => props.active ? '#000000' : '#f8f8f8'};
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const TabIcon = styled.span`
  font-size: 1.2rem;
`;

const TabLabel = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

const TabContent = styled.div`
  min-height: 400px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
`;

const WebProjectCard = styled.div`
  background: white;
  border-radius: 0;
  overflow: hidden;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  transition: all 0.2s ease;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #000000;
  font-size: 1.5rem;
  background: #f8f8f8;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #000000;
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const IconLink = styled.a`
  color: #000000;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  padding: 0.5rem;
  border: 2px solid #000000;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;

const ProjectDescription = styled.p`
  color: #333333;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechTag = styled.span`
  padding: 0.5rem 1rem;
  border-radius: 0;
  font-size: 0.85rem;
  color: #000000;
  font-weight: 500;
  background: #f8f8f8;
  border: 2px solid #000000;
  transition: all 0.2s ease;

  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const VideoProjectCard = styled.div`
  background: white;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }
`;

const VideoEmbed = styled.div`
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
  background: #000000;
  border-bottom: 2px solid #000000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 450px;
  }
`;

const VideoInfo = styled.div`
  padding: 2rem;
`;

const UIUXGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const UIUXProjectCard = styled.div`
  background: white;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  overflow: hidden;
  transition: all 0.2s ease;
  width: 100%;
  max-width: 450px;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }
`;

const FigmaEmbed = styled.div`
  position: relative;
  padding-bottom: 177.78%; /* 9:16 aspect ratio for mobile prototypes */
  height: 0;
  overflow: hidden;
  background: #f8f8f8;
  border-bottom: 2px solid #000000;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const UIUXInfo = styled.div`
  padding: 2rem;
`;

const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const SocialMediaCard = styled.div`
  background: white;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  }
`;

const SocialImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-bottom: 2px solid #000000;
  background: #ffffff;
`;

const SocialInfo = styled.div`
  padding: 1.5rem;
`;

const SocialMeta = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;
`;

const MetaBadge = styled.span`
  padding: 0.4rem 0.8rem;
  background: #000000;
  color: #ffffff;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 0;
  border: 2px solid #000000;
`;

export default Projects;