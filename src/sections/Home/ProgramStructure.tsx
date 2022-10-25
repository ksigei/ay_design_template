import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Fragment } from "react";
import pieChart from "../../assets/pie-chart.png";

export default function ProgramStructure() {
  return (
    <Paper
      variant="elevation"
      elevation={0}
      sx={{
        bgcolor: "primary.light",
        width: "100%",
        py: 3,
        mt: 8,
        borderRadius: 3,
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "column",
              [breakpoints.up("md")]: {
                pb: 6,
              },
            })}
          >
            <Typography variant="h4" mb={2}>
              Structure of Program
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </Typography>
            <Box flexGrow={1} />

            <Box
              mt={{
                xs: 2,
                md: 4,
                display: "flex",
                flexDirection: "row",
                alignItems: "end",
              }}
            >
              <Typography variant="h1" color="primary.main">
                90
              </Typography>
              <Typography variant="h4" color="grey.900" mb={2} ml={2}>
                Days
              </Typography>
            </Box>
            <Box display="flex" color="grey.600">
              {structureDesc.map((desc, index) => (
                <Fragment key={desc}>
                  <Typography variant="h4" py={0.5}>
                    {desc}
                  </Typography>
                  {index !== structureDesc.length - 1 && (
                    <Divider
                      orientation="vertical"
                      variant="middle"
                      flexItem
                      sx={{ borderRightWidth: 2.5, mx: 1 }}
                    />
                  )}
                </Fragment>
              ))}
            </Box>
          </Grid>

          {/*  */}
          <Grid
            item
            xs={12}
            md={7.5}
            sx={({ breakpoints }) => ({
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              [breakpoints.down("md")]: {
                justifyContent: "center",
              },
            })}
          >
            <Image alt="" src={pieChart} />
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}

const Image = styled("img")(({ theme: { breakpoints } }) => ({
  [breakpoints.up("md")]: {
    width: 450,
  },
}));

const structureDesc = ["Yoga", "Recovery", "Rest", "Repeat"];
