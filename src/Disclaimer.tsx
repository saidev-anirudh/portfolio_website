import { Box, Typography, Link } from "@mui/material";
import NavigationBar from "./NavigationBar";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const Disclaimer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="notice" p={3}>
        <NavigationBar />
        <Typography variant="h2" gutterBottom>
          Legal Notice and Disclaimer
        </Typography>
        <Typography variant="body1" paragraph>
          According to Information Technology Rules, 2011
        </Typography>
        <Typography variant="body1" paragraph>
          {import.meta.env.VITE_ADRESS_NAME}
          <br />
          {import.meta.env.VITE_ADRESS_STREET}
          <br />
          {import.meta.env.VITE_ADRESS_CITY}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Created By:</strong> <br />
          Sai Dev Anirudh Thatode <br />
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Contact:</strong> <br />
          E-Mail: 
          <Link
            sx={{
              textDecoration: "none",
              color: "inherit",
              marginLeft: "0.5rem",
            }}
            href="mailto:sai44dev44@gmail.com"
          >
            sai44dev44@gmail.com
          </Link>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Personal and Non-Commercial Use Only:</strong> <br />
          This website is strictly for personal, non-commercial use. It serves as a portfolio to showcase my work and skills. Any use of the content or code for commercial purposes is expressly prohibited without prior written consent.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>No Liability:</strong> <br />
          I, Sai Dev Anirudh Thatode, bear no responsibility or liability for any damages, losses, or consequences that may arise from the use of this website or its content. Users access and use this website entirely at their own risk.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Usage and Copyright</strong> <br />
          While the website is for personal use, the underlying project is available on GitHub under the MIT License. You may use, modify, and distribute the code as per the MIT License terms, but only for non-commercial purposes.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>AI Utilization</strong> <br />
          Parts of this website were developed with AI assistance. Despite efforts to ensure accuracy, AI-generated content may contain errors. Users should exercise discretion.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>User-Provided Links</strong> <br />
          Links to external sites (resume, GitHub, projects) are provided as-is. I only provide links to the websites I have created. 
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Limitation of Liability</strong> <br />
          All information on this website is for general informational purposes only, not professional advice. I make no warranties about the completeness, reliability, or suitability of any information except to the extent that it is provided by me. Any action taken based on the website's content is strictly at the user's own risk.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Modifications</strong> <br />
          I reserve the right to modify this disclaimer at any time without notice. Continued use of the site implies acceptance of any changes.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Governing Law</strong> <br />
          This disclaimer is governed by Indian law. Any disputes shall be subject to the exclusive jurisdiction of Indian courts.
        </Typography>
        <Typography variant="body1" paragraph>
          By using this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Disclaimer;
