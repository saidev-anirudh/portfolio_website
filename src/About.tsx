import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { SxProps, Theme } from "@mui/system";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import 'react-vertical-timeline-component/style.min.css';

const aboutHeaderStyle = { color: "#ebdddd", mb: 2, fontFamily: "Montserrat" };
const aboutBodyStyle = { color: "#ebdddd", maxWidth: "100%", mb: 2, textAlign: "justify", fontFamily: "Montserrat" };
const careerHistoryBoxStyle: SxProps<Theme> = { mb: 4, borderLeft: "4px solid #5000ca", pl: 2 };
// const workExperienceTitleStyle = { color: "#ebdddd", opacity: 0.7, fontFamily: "Montserrat" };
// const workExperienceDateStyle = { color: "#ebdddd", opacity: 0.7, fontSize: 14, mt: 1, fontFamily: "Montserrat" };

const calculateAge = (birthDateString: string) => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasBirthdayPassed) {
    age -= 1;
  }
  return age;
};

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const age = calculateAge("2002-07-03");
  const boxStyle: SxProps<Theme> = { mt: 10, px: 2, marginLeft: isMobile ? "0" : "-1rem" };
  const aboutSectionStyle = { mb: 4, p: 3, borderRadius: "8px", background: "linear-gradient(135deg, #2a003d 0%, #000 100%)" };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        height: "100vh",
        marginBottom: "2%",
      }}
    >
      <NavigationBar />
      <Box sx={boxStyle}>
      
        <Box sx={aboutSectionStyle}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={aboutHeaderStyle}
          >
            About Me
          </Typography>
          <Typography
            variant="body1"
            sx={aboutBodyStyle}
          >
            A dedicated and innovative {age}-year-old AI/ML Engineer with expertise in developing multi-agent 
            ecosystems and AI-driven multimodal analysis systems. Proficient in leveraging technologies 
            such as Python, TensorFlow, PyTorch, and agentic frameworks including LangChain, LangGraph, 
            Crew AI, and AutoGen. Demonstrated success in optimizing marketing metrics through advanced 
            clustering algorithms and temporal motion analysis, while delivering measurable business 
            impact with predictive modeling and custom LoRA fine-tuning solutions. Equipped with 
            comprehensive experience in video analysis, generative AI, and cybersecurity enhancements, 
            offering a well-rounded skill set in artificial intelligence and machine learning. 
            Currently working at NYX AI to revolutionize performance marketing and campaign analysis, 
            while pursuing personal projects in urban heat island prediction, model visualization, and 
            agentic systems. Driven by a passion for solving complex problems and creating scalable 
            solutions that drive business growth.
          </Typography>
        </Box>

        <Box sx={careerHistoryBoxStyle}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2, fontFamily: "Montserrat" }}
          >
            Career History
          </Typography>
          <Timeline />
        </Box>

        <Box sx={{ mb: 4, borderLeft: "4px solid #5000ca", pl: 2 }}>
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{ color: "#ebdddd", mb: 2, fontFamily: "Montserrat" }}
          >
            Education & Organizations
          </Typography>
          <EducationTimeline />
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

const Timeline = () => {
  return (
    <VerticalTimeline layout="1-column">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'linear-gradient(135deg, #2a003d 0%, #000 100%)', color: '#ebdddd', fontFamily: 'Montserrat' }}
        contentArrowStyle={{ borderRight: '7px solid #2a003d' }}
        date="09.2024 - present"
        iconStyle={{ background: '#5000ca', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 style={{ fontFamily: 'Montserrat' }}>AI ML Engineer at NYX AI, Bangalore</h3>
        <p>Full-time</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'linear-gradient(135deg, #2a003d 0%, #000 100%)', color: '#ebdddd', fontFamily: 'Montserrat' }}
        contentArrowStyle={{ borderRight: '7px solid #2a003d' }}
        date="02.2024 - 08.2024"
        iconStyle={{ background: '#5000ca', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 style={{ fontFamily: 'Montserrat' }}>Grad. Data Scientist at Genpact, Bangalore</h3>
        <p>Full-time</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'linear-gradient(135deg, #2a003d 0%, #000 100%)', color: '#ebdddd', fontFamily: 'Montserrat' }}
        contentArrowStyle={{ borderRight: '7px solid #2a003d' }}
        date="06.2023 - 10.2023"
        iconStyle={{ background: '#5000ca', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 style={{ fontFamily: 'Montserrat' }}>Security Intern at RiskSek, Hyderabad</h3>
        <p>Internship</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'linear-gradient(135deg, #2a003d 0%, #000 100%)', color: '#ebdddd', fontFamily: 'Montserrat' }}
        contentArrowStyle={{ borderRight: '7px solid #2a003d' }}
        date="07.2023 - 08.2023"
        iconStyle={{ background: '#5000ca', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 style={{ fontFamily: 'Montserrat' }}>Project Intern at Signal Corp. Ltd., New Zealand</h3>
        <p>Internship</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

const EducationTimeline = () => {
  return (
    <VerticalTimeline layout="1-column">
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'linear-gradient(135deg, #2a003d 0%, #000 100%)', color: '#ebdddd', fontFamily: 'Montserrat' }}
        contentArrowStyle={{ borderRight: '7px solid#2a003d' }}
        date="2020 - 2024"
        iconStyle={{ background: '#5000ca', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 style={{ fontFamily: 'Montserrat' }}>B.Tech in Computer Science and Engineering</h3>
        <p style={{ fontFamily: 'Montserrat' }}>with a Minor in Big Data Analytics</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'linear-gradient(135deg, #2a003d 0%, #000 100%)', color: '#ebdddd', fontFamily: 'Montserrat' }}
        contentArrowStyle={{ borderRight: '7px solid #2a003d' }}
        date="2021 - 2023"
        iconStyle={{ background: '#5000ca', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faBriefcase} />}
      >
        <h3 style={{ fontFamily: 'Montserrat' }}>Advisory Board at Red-X Manipal, Manipal</h3>
        <p style={{ fontFamily: 'Montserrat' }}>Board Member of the biggest socio-adventure organization in Manipal</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default About;
