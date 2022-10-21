import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Fragment, useState } from "react";
import Page from "../components/Page";

export default function Landing() {
  const [{ tab }, setState] = useState({ tab: "details" });

  return (
    <Page sx={{ height: "100vh" }}>
      <Typography variant="h4" mt={5} mb={0}>
        Yoga for Flat Abs
      </Typography>
      <Typography variant="subtitle1" fontWeight={300} color="grey.600">
        90 Days program
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box></Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Tabs
            value={tab}
            onChange={(_, tab) => setState((state) => ({ ...state, tab }))}
          >
            <Tab value="details" label="Details" />
            <Tab value="techniques" label="Techniques" />
          </Tabs>
          {(() => {
            switch (tab) {
              case "details":
                return (
                  <Fragment>
                    <Typography variant="body1" textAlign="justify" mb={4}>
                      Choose a quiet space so that you can do the session
                      uninterrupted. Make sure there is at least 2 hours gap
                      between a meal and the class. Put all other devices aside
                      and enjoy the session.
                    </Typography>
                  </Fragment>
                );

              case "techniques":
                return (
                  <Fragment>
                    <Typography variant="body1" textAlign="justify" mb={4}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Autem reiciendis, accusantium adipisci odit dicta aliquam
                      excepturi quis laboriosam in. Odit obcaecati fuga, nam
                      eveniet ea vitae incidunt alias dolorum nostrum.
                    </Typography>
                  </Fragment>
                );

              default:
                return null;
            }
          })()}

          {/*  */}
          <Typography color="primary.main" mb={3}>
            AED 99/-
          </Typography>

          <Stack spacing={2} direction="row">
            <Button variant="contained" disableElevation size="large">
              Join Now
            </Button>
            <Button variant="outlined" size="large">
              View Schedule
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Page>
  );
}
