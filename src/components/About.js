import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaMedal } from 'react-icons/fa';

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle data-aos="fade-up">
        About <GradientText>Me</GradientText>
      </SectionTitle>
      
      <ContentWrapper>
        <AboutCardContainer
          as={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard>
            <AboutHeader>
              <AboutTitle>Who am I?</AboutTitle>
              <GradientLine />
            </AboutHeader>
            <AboutText>
              I'm a Computer Science and Engineering student at Aditya Engineering College
              with a current CGPA of 8.24/10. I'm passionate about problem-solving and
              have solved over 600 problems across various coding platforms.
            </AboutText>
            <HighlightStats>
              <StatBox>
                <StatNumber>600+</StatNumber>
                <StatLabel>Problems Solved</StatLabel>
              </StatBox>
              <StatBox>
                <StatNumber>8.24</StatNumber>
                <StatLabel>CGPA</StatLabel>
              </StatBox>
            </HighlightStats>
          </GlassCard>
        </AboutCardContainer>

        <EducationContainer
          as={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard>
            <AboutHeader>
              <AboutTitle>Education</AboutTitle>
              <GradientLine />
            </AboutHeader>
            
            <Timeline>
              <TimelineItem>
                <IconContainer>
                  <FaGraduationCap />
                </IconContainer>
                <TimelineContent>
                  <h4>Bachelor of Technology in CSE</h4>
                  <Institution>Aditya Engineering College</Institution>
                  <Year>2021-25</Year>
                  <Achievement>
                    <FaMedal style={{ color: '#FFD700' }} />
                    <span>CGPA: 8.24/10</span>
                  </Achievement>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <IconContainer>
                  <FaSchool />
                </IconContainer>
                <TimelineContent>
                  <h4>Class XII</h4>
                  <Institution>Sri Prakash Junior College</Institution>
                  <Year>2019-2021</Year>
                  <Achievement>
                    <FaMedal style={{ color: '#FFD700' }} />
                    <span>Percentage: 92.9%</span>
                  </Achievement>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </GlassCard>
        </EducationContainer>
      </ContentWrapper>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  font-weight: 700;
`;

const GradientText = styled.span`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AboutCardContainer = styled.div`
  height: 100%;
`;

const EducationContainer = styled.div`
  height: 100%;
`;

const AboutHeader = styled.div`
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h3`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 1rem;
`;

const GradientLine = styled.div`
  height: 3px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  width: 60px;
  border-radius: 3px;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d3436;
  margin-bottom: 2rem;
`;

const HighlightStats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const StatBox = styled.div`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  padding: 1rem;
  border-radius: 15px;
  text-align: center;
  flex: 1;
  color: white;
`;

const StatNumber = styled.h4`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2rem;
  padding-left: 2rem;
  
  &:last-child {
    padding-bottom: 0;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  left: -2.5rem;
  width: 3rem;
  height: 3rem;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const TimelineContent = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  
  h4 {
    color: #2d3436;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const Institution = styled.p`
  color: #636e72;
  font-size: 1rem;
  margin-bottom: 0.3rem;
`;

const Year = styled.p`
  color: #84fab0;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const Achievement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2d3436;
  font-weight: 500;
  
  span {
    font-size: 0.9rem;
  }
`;

export default About;