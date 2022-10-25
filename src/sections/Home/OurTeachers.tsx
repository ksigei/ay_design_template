import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import user from "../../assets/user.png";
import { fonts } from "../../constants";

const OurTeachers = () => {
  const [{ activeTeacherIndex }, setState] = useState({
    activeTeacherIndex: 2,
  });

  const teacher = teachers[activeTeacherIndex];

  return (
    <Container sx={{ mt: 5, py: 4 }}>
      <Typography variant="h4" mb={3}>
        Our Teachers
      </Typography>
      <Stack direction="row" spacing={2}>
        <Box minWidth={{ xs: 200, md: 350 }}>
          <List sx={{ fontFamily: `${fonts.avenir} !important` }}>
            {teachers.map((teacher, index) => {
              const active = index === activeTeacherIndex;
              return (
                <ListItem disableGutters key={`${teacher}-${index}`}>
                  <ListItemIcon sx={{ m: 0, p: 0, minWidth: 20 }}>
                    {active ? dot : <div style={{ width: 14 }} />}
                  </ListItemIcon>
                  <ListItemButton
                    onClick={() =>
                      setState((state) => ({
                        ...state,
                        activeTeacherIndex: index,
                      }))
                    }
                    sx={{
                      ...(!active
                        ? {
                            fontSize: 13,
                            color: "grey.700",
                          }
                        : {
                            color: "primary.main",
                          }),
                    }}
                  >
                    {teacher}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
        <Box display="flex">
          <Box>
            <UserImage src={user} alt="" />
            <Typography variant="h5" component="p" textAlign="center" mt={2}>
              {teacher}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Typography variant="body2">
            {desc.replaceAll("%name", teacher)}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

const desc = `%name started his journey in yoga at the age of 16. He was chosen by his master Dr. Bharat Thakur from a meditation workshop and has worked with him closely for many years to become one of the most senior teachers at Bharat Thakur Artistic Yoga. Combining his love of fitness, breathwork, functional training, and his deep knowledge of the human anatomy and yogic knowhow, he is committed to maximizing on the human potential by strengthening and opening up the body so that the mind naturally falls into a deep state of relaxation and meditation. He has taught yoga to people from all walks of life including athletes, celebrities and several top corporate organizations`;
const teachers = [
  "Ashrei Mitra",
  "Rahul",
  "Ashrei Mitra",
  "Ashray",
  "Ashish",
  "Zora",
];

const dot = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="8" cy="7.95129" rx="8" ry="7.95129" fill="#F64C3B" />
  </svg>
);

const UserImage = styled("img")(({ theme: { breakpoints, palette } }) => ({
  display: "block",
  //   background: palette.grey[50],
  [breakpoints.up("xs")]: {
    height: 250,
  },
}));

export default OurTeachers;
