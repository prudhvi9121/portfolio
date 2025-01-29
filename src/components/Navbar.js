import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContent>
        <LogoContainer>
          <Logo
            as={motion.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            PK
          </Logo>
        </LogoContainer>

        <NavItems>
          {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((item) => (
            <NavItem key={item}>
              <NavLink
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onSetActive={() => setActiveLink(item)}
                isActive={activeLink === item}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {activeLink === item && (
                  <ActiveIndicator
                    as={motion.div}
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </NavLink>
            </NavItem>
          ))}
        </NavItems>

        {/* <ContactButton
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </ContactButton> */}
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)'};
  backdrop-filter: blur(10px);
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const NavContent = styled.div`
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const NavItems = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${props => props.isActive ? '#2d3436' : '#666'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2d3436;
  }

  &.active {
    color: #2d3436;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  border-radius: 2px;
`;

const ContactButton = styled.button`
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(132, 250, 176, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(132, 250, 176, 0.4);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Navbar;