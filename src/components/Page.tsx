import Container, { ContainerProps } from "@mui/material/Container";
import { ReactNode } from "react";
import floral from "../assets/floral.png";
import { APPBAR } from "../constants";

type Props = {
  children: ReactNode;
  disablePadding?: boolean;
} & ContainerProps;

export default function Page({ children, disablePadding, ...props }: Props) {
  return (
    <Container
      component={"div"}
      sx={{
        backgroundImage: `url(${floral})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        alignItems: "start",
        justifyContent: "start",
        display: "flex",
        flexDirection: "column",
        ...props.sx,
        ...(!disablePadding && {
          paddingTop: `${APPBAR.height}px`,
        }),
      }}
    >
      {children}
    </Container>
  );
}
