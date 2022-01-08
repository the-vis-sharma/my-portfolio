import { CloudDownload } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { forwardRef } from "react";
import ProfilePic from "../../assets/images/profile.jpeg";

const AvatarStyled = styled(Avatar)`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  border: 5px solid #008073;
`;

const About = forwardRef((_, ref) => {
  return (
    <Box
      ref={ref}
      id="about-section"
      sx={{
        p: { xs: 2, sm: 4 },
        pt: 8,
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        color="primary"
        fontWeight="500"
        m={4}
        fontSize={{ xs: "2.125rem", sm: "3rem" }}
      >
        About Me
      </Typography>

      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item sm={6} sx={{ position: "relative" }}>
          <AvatarStyled alt="Vishnu Bochiwal" src={ProfilePic} />
          <Card variant="outlined" sx={{ pt: 12, mt: 12 }}>
            <>
              <CardContent>
                <Typography variant="h4" component="div" textAlign="center">
                  Vishnu Bochiwal
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  textAlign="center"
                >
                  Software Engineer @ ThoughtWorks
                </Typography>
              </CardContent>
              <CardActions
                sx={{ display: "flex", justifyContent: "center", pb: 2 }}
              >
                <Button
                  variant="outlined"
                  startIcon={<CloudDownload />}
                  target="_blank"
                  href="https://drive.google.com/file/d/1BrGKXBXLKrarrtJx_iilwX50S5U9wWzv/view"
                >
                  Resume
                </Button>
              </CardActions>
            </>
          </Card>
        </Grid>
        <Grid item sm={6}>
          <Typography textAlign="justify">
            I&apos;m a full stack software engineer having almost 3 years of
            experience developing and delivering which are handling millions of
            users daily. I have a deep interest and passion for technology. I
            love writing and owning codes and enjoy working with people who will
            keep challenging you at every stage. I have strong problem solving,
            analytic, decision-making and excellent communication with
            interpersonal skills. I&apos;m self-driven and motivated with the
            desire to work in a fast-paced, results-driven agile environment
            with varied responsibilities. I love to challenge myself to deliver
            these solutions with the highest quality.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
});

export default About;
