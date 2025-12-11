import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle data-aos="fade-up">
        About <HighlightText>Me</HighlightText>
      </SectionTitle>

      <ContentWrapper>
        <AboutCardContainer
          as={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SketchCard>
            <AboutHeader>
              <AboutTitle>Who am I?</AboutTitle>
              <SketchLine />
            </AboutHeader>
            <AboutText>
              I'm a <strong>creative technologist</strong> and <strong>multidisciplinary designer</strong> who thrives at the intersection of code, design, and storytelling.
              From architecting <strong>full-stack web applications</strong> to crafting <strong>intuitive UI/UX experiences</strong>, editing <strong>compelling videos</strong>, and strategizing <strong>digital campaigns</strong> — I don't just build products, I create experiences that resonate.
              My approach is simple: <em>make it functional, make it beautiful, make it memorable</em>.
            </AboutText>
          </SketchCard>
        </AboutCardContainer>
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
  background: #f8f8f8;
  
  @media (max-width: 768px) {
    padding: 3rem 1rem;
    min-height: auto;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  font-weight: 700;
  color: #000000;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
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

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
`;

const SketchCard = styled.div`
  background: #ffffff;
  border-radius: 0;
  padding: 3rem;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  transition: all 0.2s ease;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const AboutCardContainer = styled.div`
  height: 100%;
`;

const AboutHeader = styled.div`
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h3`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1rem;
  font-family: 'Space Grotesk', sans-serif;
`;

const SketchLine = styled.div`
  height: 3px;
  background: #000000;
  width: 80px;
  border-radius: 0;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.9;
  color: #333333;
  margin-bottom: 1.5rem;
  
  strong {
    color: #000000;
    font-weight: 600;
  }
  
  em {
    font-style: italic;
    color: #000000;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

export default About;