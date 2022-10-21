import MUIAppbar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { createStyles } from "@mui/material/styles";
import logo from "../assets/logo.png";

export default function AppBar() {
  return (
    <MUIAppbar elevation={0} sx={styles.appBar}>
      <Container sx={styles.container}>
        <img src={logo} height={45} alt="" />
        <Box flexGrow={1} />
        <Stack spacing={2}></Stack>
      </Container>
    </MUIAppbar>
  );
}

const styles = createStyles({
  appBar: {
    backgroundColor: "primary.light",
    height: 50,
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
}) as any;
