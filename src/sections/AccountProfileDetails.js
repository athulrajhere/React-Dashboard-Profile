import React from "react";
import {
  Box,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { user, states } from "../data/account-profile";
import { useCallback, useState } from "react";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
              fontWeight: 700,
              color: "var(--dark-100)",
            },
            "& label.MuiInputLabel-root": {
              fontWeight: 700,
              color: "var(--dark-100)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`.${outlinedInputClasses.notchedOutline}`]: {
              borderRadius: 8,
            },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
            "& .MuiOutlinedInput-input": {
              fontSize: 14,
              fontWeight: 400,
              color: "var(--gray-100)",
            },
          },
        },
      },
    },
  });

const AccountProfileDetails = () => {
    const userProfile = user;
  const outerTheme = useTheme();
  const [values, setValues] = useState(userProfile);
  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Box
        sx={{
          width: "70%",
          display: "grid",
          paddingTop: 8,
          marginLeft: 3,
        }}
      >
        <ThemeProvider theme={customTheme(outerTheme)}>
          <Grid container spacing={3}>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                label="First name"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                label="Middle name"
                name="middlwName"
                onChange={handleChange}
                value={values.middleName}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Last name"
                InputLabelProps={{ shrink: true }}
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Phone Number"
                InputLabelProps={{ shrink: true }}
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                label="Office Desk Number"
                InputLabelProps={{ shrink: true }}
                name="deskNumber"
                onChange={handleChange}
                type="number"
                value={values.deskNumber}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                label="Location"
                name="location"
                onChange={handleChange}
                value={values.location}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
                label="Work Type"
                name="workType"
                onChange={handleChange}
                value={values.workType}
              />
            </Grid>
            <Grid xs={3} md={4}>
              <TextField
                fullWidth
                label="Delegation Type"
                size="small"
                InputLabelProps={{ shrink: true }}
                name="delegationType"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid xs={6} md={4}>
              <TextField
                fullWidth
                label="Delegation Type"
                name="delegationType"
                size="small"
                InputLabelProps={{ shrink: true }}
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={values.state}
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Box>
    </form>
  );
};

export default AccountProfileDetails;
