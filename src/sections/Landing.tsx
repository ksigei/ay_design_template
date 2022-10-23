import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { Fragment, useRef, useState } from "react";
// @ts-ignore
import abstract from "../assets/abstract.mp4";
import { fontWeights } from "../theme/typography";

const isVideoPlaying = (video: HTMLVideoElement) =>
  !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );

export default function Landing() {
  const [{ tab, playing }, setState] = useState({
    tab: "details",
    playing: false,
  });
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    if (!videoRef.current) return;
    const playing = isVideoPlaying(videoRef.current);
    videoRef.current[!playing ? "play" : "pause"]();
  };

  return (
    <Container>
      <Typography variant="h4" mt={5} mb={0}>
        Yoga for Flat Abs
      </Typography>
      <Typography variant="subtitle1" fontWeight={300} color="grey.600">
        90 Days program
      </Typography>

      <Grid container spacing={4} pt={1}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            pr: { md: 4 },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Video
              src={abstract}
              ref={videoRef}
              onPlay={() => setState((state) => ({ ...state, playing: true }))}
              onPause={() =>
                setState((state) => ({ ...state, playing: false }))
              }
            />
            <Box
              position="absolute"
              sx={{
                left: 0,
                right: 0,
                bottom: 20,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton size="small" disableRipple onClick={play}>
                {!playing ? (
                  <svg
                    width="30"
                    height="42"
                    viewBox="0 0 45 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.171875 64.2084V3.98015C0.171875 2.59189 0.811701 1.3163 1.83647 0.66132C2.86125 0.00633736 4.10497 0.0781083 5.07196 0.848027L42.8942 30.9622C43.7711 31.6603 44.2979 32.8355 44.2979 34.0943C44.2979 35.3531 43.7713 36.5283 42.8942 37.2264L5.07196 67.3406C3.00119 68.9896 0.171875 67.2382 0.171875 64.2084Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    height="45"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="512px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#f4f4f4"
                  >
                    <g>
                      <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6   C218.6,448,224,442.6,224,435.8z" />
                      <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1   C384,69.4,378.6,64,371.8,64z" />
                    </g>
                  </svg>
                )}
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Tabs
            value={tab}
            onChange={(_, tab) => setState((state) => ({ ...state, tab }))}
            sx={{ mb: 3 }}
          >
            <Tab value="details" label="Details" />
            <Tab value="techniques" label="Techniques" />
          </Tabs>
          {(() => {
            switch (tab) {
              case "details":
                return (
                  <Fragment>
                    <Typography variant="body1" mb={4}>
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
          <Typography
            color="primary.main"
            variant="subtitle1"
            mb={3}
            fontWeight={fontWeights.avenir[900]}
          >
            AED 99/-
          </Typography>

          <Stack spacing={2} direction="row">
            <GradientButton variant="contained" disableElevation size="large">
              Join Now
            </GradientButton>
            <Button variant="outlined" size="large">
              View Schedule
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

const GradientButton = styled(Button)(({ theme: { palette } }) => ({
  background: `linear-gradient(-125deg, ${palette.primary.main}, ${palette.secondary.main})`,
}));
const Video = styled("video")(() => ({
  borderRadius: 12,
  width: "100%",
}));
