import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { capitalCase } from "capital-case";
import schedule from "../assets/schedule.png";

const Schedule = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4">Schedule</Typography>

      <Grid container spacing={3} mt={2} justifyContent="space-between">
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center", alignItems: "end" }}
        >
          <Image alt="" src={schedule} />
        </Grid>

        <Grid item xs={12} md={5}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4">Day 1- Class</Typography>
            <Box display="flex" flexDirection="row">
              <IconButton sx={{ mr: 1 }}>{ChevronLeft}</IconButton>
              <IconButton>{ChevronRight}</IconButton>
            </Box>
          </Box>
          <Box
            mt={2}
            bgcolor="grey.400"
            height={{ xs: 280, position: "relative" }}
          >
            <Box position="absolute" bottom={30} right={0}>
              <TextField
                select
                variant="outlined"
                defaultValue={options[0]}
                SelectProps={{
                  IconComponent: SelectIconComponent,
                }}
                sx={{
                  ".MuiSelect-outlined": {
                    backgroundColor: "grey.200",
                  },
                }}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {capitalCase(option)}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>

          <Typography variant="body1" mt={2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>

          <Button
            variant="text"
            color="primary"
            component="div"
            disableRipple
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "fit-content",
              mt: 1,
            }}
          >
            <Typography variant="body1">Join Today.</Typography>
          </Button>
          <Box height={20} />
        </Grid>
      </Grid>
    </Container>
  );
};

const Image = styled("img")(({ theme: { breakpoints } }) => ({
  [breakpoints.down("md")]: {
    width: 400,
  },

  [breakpoints.up("md")]: {
    width: 450,
  },
}));

const options = ["week 1", "week 2", "week 3"];

const ChevronLeft = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.56036 16.0071C-0.106308 14.4675 -0.106302 10.6185 2.56036 9.07887L16.8104 0.851622C19.477 -0.687979 22.8104 1.23653 22.8104 4.31573V20.7702C22.8104 23.8494 19.477 25.7739 16.8104 24.2343L2.56036 16.0071Z"
      fill="#FE5266"
    />
  </svg>
);

const ChevronRight = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.8963 16.0071C23.563 14.4675 23.563 10.6185 20.8963 9.07887L6.6463 0.851622C3.97963 -0.687979 0.646301 1.23653 0.646301 4.31573V20.7702C0.646301 23.8494 3.97964 25.7739 6.6463 24.2343L20.8963 16.0071Z"
      fill="#FE5266"
    />
  </svg>
);

const SelectIconComponent = (props: any) => (
  <svg
    width="12"
    height="12"
    style={{
      marginTop: 3,
    }}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.56767 11.8953C7.86172 13.4725 5.62266 13.4725 4.9167 11.8953L1.07487 3.31188C0.482671 1.98878 1.45078 0.49481 2.90036 0.49481L10.584 0.49481C12.0336 0.49481 13.0017 1.98878 12.4095 3.31188L8.56767 11.8953Z"
      fill="#4D4D4D"
    />
  </svg>
);

export default Schedule;
