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
        Professional <HighlightText>Experience</HighlightText>
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
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <CertIcon>
                  <cert.icon />
                </CertIcon>
                <CertContent>
                  <CertTitle>{cert.title}</CertTitle>
                  <CertIssuer>{cert.issuer}</CertIssuer>
                </CertContent>
                <TopBorder />
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
  background: #f8f8f8;
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
  color: #000000;
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

const ExperienceCard = styled.div`
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 0;
  border: 2px solid #000000;
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 1);
  margin-bottom: 3rem;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #000000;
`;

const IconBox = styled.div`
  width: 60px;
  height: 60px;
  background: #000000;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  border: 2px solid #000000;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.3);
`;

const ExperienceTitle = styled.h3`
  font-size: 1.8rem;
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
`;

const ExperienceDate = styled.p`
  color: #666666;
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
  color: #000000;
  font-size: 1.1rem;
  font-weight: 600;
`;

const HighlightIcon = styled.span`
  color: #000000;
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
  color: #333333;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const DetailBullet = styled.div`
  width: 8px;
  height: 8px;
  background: #000000;
  border-radius: 0;
  margin-top: 0.5rem;
  flex-shrink: 0;
`;

const CertificationsSection = styled.div`
  margin-top: 4rem;
`;

const SectionSubtitle = styled.h3`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Space Grotesk', sans-serif;
  
  svg {
    color: #000000;
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
  border-radius: 0;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 2px 2px 0px rgba(0, 0, 0, 1);
  }
`;

const CertIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #000000;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
  border: 2px solid #000000;
`;

const CertContent = styled.div`
  flex-grow: 1;
`;

const CertTitle = styled.h4`
  color: #000000;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  font-family: 'Space Grotesk', sans-serif;
`;

const CertIssuer = styled.p`
  color: #666666;
  font-size: 0.9rem;
`;

const TopBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #000000;
`;

export default Experience;