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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PK
          </Logo>
        </LogoContainer>

        <NavItems>
          {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
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
  background: ${props => props.scrolled ? '#ffffff' : 'rgba(255, 255, 255, 0.95)'};
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #000000;
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
  font-weight: 800;
  color: #000000;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  border: 3px solid #000000;
  padding: 0.3rem 1rem;
  display: inline-block;
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 1);
  transition: all 0.2s ease;
  
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 1);
  }
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
  color: ${props => props.isActive ? '#000000' : '#666666'};
  text-decoration: none;
  font-size: 1rem;
  font-weight: ${props => props.isActive ? '600' : '500'};
  padding: 0.5rem 0;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    color: #000000;
  }

  &.active {
    color: #000000;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 3px;
  background: #000000;
  border-radius: 0;
`;

export default Navbar;