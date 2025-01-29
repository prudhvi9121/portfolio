import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCertificate, FaUsers, FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';

const Experience = () => {
  const certifications = [
    { title: "Jira Fundamentals", icon: FaLaptopCode, issuer: "Atlassian" },
    { title: "Information Technology Specialist in Python", icon: FaLaptopCode, issuer: "Pearson" },
    { title: "Cisco Netacad CPP Certification", icon: FaLaptopCode, issuer: "Cisco" },
    { title: "JavaScript Certification", icon: FaLaptopCode, issuer: "Pearson" },
    { title: "Fundamentals of Digital Marketing", icon: FaLaptopCode, issuer: "Google Digital Garage" }
  ];

  return (
    <ExperienceSection id="experience">
      <SectionTitle data-aos="fade-up">
        Professional <GradientText>Experience</GradientText>
      </SectionTitle>
      
      <ContentWrapper>
        <ExperienceCard
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ExperienceHeader>
            <IconBox>
              <FaChalkboardTeacher />
            </IconBox>
            <div>
              <ExperienceTitle>Python and DSA Tutor</ExperienceTitle>
              <ExperienceDate>March 2023 – July 2023</ExperienceDate>
            </div>
          </ExperienceHeader>

          <Highlights>
            <HighlightItem>
              <HighlightIcon>
                <FaUsers />
              </HighlightIcon>
              <span>Mentored 200+ students</span>
            </HighlightItem>
          </Highlights>

          <ExperienceDetails>
            <DetailItem>
              <DetailBullet />
              Provided comprehensive guidance and support to over 200 students in Python programming and Data Structures and Algorithms (DSA)
            </DetailItem>
            <DetailItem>
              <DetailBullet />
              Developed customized learning materials, fostering a collaborative learning environment
            </DetailItem>
            <DetailItem>
              <DetailBullet />
              Enhanced student understanding and significantly improved coding proficiency
            </DetailItem>
          </ExperienceDetails>
        </ExperienceCard>

        <CertificationsSection data-aos="fade-up">
          <SectionSubtitle>
            <FaCertificate /> Certifications
          </SectionSubtitle>
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                as={motion.div}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <CertIcon>
                  <cert.icon />
                </CertIcon>
                <CertContent>
                  <CertTitle>{cert.title}</CertTitle>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                </CertContent>
                <GlowEffect />
              </CertificationCard>
            ))}
          </CertificationsGrid>
        </CertificationsSection>
      </ContentWrapper>
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
  padding: 5rem 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

const ExperienceCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-bottom: 3rem;
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  box-shadow: 0 4px 15px rgba(132, 250, 176, 0.3);
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const ExperienceDate = styled.p`
  color: #636e72;
  font-size: 1.1rem;
`;

const Highlights = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #2d3436;
  font-size: 1.1rem;
`;

const HighlightIcon = styled.span`
  color: #84fab0;
`;

const ExperienceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: #2d3436;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const DetailBullet = styled.div`
  width: 8px;
  height: 8px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 50%;
  margin-top: 0.5rem;
`;

const CertificationsSection = styled.div`
  margin-top: 4rem;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    color: #84fab0;
  }
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CertificationCard = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;
`;

const CertIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const CertContent = styled.div`
  flex-grow: 1;
`;

const CertTitle = styled.h4`
  color: #2d3436;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CertIssuer = styled.p`
  color: #636e72;
  font-size: 0.9rem;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #84fab0 0%, #8fd3f4 100%);
`;

export default Experience;