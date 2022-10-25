import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import user from "../../assets/account.png";
import { APPBAR } from "../../constants";
import { fontWeights } from "../../theme/typography";
import AccountInfo from "./AccountInfo";

export default function MyAccount() {
  return (
    <Container sx={{ pt: `${APPBAR.height}px`, mt: 4 }}>
      <Box display="flex" justifyContent="center">
        <Typography
          color="grey.800"
          variant="h4"
          fontWeight={fontWeights.avenir[400]}
          mr={1}
        >
          MY
        </Typography>
        <Typography
          color="primary.main"
          fontWeight={fontWeights.avenir[900]}
          variant="h4"
        >
          ACCOUNT
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" mt={5}>
        <div style={{ position: "relative" }}>
          <Avatar src={user} sx={{ height: 200, width: 200 }} />
          <EditButton>
            <EditIcon />
          </EditButton>
        </div>
      </Box>
      {/*  */}
      <AccountInfo />
    </Container>
  );
}

const EditIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.1477 5.50224C27.1487 5.37876 27.1156 5.25636 27.0503 5.14204C26.9851 5.02773 26.8889 4.92376 26.7674 4.83609L21.2067 0.857922C21.0842 0.770965 20.9388 0.702167 20.7791 0.655476C20.6193 0.608785 20.4482 0.585117 20.2756 0.585831C20.103 0.585117 19.9319 0.608785 19.7721 0.655476C19.6123 0.702167 19.467 0.770965 19.3444 0.857922L1.29856 13.7682C1.17701 13.8559 1.08085 13.9598 1.01558 14.0741C0.950319 14.1885 0.917237 14.3109 0.918235 14.4343V18.4125C0.918235 18.6614 1.05641 18.9 1.30236 19.076C1.5483 19.2519 1.88188 19.3508 2.22971 19.3508H7.79035C7.97386 19.3579 8.15742 19.3374 8.32913 19.2905C8.50084 19.2436 8.65685 19.1714 8.78707 19.0787L23.0428 8.82363L26.7674 6.21531C26.8871 6.12437 26.9846 6.01971 27.0559 5.90569C27.0685 5.8309 27.0685 5.7553 27.0559 5.68051C27.062 5.63683 27.062 5.59283 27.0559 5.54915L27.1477 5.50224ZM7.25265 17.4743H3.54118V14.819L16.5641 5.50224L20.2756 8.15748L7.25265 17.4743ZM22.1247 6.83455L18.4133 4.17931L20.2756 2.85639L23.9739 5.50224L22.1247 6.83455Z"
      fill="white"
    />
  </svg>
);

const EditButton = styled(IconButton)(({ theme: { palette } }) => {
  const size = 63;
  return {
    background: palette.grey[700],
    height: size,
    width: size,
    position: "absolute",
    right: size * 0.05,
    bottom: 0,
    "&:hover": {
      background: palette.grey[600],
    },
  };
});
