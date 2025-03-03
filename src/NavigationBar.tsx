import {
  AppBar,
  Box,
  Toolbar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, LinkedIn } from "@mui/icons-material";
import "./NavigationBar.css";
import { SxProps, Theme } from "@mui/system";

const NavigationBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const linkVariants = {
    initial: { color: "#ffffff" },
    hover: {
      scale: 1.1,
      background: "-webkit-linear-gradient(45deg, #8A2BE2, rgb(226, 204, 241), #EE82EE)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  };

  const githubSx: SxProps<Theme> = {
    color: "#ffffff",
    cursor: "pointer",
    fontSize: isMobile ? "1.2rem" : "1.5rem",
    width: isMobile ? "2rem" : "2.25rem",
    height: isMobile ? "2rem" : "2.25rem",
    marginLeft: isMobile ? "1rem" : "-1.5rem",
    marginRight: isMobile ? "1rem" : "1.5rem",
    transition: "fill 0.3s ease-in-out, color 0.3s ease-in-out",
    '&:hover': {
      fill: "url(#gradient)",
      color: "transparent"
    }
  };
  const linkedInSx: SxProps<Theme> = {
    color: "#ffffff",
    cursor: "pointer",
    fontSize: isMobile ? "1.2rem" : "1.5rem",
    width: isMobile ? "2.4rem" : "2.6rem",
    height: isMobile ? "2.4rem" : "2.6rem",
    transition: "fill 0.3s ease-in-out, color 0.3s ease-in-out",
    '&:hover': {
      fill: "url(#gradient)",
      color: "transparent"
    }
  };

  return (
    <div>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="50%" stopColor="rgb(226, 204, 241)" />
            <stop offset="100%" stopColor="#EE82EE" />
          </linearGradient>
        </defs>
      </svg>
      <AppBar
        sx={{
          boxShadow: "none",
          backgroundColor: "#111111",
          transition: "opacity 0.5s",
        }}
        position="static"
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "start",
              marginTop: isMobile ? "0.5rem" : 0,
              marginBottom: isMobile ? "0.5rem" : 0,
              marginRight: isMobile ? "0" : "auto",
            }}
          >
            <Tooltip title="GitHub">
              <GitHub
                onClick={() => {
                  window.open("https://github.com/saidev-anirudh", "_blank");
                }}
                sx={githubSx}
              />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <LinkedIn
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/saidevat/",
                    "_blank"
                  );
                }}
                sx={linkedInSx}
              />
            </Tooltip>
          </Box>
          <Box sx={{ display: "flex", gap: "2.9rem" }}>
            <motion.a
              href="/"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "#ffffff" }}
            >
              Home
            </motion.a>
            <motion.a
              href="/about"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "#ffffff" }}
            >
              About
            </motion.a>
            <motion.a
              href="/skills"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "#ffffff" }}
            >
              Skills
            </motion.a>
            <motion.a
              href="/projects"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "#ffffff" }}
            >
              Projects
            </motion.a>
            <motion.a
              href="/certifications"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "#ffffff" }}
            >
              Certifications
            </motion.a>
            <motion.a
              href="mailto:sai44dev44@gmail.com"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="nav-link"
              style={{ fontSize: isMobile ? "1.2rem" : "1.4rem", color: "#ffffff" }}
            >
              Contact
            </motion.a>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
