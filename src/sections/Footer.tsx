import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { fonts } from "../constants";
import { fontWeights } from "../theme/typography";

export default function Footer() {
  return (
    <Paper
      sx={{
        backgroundColor: "primary.light",
        m: 0,
        borderRadius: 0,
      }}
    >
      <Container
        sx={{
          py: 4,
        }}
      >
        <Stack direction="row">
          <div style={{ flexGrow: 1 }}>
            <Typography
              fontWeight={fontWeights.avenir[400]}
              variant="h5"
              mb={1}
            >
              Let{"\u2019"}s talk
            </Typography>
            <Typography fontWeight={fontWeights.avenir[400]} variant="h4">
              Book an appointment?
            </Typography>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            {contactInfos.map(({ value, link, icon }) => (
              <Link
                key={value}
                href={link}
                mb={2}
                variant="body2"
                color="grey.800"
                sx={{ textDecoration: "none" }}
                alignItems="center"
                display="flex"
              >
                {value}
                <span style={{ width: 12 }} />
                {icon}
              </Link>
            ))}
          </Box>
        </Stack>
        <Divider flexItem sx={{ borderColor: "grey.800", mt: 2, mb: 1 }} />

        <Typography maxWidth={600} variant="body2" mt={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae
          facilisis lorem. Integer non pharetra mauris, non tincidunt metus.
          Aenean in lectus diam...
        </Typography>

        <Box height={135} />
      </Container>
      <Box display="flex" bgcolor="common.black" color="grey.50" py={3}>
        <Container>
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Typography fontSize={16}>
              &copy; Copyright - Artistic yoga
            </Typography>
            {Dot}
            <FooterLink href="#">Privacy policy</FooterLink>
            {Dot}
            <FooterLink href="#">Terms of use</FooterLink>
          </Stack>
        </Container>
      </Box>
    </Paper>
  );
}

const FooterLink = styled(Link)(({ theme: { palette } }) => ({
  color: palette.grey[200],
  fontFamily: fonts.avenir,
  fontWeight: 300,
  textDecorationColor: palette.grey[200],
}));

const contactInfos = [
  {
    link: "email",
    value: "someone@example.com",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.41658 0.333332H18.5833C19.4452 0.333332 20.2719 0.675742 20.8813 1.28524C21.4908 1.89473 21.8333 2.72138 21.8333 3.58333V14.4167C21.8333 15.2786 21.4908 16.1053 20.8813 16.7148C20.2719 17.3243 19.4452 17.6667 18.5833 17.6667H3.41658C2.55463 17.6667 1.72798 17.3243 1.11849 16.7148C0.508993 16.1053 0.166584 15.2786 0.166584 14.4167V3.58333C0.166584 2.72138 0.508993 1.89473 1.11849 1.28524C1.72798 0.675742 2.55463 0.333332 3.41658 0.333332ZM18.5833 2.5H3.41658C3.12927 2.5 2.85372 2.61414 2.65055 2.8173C2.44739 3.02046 2.33325 3.29601 2.33325 3.58333L10.9999 8.87L19.6666 3.58333C19.6666 3.29601 19.5524 3.02046 19.3493 2.8173C19.1461 2.61414 18.8706 2.5 18.5833 2.5ZM2.33325 14.4167C2.33325 14.704 2.44739 14.9795 2.65055 15.1827C2.85372 15.3859 3.12927 15.5 3.41658 15.5H18.5833C18.8706 15.5 19.1461 15.3859 19.3493 15.1827C19.5524 14.9795 19.6666 14.704 19.6666 14.4167V6.05333L11.5633 11.0042C11.3986 11.0992 11.2118 11.1493 11.0216 11.1493C10.8314 11.1493 10.6446 11.0992 10.4799 11.0042L2.33325 6.05333V14.4167Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    link: "link",
    value: "+91- 385 526 5060",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ opacity: 0.9 }}
      >
        <path d="M0 0H24V24H0V0Z" fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_143_5" transform="scale(0.0208333)" />
          </pattern>
          <image
            id="image0_143_5"
            width="48"
            height="48"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABWxJREFUaIG9mWlsVUUUx3/vVVRQ4bGobcD2SeISDVgbF4wbSCSGRA0hLhi0ESXWNaBEjYj6BT6gVKJGowYxRmOiVTQmYhO1boAoQkk1Ei2UuGJpKcXi0krrh3OHd2be3d579/WfTHp75iz/uW9mzpm5KZJBNXAlcDowDZgAHAeM8fr7gP3Ab8DXQCuwEfghofhFYQKwFNgKDBXZtgCLgJrhJJ4FngMGIsj9A/wBdMbQPQS85PkuG8YAy4EDPgS6gDXAncBpQBWQcuxPBM4BGoBXkMG5fvqBR8tBfgrwrU/AZmAmkC7S7+XAOz5+d5Hgr7GA/CnwAXBmUgGAk4G3nBh/AjeX6vgRx+nvwOxSnYagHuhwYi4p1tkyx9FmYFzpHCORJX9nW1yok/mOg7XAEclxjEQF8J7DYX5c4yzQqwyfLwPBuHhD8egBpkYZpIF2ZbSV4X3zLjLI1DV8viN/e7bwoFLuIHwrqwNakCT0E/BQ6Xx9UYNsHobXsiDFLFKzxJlzCx1d055IhHI+5qgYB4BKP6UXlNKbIc6mAYNK180R5RpEs4rxpNtZiUwFoxA0dVLY+/QXnu1j2IN4PFnuAJyn/Pcg6+MwbledTSFO5mGvkfGqzx3E9ISIa7Qo/0t1x+eqY0aIgyal55fmV6v+F0vnm4erlP/PjDCrhL9EONipdKucvinAdtW/MhHKNtLI9DExMmBn3bURDvTC1ViMXWYPUL7a/nUVpz6N7OcGn8R00q+eRwGNyBES5ABzDbC7NJ6B2KSe6wA+JTeiqBL5L6VrMuIIJRsETkqQrB8uUPGa007AqLfWpp5rvb8Dyi4FHJkAyTBojtVpYLT3Ty9wMMK4VT3PUs8fqufriucWC3uAf73n4yGXSXfGMJ5N7ufbqOQzlPxXcuuhXDDn6X6Av8mdQ6NwNPY2ppNVq5KXq7Az6ETthmY03TGNl5Mj2qLkNyh5H3B9iI9apNx4GinUCoWZNfvArm3GhxgZZLB/BZ2R31ZyU/q6i7re0RkCVhRAvlrZbQZ7Gz0lppP7lc1eYLInr0R2Kk2uAzmY1yLJrZP8ARRSxU7HmQGNStAQ00kFdtmwg9yBfyxyy+ZHUrdvyC8A4wyiQemvBrhFCZ6NOQCQt9mtbNvwtjUPNwI/BpDvIldquIOIuoFYp3TnAExSgr1EnDkdzMI+3LSTXwNdiNyltiLbXh9wm6OjB9EREVNfOEwywk1KeFkBAwDJDf9hv927A3QrgGN85FlyL2JPSKy5Ks4W3fGA6miOz/0wZgI/Y0+F7cClMWwz2DnktRDdj5TeQt0xFrkON51nF0RfkHWImNYK3IdUjqZsGeHp34t9S72P4DJ8qtLbj883hZVKocXtLABLkLUUtPscxP97wSCy8IPwrtJd46fgJqjIW7AQTARWkX9RG9S+As4K8XeT0u0m5IvODqVYG6RUAFLI+lgFbEAG1IUUfLuAZ4ArCP++kEUWtuH1cJDiZKUUtZUNF0ZhJ8zQglPXKK+WnVo0jkKOuH7Jzxe6EJtbbnYRyGBn3EPAtVFGusiaWE52EcgC27AX+V1RRnVKuS1AJ4Us7HLcuBncinwM1+TviWO4SBk8peRZz8E6ZA4anfeBU5NiDVwMfIxNvBv5+h8L+s6xETkpBVWSuq0Hri6SdAopBnVs075EDi6xMBL7viesteJ/IOlENoEFSP0zmnyMA84F7gBexk6apvUgs6EgXBRCeDeSbOYBJ3j6WeTA0htiZ+qVDq/5kXWJr8C5Mo+LjBdsCPm43IQUWWdE2FUj5+ENEeTCWgtyPC2KOOQOLzXIT7ytSD9VwPnAJUglOxJZ5Md6/b3IJtAOfO/FWY+8uJLwPxjAhOZzshpUAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    ),
  },
];

const Dot = (
  <svg
    width="5"
    height="5"
    viewBox="0 0 5 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
  </svg>
);
