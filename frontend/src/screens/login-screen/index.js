import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

export default function LoginScreen() {
  const styleCom = styles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [err, setErr] = useState({ email: false, password: false });

  const onSubmit = () => {
    if (!email) {
      handleErr("email", true);
      return;
    } else {
      handleErr("email", false);
    }
    if (!password) {
      handleErr("password", true);
      return;
    } else {
      handleErr("password", false);
    }
  };

  const handleErr = (key, value) => {
    setErr((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const handleOnChangeText = (e) => {
    const nameEle = e.target.name;
    const valueEle = e.target.value;
    if (nameEle === "email") {
      setEmail(valueEle);
    }
    if (nameEle === "password") {
      setPassword(valueEle);
    }
    if (nameEle === "checkbox") {
      setChecked(e.target.checked);
    }
  };

  return (
    <Grid container component="main" className={styleCom.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={styleCom.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={styleCom.paper}>
          <Avatar className={styleCom.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={styleCom.form}>
            <TextField
              error={err.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              type={"email"}
              onChange={(e) => handleOnChangeText(e)}
            />
            <TextField
              error={err.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => handleOnChangeText(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
              name="checkbox"
              value={checked}
              onChange={(e) => handleOnChangeText(e)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={styles.submit}
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/create-acc" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}