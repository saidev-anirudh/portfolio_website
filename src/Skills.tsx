import {
  Box,
  Container,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBar from "./NavigationBar";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const techStack: { link: string; imageSrc: string; alt: string; name: string }[] = [
    { link: "https://www.python.org", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", alt: "python", name: "Python" },
    { link: "https://www.tensorflow.org", imageSrc: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", alt: "tensorflow", name: "TensorFlow" },
    { link: "https://pytorch.org/", imageSrc: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", alt: "pytorch", name: "PyTorch" },
    { link: "https://scikit-learn.org/", imageSrc: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", alt: "scikit_learn", name: "Scikit-Learn" },
    { link: "https://seaborn.pydata.org/", imageSrc: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", alt: "seaborn", name: "Seaborn" },
    { link: "https://pandas.pydata.org/", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg", alt: "pandas", name: "Pandas" },
    { link: "https://opencv.org/", imageSrc: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg", alt: "opencv", name: "OpenCV" },
    { link: "https://www.mysql.com/", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", alt: "mysql", name: "MySQL" },
    { link: "https://www.postgresql.org/", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", alt: "postgresql", name: "PostgreSQL" },
    { link: "https://kubernetes.io", imageSrc: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", alt: "kubernetes", name: "Kubernetes" },
    { link: "https://git-scm.com", imageSrc: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", alt: "git", name: "Git" },
    { link: "https://www.linux.org/", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg", alt: "linux", name: "Linux" },
    { link: "https://www.docker.com", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", alt: "docker", name: "Docker" },
    { link: "https://numpy.org", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", alt: "numpy", name: "NumPy" },
    { link: "https://redis.io", imageSrc: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg", alt: "redis", name: "Redis" }
  ];

  const TechItem = ({ tech }: { tech: { link: string; imageSrc: string; alt: string; name: string } }): JSX.Element => {
    return (
      <Grid item xs={6} sm={3} md={3}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', marginBottom: '2rem' }}>
            <a href={tech.link} target="_blank" rel="noreferrer">
              <motion.img
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: -40 }}
                transition={{ delay: 0.25, duration: 1.5 }}
                src={tech.imageSrc}
                alt={tech.alt}
                style={{ width: 100, height: 100, margin: 15 } as React.CSSProperties}
              />
            </a>
            <Typography sx={{ fontFamily: 'Montserrat', color: '#ebdddd', mt: 0.5 }}>
              {tech.name}
            </Typography>
          </Box>
        </motion.div>
      </Grid>
    );
  };

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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          fontWeight={700}
          fontSize={isMobile ? 32 : 40}
          variant="h2"
          sx={{
            textAlign: isMobile ? "center" : "start",
            color: "#ebdddd",
            marginTop: isMobile ? "12%" : "12.5%",
            marginBottom: isMobile ? "20%" : "10%",
          }}
        >
          Tech Stack
        </Typography>
      </motion.div>
      <Grid container spacing={isMobile ? 2 : 4} justifyContent="start" sx={{ marginBottom: "15%", rowGap: isMobile ? 2 : 4 }}>
        {techStack.map((tech, index) => (
          <TechItem key={index} tech={tech} />
        ))}
      </Grid>
      <Divider sx={{ backgroundColor: "#ebdddd" }} />

      <Box sx={{ marginTop: "1%", marginBottom: "10%" }}>
        <motion.div
          style={{
            color: "#ebdddd",
            fontSize: isMobile ? 14 : 20,
            fontWeight: 400,
            textAlign: "start",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0, y: 0 }}
          transition={{ delay: 0.25, duration: 1.5 }}
        >
    
        </motion.div>
      </Box>
      <Footer />
    </Container>
  );
};

export default Skills;
