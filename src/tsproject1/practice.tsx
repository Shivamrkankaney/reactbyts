import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export function Practice() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h4">ReactJs</Typography>
        <Button color="inherit">home</Button>
        <Button color="inherit">view</Button>
        <Button color="inherit">about</Button>
        <Button color="inherit">contactus</Button>
        <Button color="inherit">email</Button>
      </Toolbar>
    </AppBar>
  );
}
