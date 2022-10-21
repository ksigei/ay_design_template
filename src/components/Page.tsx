import Container, { ContainerProps } from "@mui/material/Container";
import { ReactNode } from "react";
import floral from "../assets/floral.png";

type Props = {
  children: ReactNode;
} & ContainerProps;

export default function Page({ children, ...props }: Props) {
  return (
    <Container
      {...props}
      sx={{
        backgroundImage: `url(${floral})`,
        ...props.sx,
      }}
    >
      {children}
    </Container>
  );
}
