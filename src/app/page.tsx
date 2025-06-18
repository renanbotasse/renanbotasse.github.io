"use client";
import styled from 'styled-components';
import { FaServer, FaCubes, FaDatabase, FaTools, FaReact, FaFileAlt, FaArrowRight, FaMapMarkerAlt, FaExternalLinkAlt, FaBuilding, FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
`;

const Header = styled(motion.header)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  background: ${({ scrolled, theme }) => scrolled ? `${theme.colors.background}ee` : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ scrolled }) => scrolled ? '1px solid #333' : 'none'};
  transition: all 0.3s ease;
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
  color: ${({ theme }) => theme.colors.primary};
  font-family: 'Fira Mono', monospace;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 8px 0;
  font-family: 'Fira Mono', monospace;
  
  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
  
  &::after {
    content: attr(data-number);
    position: absolute;
    top: -8px;
    right: -12px;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.7;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background}f5;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #333;
  padding: 20px 24px;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 12px 0;
  font-family: 'Fira Mono', monospace;
  
  &::before {
    content: '// ';
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 8px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
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

const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, ${({ theme }) => theme.colors.primary}15 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, ${({ theme }) => theme.colors.secondary}15 0%, transparent 50%);
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const HeroName = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: #fff;
  text-transform: uppercase;
`;

const HeroTitle = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const HeroSubtitle = styled(motion.div)`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: ${({ theme }) => theme.colors.primary};
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
  background: linear-gradient(to bottom, ${({ theme }) => theme.colors.primary}, transparent);
  border-radius: 1px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 6px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary};
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
  letter-spacing: -0.02em;
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

const ExpertiseCard = styled(motion.div)<{ borderColor: string }>`
  padding: 40px 30px;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1a1f26;
  }
  
  &:nth-child(3n) {
    border-right: none;
  }
  
  &:nth-last-child(-n+3) {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    border-right: none;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const ExpertiseIcon = styled.div`
  margin-bottom: 20px;
  font-size: 2.5rem;
`;

const ExpertiseTitle = styled.h3<{ underlineColor: string }>`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  
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
  background: #0a0e13;
  max-width: none;
  padding: 100px 0;
`;

const MyWorkWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 80px auto;
  padding: 0 24px;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const MyWorkLeft = styled.div`
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MyWorkTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 32px;
  text-align: left;
  line-height: 1;
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
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const MyWorkMockup = styled.div`
  width: 320px;
  height: 600px;
  background: #23272f;
  border-radius: 36px;
  box-shadow: 0 10px 40px #0007;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  transform: rotate(-15deg) skewY(-2deg);
  position: relative;
  z-index: 2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 600px) {
    width: 220px;
    height: 400px;
  }
`;

const CurvedArrow = styled.svg`
  position: absolute;
  left: -120px;
  top: 60px;
  width: 180px;
  height: 120px;
  z-index: 1;
  @media (max-width: 900px) {
    left: 0;
    top: 0;
    width: 120px;
    height: 80px;
  }
`;

const FeaturedBox = styled.div`
  margin-top: 32px;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeaturedLabel = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FeaturedName = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const FeaturedButton = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  margin-top: 16px;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: #161b22;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #333;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
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
  color: ${({ theme }) => theme.colors.primary};
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
  background: ${({ active, theme }) => active ? theme.colors.secondary : '#23272f'};
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
    background: ${({ theme }) => theme.colors.primary};
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
  padding: 60px 0 40px 0;
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
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 30px;
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
  margin-bottom: 30px;
`;

const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const FooterNote = styled.div`
  color: #b3b3b3;
  font-size: 1rem;
  margin-top: 20px;
`;

const expertiseData = [
  {
    icon: <FaServer size={40} color="#00BFA6" />,
    title: 'Backend com NestJS e Node.js',
    underline: '#00BFA6',
    desc: 'APIs RESTful, microsserviços, BFF, DDD, testes automatizados.'
  },
  {
    icon: <FaCubes size={40} color="#7F5AF0" />,
    title: 'Arquiteturas escaláveis',
    underline: '#7F5AF0',
    desc: 'Projetos com DDD, microsserviços, integrações e escalabilidade.'
  },
  {
    icon: <FaDatabase size={40} color="#C9D1D9" />,
    title: 'Banco de dados',
    underline: '#C9D1D9',
    desc: 'SQL (PostgreSQL), NoSQL (MongoDB), modelagem e otimização.'
  },
  {
    icon: <FaTools size={40} color="#00BFA6" />,
    title: 'CI/CD e Cloud',
    underline: '#00BFA6',
    desc: 'GitHub Actions, Docker, AWS, deploy automatizado.'
  },
  {
    icon: <FaReact size={40} color="#7F5AF0" />,
    title: 'Frontend & Mobile',
    underline: '#7F5AF0',
    desc: 'React, React Native, interfaces modernas e responsivas.'
  },
  {
    icon: <FaFileAlt size={40} color="#C9D1D9" />,
    title: 'Documentação técnica',
    underline: '#C9D1D9',
    desc: 'Swagger, Notion, Confluence, documentação clara e útil.'
  },
];

const projects = [
  {
    name: "HabitFlow API",
    desc: "API de rastreamento de hábitos com NestJS, DDD, PostgreSQL e Swagger.",
    type: "Real",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
  },
  {
    name: "JobTrello",
    desc: "Gerenciador de candidaturas estilo Trello com React, drag-and-drop e persistência local.",
    type: "Real",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
  },
  {
    name: "API de gestão financeira pessoal",
    desc: "Controle de gastos e orçamentos com autenticação, múltiplas carteiras e dashboard de insights.",
    type: "Fictício",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
  },
  {
    name: "DashTech",
    desc: "Painel de analytics com gráficos interativos usando React, TanStack Table e consumo de API.",
    type: "Fictício",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#",
  },
];

const experienceData = [
  {
    company: '2Lar',
    role: 'Tech Lead & Fullstack Developer',
    period: '2022 - Presente',
    location: 'São Paulo, Brasil',
    site: 'https://2lar.com.br',
    description: 'Liderança técnica e desenvolvimento fullstack de plataforma de gestão de condomínios, integrações com APIs, arquitetura escalável, automação de processos e experiência do usuário.',
    tags: ['Node.js', 'React', 'AWS', 'Arquitetura', 'Liderança'],
  },
  {
    company: 'Go Hike',
    role: 'Backend Developer',
    period: '2020 - 2022',
    location: 'Remoto',
    site: 'https://gohike.com',
    description: 'Desenvolvimento de APIs para app de trilhas, autenticação, integração com mapas e notificações.',
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'APIs'],
  },
  {
    company: 'FDTE',
    role: 'Desenvolvedor Fullstack',
    period: '2018 - 2020',
    location: 'São Paulo, Brasil',
    site: 'https://fdte.org.br',
    description: 'Projetos de inovação, desenvolvimento web, integrações e suporte a times multidisciplinares.',
    tags: ['React', 'Node.js', 'Inovação'],
  },
];

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
    { id: 'work', label: 'work', number: '03' },
    { id: 'experience', label: 'experience', number: '04' },
    { id: 'contact', label: 'contact', number: '05' },
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
          <Logo
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            RenanBotasse._
          </Logo>
          
          <Nav>
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
          </Nav>

          <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </MobileMenuButton>
        </HeaderContent>

        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </MobileNavItem>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </Header>

      <Hero id="home">
        <HeroBackground />
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
            Software Engineer, Fullstack & Backend Developer.
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            | React • Node.js • TypeScript • AWS |
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
          My Expertise
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
              whileHover={{ scale: 1.02 }}
            >
              <ExpertiseIcon>{item.icon}</ExpertiseIcon>
              <ExpertiseTitle underlineColor={item.underline}>
                {item.title}
              </ExpertiseTitle>
              <ExpertiseDesc>{item.desc}</ExpertiseDesc>
            </ExpertiseCard>
          ))}
        </ExpertiseGrid>
      </Section>

      <WorkSection id="work">
        <MyWorkWrapper>
          <MyWorkLeft>
            <MyWorkTitle>My Work</MyWorkTitle>
            <MyWorkDesc>
              Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.\nCollaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
            </MyWorkDesc>
          </MyWorkLeft>
          <MyWorkRight>
            <MyWorkMockup>
              <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400" alt="2Lar App" />
            </MyWorkMockup>
            <CurvedArrow viewBox="0 0 180 120">
              <path d="M10 110 Q90 10 170 80" stroke="#7F5AF0" strokeWidth="5" fill="none" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,10 L10,5 z" fill="#7F5AF0" />
                </marker>
              </defs>
            </CurvedArrow>
            <FeaturedBox>
              <FeaturedLabel>Featured Project</FeaturedLabel>
              <FeaturedName>2Lar</FeaturedName>
              <FeaturedButton href="#" target="_blank">View Project</FeaturedButton>
            </FeaturedBox>
          </MyWorkRight>
        </MyWorkWrapper>

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

      <ExperienceSection id="experience">
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
        <ContactTitle>Contato</ContactTitle>
        <ContactEmail href="mailto:renan.botasse@gmail.com">
          renan.botasse@gmail.com
        </ContactEmail>
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
            href="https://hackernoon.com/u/renanbotasse"
            target="_blank"
            aria-label="Hackernoon"
            whileHover={{ scale: 1.1, y: -2 }}
          >
            <FaHackerrank />
          </SocialLink>
        </SocialIcons>
        <FooterNote>
          © {new Date().getFullYear()} Renan Botasse. Todos os direitos reservados.
        </FooterNote>
      </Footer>
    </Container>
  );
}