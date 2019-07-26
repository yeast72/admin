import React, { Component } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"

const PaperStyled = styled(Paper)`
  margin-top: 20px;
  padding: 30px 20px;
`;

const Form = styled.form`
  width: 100%;
  margin-top: 10px;
`;

export default class LoginPage extends Component {
  render() {
    return (
      <PaperStyled>
        <Typography variant="h5">Sign in</Typography>
        <Form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField 
          variant="outlined" 
          margin="normal" requried fullWidth name="password" label="Password" type="password" id="password" 
          autoComplete="current-password" />
          <Button variant="contained" color="primary">Login</Button>

        </Form>
      </PaperStyled>
    );
  }
}
