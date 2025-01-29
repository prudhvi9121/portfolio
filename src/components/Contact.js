import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

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
            whileHover={{ y: -10, scale: 1.02 }}
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
            whileHover={{ y: -10, scale: 1.02 }}
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
            whileHover={{ y: -10, scale: 1.02 }}
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
            whileHover={{ y: -10, scale: 1.02 }}
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
  background: linear-gradient(135deg, rgba(132,250,176,0.1) 0%, rgba(143,211,244,0.1) 100%);
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  margin-right: 1.5rem;
  
  svg {
    font-size: 1.8rem;
    color: white;
  }

  &.linkedin {
    background: linear-gradient(120deg, #0077B5 0%, #00A0DC 100%);
  }

  &.github {
    background: linear-gradient(120deg, #24292E 0%, #404448 100%);
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactType = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #2d3436;
`;

const ContactDetail = styled.p`
  color: #636e72;
  font-size: 1rem;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 4rem;
  font-size: 1.2rem;
  color: #636e72;
`;

export default Contact;