import Box from "@mui/material/Box";
import MUILink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { capitalCase } from "change-case";
import React, { Fragment, useRef, useState } from "react";
import { fonts } from "../../constants";
import { fontWeights } from "../../theme/typography";

export default function AccountInfo() {
  const [{ profile }, setState] = useState({ profile: defaultProfile });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      profile: {
        ...state.profile,
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <Fragment>
      <Stack spacing={3} marginBottom={6}>
        <Field name="name" value={profile.name} onChange={handleChange} />

        <Field name="phone" value={profile.phone} onChange={handleChange} />

        <Field name="email" value={profile.email} onChange={handleChange} />

        <Field
          password
          name="password"
          value={profile.password}
          onChange={handleChange}
        />

        <Box display="flex" flexDirection="row">
          <Box flexGrow={1}>
            <Typography variant="body1">
              1 Year membership for 750 AED
            </Typography>
            <Typography variant="body1" color="grey.600">
              Started on: 13-11-2020 <br />
              Valid till: 13-11-2021
            </Typography>
            <Link
              href="#"
              onClick={(e) => e.preventDefault()}
              color="grey.700"
              variant="body1"
            >
              Subscription history
            </Link>
          </Box>
          <Link href="#" onClick={(e) => e.preventDefault()}>
            Change plan{" "}
          </Link>
        </Box>

        <div>
          <Label>Referral Details</Label>
          <Typography variant="body1" color="grey.600">
            Share your referral code and earn cash credits for each friend that
            subscribes. (1 Friend = 5 USD/16 DHRM). Also, your friend receives a
            5 USD credit.
          </Typography>
        </div>

        <Box>
          <Box width="100%" display="flex" flexDirection="row">
            <Typography color="grey.700">Referral Code:{referral}</Typography>
            <div style={{ flexGrow: 1 }} />
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(referral);
              }}
            >
              Copy
            </Link>
          </Box>
          <Link
            href="#"
            onClick={(e) => e.preventDefault()}
            color="grey.700"
            variant="body2"
          >
            Referral History{" "}
          </Link>
        </Box>
      </Stack>
    </Fragment>
  );
}

const Field = ({
  name,
  value,
  password = false,
  ...props
}: {
  name: keyof typeof defaultProfile;
  value: any;
  password?: boolean;
} & TextFieldProps) => {
  const [readOnly, setReadOnly] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleEdit = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (readOnly) inputRef.current?.click();
    setReadOnly((readOnly) => !readOnly);
  };
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      <Box flexGrow={1}>
        <Label>{capitalCase(name)}</Label>
        <StyledTextField
          InputProps={{ inputRef, disableUnderline: readOnly }}
          name={name}
          disabled={readOnly}
          value={value}
          fullWidth
          size="small"
          variant="standard"
          type={password ? "password" : "text"}
          hidden={password && readOnly}
          {...props}
        />
      </Box>
      <Link href="#" onClick={toggleEdit}>
        {!readOnly ? "Save" : "Edit"}
      </Link>
    </Stack>
  );
};

const StyledTextField = styled(TextField)(
  ({ disabled, theme: { palette } }) => {
    return {
      fontFamily: fonts.avenir,
      maxWidth: 450,
      ...(disabled && {
        userSelect: "none",
        pointerEvents: "none",
        ".Mui-disabled input": {
          color: `${palette.grey[800]} !important`,
          WebkitTextFillColor: `${palette.grey[800]} !important`,
        },
      }),
    };
  }
);

const Label = styled(Typography)(({ theme: { palette } }) => ({
  fontFamily: fonts.roboto,
  fontWeight: fontWeights.roboto[700],
  color: palette.grey[600],
}));

const Link = styled(MUILink)(() => ({
  fontFamily: `${fonts.avenir} !important`,
  fontWeight: fontWeights.avenir[300],
}));

const defaultProfile = {
  name: "Arjun G N",
  email: "arjun@gmail.com",
  phone: "9826369270",
  password: "",
};
const referral = "HSAGBWBDAV";
