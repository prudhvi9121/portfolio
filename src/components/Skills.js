import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaTools, FaLightbulb } from 'react-icons/fa';
import { 
  DiJavascript, DiPython, DiJava, DiReact, DiMongodb, DiGit, DiCss3,
  DiHtml5, DiNodejs, DiDatabase
} from 'react-icons/di';
import { 
  SiCplusplus, SiExpress, SiTypescript, SiRedux, 
  SiTailwindcss, SiBootstrap, SiMysql
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
    'Tools & Technologies': [
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
    'Areas of Interest': [
      { name: 'Problem Solving', icon: FaCode },
      { name: 'Competitive Programming', icon: FaLightbulb },
      { name: 'Object-Oriented Programming', icon: FaCode },
      { name: 'Data Structures and Algorithms', icon: FaCode }
    ]
  };

  const categoryIcons = {
    'Programming Languages': FaCode,
    'Tools & Technologies': FaTools,
    'Areas of Interest': FaLightbulb
  };

  return (
    <SkillsSection id="skills">
      <SectionTitle data-aos="fade-up">
        Technical <GradientText>Skills</GradientText>
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                    whileHover={{ y: -5, scale: 1.02 }}
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
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
`;

const GradientText = styled.span`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.8rem;
  color: #2d3436;
  font-weight: 600;
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
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: #84fab0;
  transition: transform 0.3s ease;
  
  ${SkillCard}:hover & {
    transform: scale(1.1);
  }
  
  svg {
    filter: drop-shadow(0 4px 6px rgba(132, 250, 176, 0.3));
  }
`;

const SkillName = styled.h4`
  color: #2d3436;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`;

export default Skills;