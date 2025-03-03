import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { Search } from "@mui/icons-material";

const buttonVariants = {
  hidden: { opacity: 0, y: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    y: [0, -5, 5] as number[],
    scale: 1,
    transition: { delay: 3.5, duration: 0.8, ease: "easeInOut" }
  },
  hover: {
    backgroundColor: "#ffffff",
    color: "purple",
    boxShadow: "0px 0px 20px 5px rgba(156, 39, 176, 0.7)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
} as unknown as import("framer-motion").Variants;

const AnimatedWelcome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const text1 = "Hi!".split("");
  const text2 = "My name is".split("");
  const text3 = "Sai Dev Anirudh";
  const text4 = "I am an AI/ML Engineer.".split("");
  
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: isMobile ? "5%" : "10%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            textAlign: "center",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            style={{
              marginBottom: "0px",
              fontSize: isMobile ? "2rem" : "3rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
            }}
          >
            {text1.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1.5 }}
            style={{
              marginTop: "3px",
              fontSize: isMobile ? "1.5rem" : "2rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
            }}
          >
            {text2.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + index * 0.08 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
            style={{
              marginTop: isMobile ? "-1rem" : "-2rem",
              fontSize: isMobile ? "2rem" : "3rem",
              background: "-webkit-linear-gradient(45deg, #8A2BE2,rgb(226, 204, 241), #EE82EE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
            }}
          >
            {text3.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.75 + index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
            style={{
              marginTop: isMobile ? "-1rem" : "-2rem",
              fontSize: isMobile ? "1.5rem" : "2rem",
              zIndex: 1,
              boxShadow:
                "0px 0px 10px 0px  linear-gradient(to right, #414345, #232526)",
            }}
          >
            {text4.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.25 + index * 0.08 }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h2>
        </Box>
        
        {/* Profile Image with Circle Border */}
        <Box
          sx={{
            position: "relative",
            width: isMobile ? "14rem" : "20rem",
            height: isMobile ? "14rem" : "20rem",
            marginBottom: isMobile ? "2rem" : 0,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3, duration: 1.5 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #ffffff, #9C27B0)",
              padding: "4px",
              zIndex: 1,
              boxShadow: "0px 0px 15px 2px rgba(156, 39, 176, 0.7)",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#000",
              }}
            >
              <img
                src="./self.png"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                  userSelect: "none",
                }}
              />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <motion.button
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onClick={() => {
          window.location.href = "/projects";
        }}
        style={{
          width: "16rem",
          fontWeight: "bold",
          margin: "auto",
          height: "4rem",
          border: "1px solid #9C27B0",
          fontSize: "1.2rem",
          borderRadius: "2rem",
          cursor: "pointer",
          background: "linear-gradient(45deg, #8A2BE2, rgb(226, 204, 241), #EE82EE)",
          color: "black",
        }}
        className="animation-button"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Search /> Discover my work
        </Box>
      </motion.button>
      <Footer />
    </>
  );
};

export default AnimatedWelcome;
