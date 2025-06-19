"use client";
import styled, { keyframes } from 'styled-components';
import { FaCloudDownloadAlt, FaServer, FaMobileAlt, FaDatabase, FaReact, FaFileAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaBuilding, FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotatingPhone3D } from '@/components/RotatingPhone';
import { HeroVideoBackground } from '@/components/HeroVideoBackground';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

const Header = styled(motion.header) <{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ scrolled }) => scrolled ? '1px solid #333' : 'none'};
  transition: all 0.3s ease;
  @media (max-width: 768px) {
    width: 100vw;
    overflow-x: hidden;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #c8d1d9;
  font-family: 'Fira Mono', monospace;
  cursor: pointer;
`;

const NavItem = styled(motion.button)`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 8px 0;
  font-family: 'Fira Mono', monospace;
  
  &::before {
    content: '/ ';
    font-size: 1.5rem;
    color: #03bfa6;
    margin-right: -14px;
  }
  
  &::after {
    content: attr(data-number);
    position: absolute;
    top: -2px;
    right: -15px;
    font-size: 0.9rem;
    opacity: 0.7;
  }
  
  &:hover {
    color: #03bfa6;
  }
`;


const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;


const Dot = styled.span`
  color: red;
`;

const Underscore = styled.span`
  color: white;
  animation: ${blink} 1s step-start infinite;
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 24px 80px;
  position: relative;
  overflow: hidden;
`;

// export const HeroVideoBackground = styled.video`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 0;
//   opacity: 0.3; /* ou ajuste conforme quiser */
//   pointer-events: none;
// `;

// const HeroBackground = styled.div`
//   position: absolute;
//   inset: 0;
//   background: radial-gradient(circle at 30% 20%, ${({ theme }) => theme.colors.primary}15 0%, transparent 50%),
//               radial-gradient(circle at 70% 80%, ${({ theme }) => theme.colors.secondary}15 0%, transparent 50%);
// `;
const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 0rem;
  color: #fff;
  text-transform: uppercase;
  font-family: 'DM Sans', monospace;
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const techColors = {
  react: '#61DAFB',
  node: '#3C873A',
  ts: '#3178C6',
  aws: '#FF9900'
};

interface TechProps {
  tech: keyof typeof techColors;
}

const TechItem = styled.span<TechProps>`
  cursor: default;
  padding: 0 0.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ tech }) => techColors[tech]};
  }
`;

const HeroSubtitle = styled(motion.div)`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: #03bfa6;
  margin-bottom: 2rem;
  font-family: 'Fira Mono', monospace;
  font-weight: 500;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60px;
  background: linear-gradient(to bottom, #03bfa6, transparent);
  border-radius: 1px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 6px;
    height: 20px;
    background: #03bfa6;
    border-radius: 3px;
    animation: scroll 2s infinite;
  }
  
  @keyframes scroll {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(20px); opacity: 0.3; }
  }
`;

const Section = styled.section`
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  color: #fff;
  text-align: center;
  margin-bottom: 60px;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-family: 'DM Sans', monospace;
`;

const ExpertiseGrid = styled.div`
  border: 2px solid #fff;
  border-radius: 20px;
  overflow: hidden;
  background: #161b22;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseCard = styled(motion.div) <{ borderColor: string }>`
  padding: 40px 30px;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transition: background 0.3s ease;
  
  &:hover {
    background: black;
  }


  @media (max-width: 768px) {
    border-right: none;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;
const ExpertiseCardHead = styled(motion.div) <{ borderColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const ExpertiseIcon = styled.div`
  margin-bottom: 0px;
  font-size: 2.5rem;
`;

const ExpertiseTitle = styled.h3<{ underlineColor: string }>`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  margin-left: 3px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 80%;
    height: 3px;
    background: ${({ underlineColor }) => underlineColor};
    border-radius: 2px;
  }
`;

const ExpertiseDesc = styled.p`
  font-family: 'Fira Mono', monospace;
  font-size: 1rem;
  color: #b3b3b3;
  line-height: 1.6;
`;

const WorkSection = styled(Section)`
  background: black;
  max-width: none;
  padding: 100px 0;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const MyWorkWrapper = styled.div`
  display: flex;
  align-items: center; /* muda de flex-start para center */
  justify-content: space-between;
  gap: 80px; /* aumenta o espaçamento entre texto e celular */
  max-width: 1200px;
  margin: 0 auto 100px auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;


const MyWorkLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  margin-right: 80px;
`;

const MyWorkDesc = styled.p`
  font-family: 'Fira Mono', monospace;
  font-size: 1.15rem;
  color: #c9d1d9;
  margin-bottom: 0;
  text-align: left;
  white-space: pre-line;
`;

const MyWorkRight = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 420px;
  margin-left: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  justify-items: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const ProjectCard = styled(motion.div)`
  background: #161b22;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #333;
  transition: all 0.1s ease;
  
  &:hover {
    transform: translateY(-20px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const ProjectCardImage = styled.div`
  width: 100%;
  height: 180px;
  background: #23272f;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectCardContent = styled.div`
  padding: 25px;
`;

const ProjectCardName = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
`;

const ProjectCardDesc = styled.p`
  color: #b3b3b3;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 15px;
`;

const ProjectCardType = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ExperienceSection = styled(Section)`
  background: #0d1117;
  max-width: none;
  padding: 100px 0;
`;

const ExperienceContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 24px;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ExperienceItem = styled(motion.div)`
  border-radius: 15px;
  overflow: hidden;
  background: transparent;
`;

const ExperienceButton = styled.button<{ active: boolean }>`
  width: 100%;
  background: ${({ active }) => active ? '#03bfa6' : '#23272f'};
  color: #fff;
  font-weight: 700;
  font-size: 1.2rem;
  border: none;
  padding: 25px 30px;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  &:hover {
    background: #03bfa6;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px 25px;
  }
`;

const ExperienceContent2 = styled(motion.div)`
  background: #2d2e36;
  padding: 30px;
  display: flex;
  gap: 40px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 25px;
  }
`;

const ExperienceDetails = styled.div`
  flex: 1;
`;

const ExperienceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;
  color: #b3b3b3;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ExperienceDesc = styled.p`
  color: #c9d1d9;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 15px 0 25px 0;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Tag = styled.span`
  background: #3a3b4a;
  color: #fff;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const ExperienceLogo = styled.div`
  min-width: 80px;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    min-width: 60px;
    min-height: 60px;
  }
`;

const Footer = styled.footer`
  background: #161b22;
  border-top: 2px solid #333;
  padding: 10px 0 10px 0;
  text-align: center;
`;

const ContactTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ContactEmail = styled.a`
  color: #03bfa6;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  font-family: 'Fira Mono', monospace;
  
  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

`;

const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #7e5bf0;
  }
`;

const FooterNote = styled.div`
  color: #b3b3b3;
  font-size: 1rem;
  margin-top: 20px;
`;

const expertiseData =
  [
    {
      icon: <FaReact size={40} color="#61DAFB" />,
      title: 'FRONTEND',
      underline: '#61DAFB',
      desc: 'React, TypeScript, responsive UI, design systems.',
    },
    {
      icon: <FaServer size={40} color="#3C873A" />,
      title: 'BACKEND',
      underline: '#3C873A',
      desc: 'Node.js, NestJS, REST APIs, DDD, testing.',
    },
    {
      icon: <FaMobileAlt size={40} color="#8E44AD" />,
      title: 'MOBILE',
      underline: '#8E44AD',
      desc: 'React Native, hybrid apps, UI/UX focus.',
    },
    {
      icon: <FaDatabase size={40} color="#C9D1D9" />,
      title: 'DATABASES',
      underline: '#C9D1D9',
      desc: 'PostgreSQL, MongoDB, schema design, Elasticsearch.',
    },
    {
      icon: <FaCloudDownloadAlt size={40} color="#FF9900" />,
      title: 'CLOUD & CI/CD',
      underline: '#FF9900',
      desc: 'AWS, Docker, GitHub Actions, automated deploys.',
    },
    {
      icon: <FaFileAlt size={40} color="#FF6B6B" />,
      title: 'DOCUMENTATION',
      underline: '#FF6B6B',
      desc: 'Jira, Confluence, clear specs, planning, Swagger, Notion.'
    },
  ];

const projects = [
  {
    name: "Just To-Day",
    desc: "Daily task list built with React. Editable blocks, color customization, and automatic rollover using browser cache.",
    type: "React",
    image: "/img/to-day.png",
    link: "#",
  },
  {
    name: "JobFlow",
    desc: "Kanban board to manage job applications using React, with drag-and-drop and persistent data in localStorage.",
    type: "React",
    image: "/img/jobFlow.png",
    link: "#",
  },
  {
    name: "MyChain API",
    desc: "Habit-tracking REST API built with NestJS, DDD, and PostgreSQL. Tracks user activity.",
    type: "NestJS",
    image: "/img/mychain.png",
    link: "#",
  }
];



const experienceData = [
  {
    company: '2Lar',
    role: 'Fullstack Developer - Mid',
    period: '2024 - Now',
    location: 'São Paulo, Brazil · Remote',
    site: 'https://2lar.com.br',
    description:
      'From frontend to fullstack transition during platform rebuild. Worked with React, Node.js, microservices, AWS, and Elasticsearch across 4 modular products.',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'Elasticsearch'],
  },
  {
    company: 'Go Hike',
    role: 'Mobile Developer - Junior',
    period: '2023 - 2024',
    location: 'Guimarães, Portugal · Remote',
    site: 'https://gohike.com',
    description:
      'Built React Native app with Expo and NestJS API. Worked on authentication, event tracking, forms, and DDD-based architecture.',
    tags: ['React Native', 'NestJS', 'TypeScript', 'PostgreSQL', 'DDD'],
  },
  {
    company: 'FDTE',
    role: 'Software Developer - Trainee',
    period: '2023',
    location: 'São Paulo, Brazil · Remote',
    site: 'https://fdte.org.br',
    description:
      'Worked on BPMN-based systems and backend integrations. Modeled APIs with GraphQL, Postman, and contributed to e-commerce code reviews.',
    tags: ['Node.js', 'GraphQL', 'Postman', 'BPMN', 'Confluence'],
  },
];

const MobileMenuOverlay = styled.div`
  position: fixed;
  left: 0; top: 0;
  width: 100vw; height: 100vh;
  background: rgba(10, 14, 19, 0.98);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  @media (min-width: 426px) {
    display: none !important;
  }
`;

const MobileMenuItem = styled.a`
  color: #fff;
  font-size: 2rem;
  margin: 24px 0;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 2px;
  transition: color 0.2s;
  &:hover {
    color: #03bfa6;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 2100;

  @media (max-width: 425px) {
    display: block;
    position: absolute;
    right: 24px;
    top: 24px;
  }
`;
const DesktopNav = styled.nav`
  display: flex;
  gap: 32px;

  @media (max-width: 425px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media (max-width: 425px) {
    display: block;
  }
`;
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openExperience, setOpenExperience] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'home', number: '01' },
    { id: 'expertise', label: 'expertise', number: '02' },
    { id: 'projects', label: 'projects', number: '03' },
    { id: 'work', label: 'work', number: '04' },
  ];

  return (
    <Container>
      <Header
        scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeaderContent>
          <Logo whileHover={{ scale: 1.05 }} onClick={() => scrollToSection('home')}>
            Renan<Dot></Dot><Underscore>_</Underscore>
          </Logo>

          <DesktopNav>
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                data-number={item.number}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </NavItem>
            ))}
          </DesktopNav>

          <MobileNav>
            <Hamburger onClick={() => setMobileMenuOpen(true)} aria-label="Abrir menu">
              <span style={{fontSize: '2.2rem', lineHeight: 1}}>&#9776;</span>
            </Hamburger>
            {mobileMenuOpen && (
              <MobileMenuOverlay>
                {navItems.map((item) => (
                  <MobileMenuItem key={item.id} onClick={() => { setMobileMenuOpen(false); scrollToSection(item.id); }}>
                    {item.label}
                  </MobileMenuItem>
                ))}
                <MobileMenuItem as="button" style={{fontSize: '1.5rem', marginTop: 40, background: 'none', border: 'none', color: '#aaa'}} onClick={() => setMobileMenuOpen(false)}>
                  Close
                </MobileMenuItem>
              </MobileMenuOverlay>
            )}
          </MobileNav>
        </HeaderContent>
      </Header>

      <Hero id="home">
        {/* <HeroBackground /> */}
        <HeroVideoBackground />
        <HeroContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroName
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Renan Botasse
          </HeroName>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Fullstack Developer
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            | <TechItem tech="react">React</TechItem> • <TechItem tech="node">Node.js</TechItem> • <TechItem tech="ts">TypeScript</TechItem> • <TechItem tech="aws">AWS</TechItem> |
          </HeroSubtitle>
        </HeroContent>

        <ScrollIndicator
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </Hero>

      <Section id="expertise">
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Expertise
        </SectionTitle>

        <ExpertiseGrid>
          {expertiseData.map((item, idx) => (
            <ExpertiseCard
              key={idx}
              borderColor={item.underline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <ExpertiseCardHead borderColor="#61DAFB">
                <ExpertiseIcon>
                  {item.icon}
                </ExpertiseIcon>
                <ExpertiseTitle underlineColor={item.underline}>
                  {item.title}
                </ExpertiseTitle>
              </ExpertiseCardHead>
              <ExpertiseDesc>{item.desc}</ExpertiseDesc>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </Section>

      <WorkSection id="projects">
        <MyWorkWrapper>
          <MyWorkLeft>
            <SectionTitle>PROJECTS</SectionTitle>
            <MyWorkDesc>
              Built a modular real estate rental platform using React, Next.js, Node.js, and TypeScript. Contributed to frontend, backend, and infrastructure.
              <br />
              Coordinated developers via Jira, structured technical scopes across four standalone products, and worked with AWS, SQL, and Elasticsearch to support over 1,500 active listings            </MyWorkDesc>
          </MyWorkLeft>
          <MyWorkRight>
            <RotatingPhone3D />
          </MyWorkRight>
        </MyWorkWrapper>
        {/* <RotatingPhone>

  <PhoneScreen>
    <motion.img
      src={carouselImages[currentImage]}
      alt="2Lar Screen"
      key={currentImage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  </PhoneScreen>

</RotatingPhone> */}


        <ProjectsGrid>
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ProjectCardImage>
                <img src={project.image} alt={project.name} />
              </ProjectCardImage>
              <ProjectCardContent>
                <ProjectCardName>{project.name}</ProjectCardName>
                <ProjectCardDesc>{project.desc}</ProjectCardDesc>
                <ProjectCardType>{project.type}</ProjectCardType>
              </ProjectCardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </WorkSection>

      <ExperienceSection id="work">
        <ExperienceContent>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Professional Experience
          </SectionTitle>

          <ExperienceList>
            {experienceData.map((exp, idx) => (
              <ExperienceItem
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ExperienceButton
                  active={openExperience === idx}
                  onClick={() => setOpenExperience(openExperience === idx ? -1 : idx)}
                >
                  <span>{exp.role} @ {exp.company}</span>
                  <span>{exp.period}</span>
                </ExperienceButton>

                <AnimatePresence>
                  {openExperience === idx && (
                    <ExperienceContent2
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExperienceDetails>
                        <ExperienceInfo>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <FaMapMarkerAlt style={{ opacity: 0.7 }} />
                            {exp.location}
                          </div>
                          <a
                            href={exp.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              color: '#b3b3b3',
                              textDecoration: 'underline',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
                            {exp.site.replace('https://', '')}
                          </a>
                        </ExperienceInfo>
                        <ExperienceDesc>{exp.description}</ExperienceDesc>
                        <TagList>
                          {exp.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))}
                        </TagList>
                      </ExperienceDetails>
                      <ExperienceLogo>
                        <FaBuilding size={60} color="#7F5AF0" />
                      </ExperienceLogo>
                    </ExperienceContent2>
                  )}
                </AnimatePresence>
              </ExperienceItem>
            ))}
          </ExperienceList>
        </ExperienceContent>
      </ExperienceSection>

      <Footer id="contact">
        <ContactTitle>Contact</ContactTitle>
        <SocialIcons>
          <SocialLink
            href="https://github.com/renanbotasse"
            target="_blank"
            aria-label="GitHub"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/renanbotasse/"
            target="_blank"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="https://hackernoon.com/u/renanb"
            target="_blank"
            aria-label="Hackernoon"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <FaHackerrank />
          </SocialLink>
        </SocialIcons>
        <ContactEmail href="mailto:renanbotasse@gmail.com">
          renanbotasse@gmail.com
        </ContactEmail>
        <FooterNote>
          © {new Date().getFullYear()} Renan Botasse
        </FooterNote>
      </Footer>
    </Container>
  );
}