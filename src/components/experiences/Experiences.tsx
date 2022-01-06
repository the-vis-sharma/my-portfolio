import { forwardRef } from "react";
import { AccessTimeFilled } from "@mui/icons-material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Theme, Typography, useMediaQuery } from "@mui/material";
import CompanyDetail from "./CompanyDetail";
import CompanyList from "./data";

const Experiences = forwardRef((_, ref) => {
  const isTabletOrSmaller = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <Box
      ref={ref}
      id="experiences-section"
      sx={{
        p: 4,
        pt: 8,
      }}
    >
      <Typography
        variant="h3"
        textAlign="center"
        gutterBottom
        color="primary"
        fontWeight="500"
      >
        Experiences
      </Typography>

      {!isTabletOrSmaller ? (
        <Timeline>
          {CompanyList.map((company) => (
            <TimelineItem key={company.name}>
              <TimelineOppositeContent
                sx={{ m: "auto 0", flex: 0 }}
                variant="body2"
                color="text.secondary"
              >
                <Box sx={{ width: "100px" }}>{company.duration}</Box>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <AccessTimeFilled />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <CompanyDetail {...company} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      ) : (
        CompanyList.map((company) => (
          <CompanyDetail key={company.name} {...company} />
        ))
      )}
    </Box>
  );
});

export default Experiences;
