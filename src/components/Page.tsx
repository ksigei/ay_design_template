import { styled } from "@mui/material/styles";
import { ComponentProps, ReactNode } from "react";
import floral from "../assets/floral.png";
import { APPBAR } from "../constants";

type Props = {
  children: ReactNode;
  disablePadding?: boolean;
} & ComponentProps<typeof Main>;

const Main = styled("main")(() => ({
  backgroundImage: `url(${floral})`,
  width: "100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right bottom",
  alignItems: "start",
  justifyContent: "start",
  display: "flex",
  flexDirection: "column",
}));

export default function Page({ children, disablePadding, ...props }: Props) {
  return (
    <Main
      sx={{
        ...props.sx,
        ...(!disablePadding && {
          paddingTop: `${APPBAR.height}px`,
        }),
      }}
    >
      {children}
    </Main>
  );
}
