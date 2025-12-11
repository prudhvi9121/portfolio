import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLightbulb, FaPaintBrush, FaBullhorn, FaVideo } from 'react-icons/fa';
import {
  DiJavascript, DiPython, DiJava, DiReact, DiMongodb, DiGit, DiCss3,
  DiHtml5, DiNodejs, DiDatabase
} from 'react-icons/di';
import {
  SiCplusplus, SiExpress, SiTypescript, SiRedux,
  SiTailwindcss, SiBootstrap, SiMysql, SiFigma, SiAdobexd,
  SiCanva
} from 'react-icons/si';

const Skills = () => {
  const skills = {
    'Programming Languages': [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: DiPython },
      { name: 'JavaScript', icon: DiJavascript },
      { name: 'Java', icon: DiJava },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'SQL', icon: DiDatabase }
    ],
    'Web Development': [
      { name: 'React.js', icon: DiReact },
      { name: 'Node.js', icon: DiNodejs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: DiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Redux', icon: SiRedux },
      { name: 'HTML5', icon: DiHtml5 },
      { name: 'CSS3', icon: DiCss3 },
      { name: 'Tailwind', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Git', icon: DiGit }
    ],
    'UI/UX Design': [
      { name: 'Figma', icon: SiFigma },
      { name: 'Adobe XD', icon: SiAdobexd },
      { name: 'Wireframing', icon: FaPaintBrush },
      { name: 'Prototyping', icon: FaTools },
      { name: 'User Research', icon: FaLightbulb },
      { name: 'Canva', icon: SiCanva }
    ],

    'Video Editing': [
      { name: 'DaVinci Resolve', icon: FaVideo },
      { name: 'Motion Graphics', icon: FaVideo },
      { name: 'Color Grading', icon: FaPaintBrush },
      { name: 'Sound Design', icon: FaTools }
    ]
  };

  const categoryIcons = {
    'Programming Languages': FaCode,
    'Web Development': FaTools,
    'UI/UX Design': FaPaintBrush,
    'Digital Marketing': FaBullhorn,
    'Video Editing': FaVideo
  };

  return (
    <SkillsSection id="skills">
      <SectionTitle data-aos="fade-up">
        Technical <HighlightText>Skills</HighlightText>
      </SectionTitle>

      <SkillsContainer>
        {Object.entries(skills).map(([category, skillList], index) => {
          const CategoryIcon = categoryIcons[category];
          return (
            <SkillCategory
              key={category}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CategoryHeader>
                <IconBox>
                  <CategoryIcon />
                </IconBox>
                <CategoryTitle>{category}</CategoryTitle>
              </CategoryHeader>

              <SkillsGrid>
                {skillList.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    as={motion.div}
                    whileHover={{ y: -3, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SkillIcon>
                      <skill.icon />
                    </SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </SkillCategory>
          );
        })}
      </SkillsContainer>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  background: #ffffff;
`;

const HighlightText = styled.span`
  color: #000000;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    height: 12px;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
    transform: skewY(-1deg);
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  font-weight: 700;
  color: #000000;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SkillCategory = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 0;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #000000;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background: #000000;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  border: 2px solid #000000;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #000000;
  font-weight: 600;
  font-family: 'Space Grotesk', sans-serif;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const SkillCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #000000;
  transition: transform 0.3s ease;
  
  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.h4`
  color: #000000;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;

export default Skills;