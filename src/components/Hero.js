import { motion } from 'framer-motion';
import styled from 'styled-components';
import profileImg from '../assets/photo1.JPG';
import { FaFileDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <HeroContainer id="home">
      <BackgroundGradient />
      <ContentWrapper>
        <TextSection>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Greeting>Welcome to my world</Greeting>
            <Title>
              Hi, I'm <Highlight>Prudhvi Karri</Highlight>
            </Title>
            <Subtitle>
              <TypewriterText>A passionate developer building amazing web experiences</TypewriterText>
            </Subtitle>
            
            <CTAButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://drive.google.com/file/d/1C5fxEWYLkC36ksGBYv7OsJR7jkPONOki/view?usp=sharing', '_blank')}
            >
              Resume
            </CTAButton>
          </motion.div>

          <StatsContainer
            as={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <StatCard>
              <StatIcon>🎯</StatIcon>
              <StatNumber>600+</StatNumber>
              <StatLabel>Problems Solved</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>⭐</StatIcon>
              <StatNumber>5 Star</StatNumber>
              <StatLabel>HackerRank</StatLabel>
            </StatCard>
            <StatCard>
              <StatIcon>🏆</StatIcon>
              <StatNumber>3 Star</StatNumber>
              <StatLabel>CodeChef</StatLabel>
            </StatCard>
          </StatsContainer>
        </TextSection>

        <ImageSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <ProfileImageWrapper>
              <ProfileImage src={profileImg} alt="Prudhvi Karri" />
              <ProfileImageBorder />
            </ProfileImageWrapper>
          </motion.div>
        </ImageSection>
      </ContentWrapper>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(132,250,176,0.1) 0%, rgba(143,211,244,0.1) 100%);
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
  
  @media (max-width: 968px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`;

const TextSection = styled.div`
  flex: 1;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #64ffda;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TypewriterText = styled.span`
  border-right: 2px solid #64ffda;
  animation: blink 0.7s step-end infinite;
  
  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #64ffda; }
  }
`;

const CTAButton = styled.button`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  margin-top: 2rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const StatNumber = styled.h2`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatLabel = styled.p`
  color: #636e72;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  
  @media (max-width: 968px) {
    width: 300px;
    height: 300px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileImageBorder = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border: 2px solid #64ffda;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: rotate 10s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

export default Hero;