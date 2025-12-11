import { motion } from 'framer-motion';
import styled from 'styled-components';
import profileImg from '../assets/sketch-photo.png';
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
              <TypewriterText>Developer • Designer • Creative</TypewriterText>
            </Subtitle>

            <CTAButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://wa.me/919704181692?text=Hi!%20I%20want%20to%20connect', '_blank')}
            >
              Contact Me
            </CTAButton>
          </motion.div>

          {/* <StatsContainer
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
          </StatsContainer> */}
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
  background: transparent;
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
    padding-top: 100px;
    padding-bottom: 3rem;
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
  width: 100%;
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: 1.5rem;
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
  width: 100%;
`;

const Greeting = styled.span`
  display: block;
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Highlight = styled.span`
  color: #000000;
  font-weight: 800;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 15px;
    background: rgba(0, 0, 0, 0.1);
    z-index: -1;
    transform: skewY(-2deg);
    
    @media (max-width: 768px) {
      bottom: 5px;
      height: 8px;
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #333333;
  margin-bottom: 2rem;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const TypewriterText = styled.span`
  border-right: 2px solid #000000;
  animation: blink 0.7s step-end infinite;
  padding-right: 5px;
  
  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #000000; }
  }
`;

const CTAButton = styled.button`
  background: #000000;
  border: 2px solid #000000;
  padding: 1.2rem 3rem;
  border-radius: 0;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
  font-family: 'Space Grotesk', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translate(4px, 4px);
    box-shadow: none;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 0.9rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.85rem 1.75rem;
    font-size: 0.85rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
  }
`;

const StatCard = styled.div`
  background: #ffffff;
  border: 2px solid #000000;
  padding: 1.5rem;
  border-radius: 0;
  text-align: center;
  transition: all 0.2s ease;
  min-width: 120px;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);

  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    min-width: 100px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
    min-width: 90px;
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  filter: grayscale(100%);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const StatNumber = styled.h2`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const StatLabel = styled.p`
  color: #666666;
  font-size: 0.9rem;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  
  @media (max-width: 968px) {
    width: 280px;
    height: 280px;
  }
  
  @media (max-width: 480px) {
    width: 240px;
    height: 240px;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
  border: 3px solid #000000;
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 1);
  background: #ffffff;

  &:hover {
    transform: translate(4px, 4px);
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
  }
  
  @media (max-width: 768px) {
    border: 2px solid #000000;
    box-shadow: 6px 6px 0px rgba(0, 0, 0, 1);
    
    &:hover {
      transform: translate(3px, 3px);
      box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
    }
  }
`;

const ProfileImageBorder = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  right: 15px;
  bottom: 15px;
  border: 2px solid #000000;
  border-radius: 0;
  z-index: 0;
  
  @media (max-width: 768px) {
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
  }
`;

export default Hero;