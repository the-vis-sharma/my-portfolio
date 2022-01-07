import React, { forwardRef } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Grade, LocationOn, Timelapse } from "@mui/icons-material";
import educations from "./data";

const Education = forwardRef((_, ref) => {
  return (
    <Box ref={ref} sx={{ p: 4, pt: 8 }} id="education-section">
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        color="primary"
        fontWeight="500"
      >
        Education
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {educations.map((education) => (
          <Grid
            key={education.school + education.class}
            item
            md={6}
            sm={12}
            sx={{ position: "relative" }}
          >
            <Card data-testid="education-card" variant="outlined">
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  data-testid="certification-title"
                  color="primary"
                >
                  {`School/College: ${education.class}`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  textAlign="justify"
                >
                  {`Board/University: ${education.school}`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  textAlign="justify"
                >
                  {education.board}
                </Typography>
              </CardContent>
              <Divider />
              <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="text"
                  disabled
                  sx={{ textTransform: "capitalize" }}
                  startIcon={<Timelapse />}
                >
                  {education.duration}
                </Button>
                <Button
                  variant="text"
                  disabled
                  startIcon={<LocationOn />}
                  sx={{ textTransform: "capitalize" }}
                >
                  {education.location}
                </Button>
                <Button variant="text" disabled startIcon={<Grade />}>
                  {education.marks}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default Education;
