import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <ContactSection id="contact">
      <ContentWrapper>
        <HeaderSection>
          <SectionTitle data-aos="fade-up">
            Get In Touch
            <TitleAccent>Let's Connect!</TitleAccent>
          </SectionTitle>
          <SectionDescription>
            Feel free to reach out through any of the following channels
          </SectionDescription>
        </HeaderSection>

        <ContactGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactCard
            as={motion.div}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardContent href="mailto:prudhvikarri9121@gmail.com">
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <ContactInfo>
                <ContactType>Email</ContactType>
                <ContactDetail>prudhvikarri9121@gmail.com</ContactDetail>
              </ContactInfo>
            </CardContent>
          </ContactCard>

          <ContactCard
            as={motion.div}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardContent href="tel:+919704181692">
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <ContactInfo>
                <ContactType>Phone</ContactType>
                <ContactDetail>+91 9704181692</ContactDetail>
              </ContactInfo>
            </CardContent>
          </ContactCard>

          <ContactCard
            as={motion.div}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardContent href="https://www.linkedin.com/in/prudhvi-karri/" target="_blank">
              <IconWrapper className="linkedin">
                <FaLinkedin />
              </IconWrapper>
              <ContactInfo>
                <ContactType>LinkedIn</ContactType>
                <ContactDetail>Connect Professionally</ContactDetail>
              </ContactInfo>
            </CardContent>
          </ContactCard>

          <ContactCard
            as={motion.div}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardContent href="https://github.com/prudhvi9121" target="_blank">
              <IconWrapper className="github">
                <FaGithub />
              </IconWrapper>
              <ContactInfo>
                <ContactType>GitHub</ContactType>
                <ContactDetail>View My Projects</ContactDetail>
              </ContactInfo>
            </CardContent>
          </ContactCard>

          <ContactCard
            as={motion.div}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CardContent href="https://www.instagram.com/non_cinematic/" target="_blank">
              <IconWrapper className="instagram">
                <FaInstagram />
              </IconWrapper>
              <ContactInfo>
                <ContactType>Instagram</ContactType>
                <ContactDetail>@non_cinematic</ContactDetail>
              </ContactInfo>
            </CardContent>
          </ContactCard>
        </ContactGrid>

        <FooterText>
          Looking forward to connecting with you! 👋
        </FooterText>
      </ContentWrapper>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #ffffff;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const ContactCard = styled.div`
  background: #ffffff;
  border-radius: 0;
  overflow: hidden;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  }
`;

const CardContent = styled.a`
  display: flex;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  margin-right: 1.5rem;
  border: 2px solid #000000;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.3);
  
  svg {
    font-size: 1.8rem;
    color: white;
  }

  &.linkedin {
    background: #0077B5;
    border-color: #0077B5;
  }

  &.github {
    background: #24292E;
    border-color: #24292E;
  }
  
  &.instagram {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    border-color: #dc2743;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactType = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #000000;
  font-family: 'Space Grotesk', sans-serif;
`;

const ContactDetail = styled.p`
  color: #666666;
  font-size: 1rem;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 4rem;
  font-size: 1.2rem;
  color: #333333;
  font-weight: 500;
`;

export default Contact;