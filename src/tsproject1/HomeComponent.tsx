import { Expand, Margin } from "@mui/icons-material";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Tab,
  MenuList,
  MenuItem,
  Button,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { MainComponent } from "./MainComponent";

const pages = ["Home", "Offering", "Pricing", "Resources"];

export function HomeComponent() {
  const [open, setOpen] = React.useState(true);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
setOpen(false);
  };
function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);}}
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
<div>
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography style={{ display: "flex" , alignItems:'center'}}>
            {" "}
            <div>
              <p>carbonized</p>
            </div>
            <div style={{ display: "flex", marginLeft: "200px" }}>
              {pages.map((page: any) => (
                <p style={{ paddingLeft: "30px", marginTop:'23px' }}>{page}</p>
              ))}
              <p style={{ marginLeft: "30px" }}>

                  <Button
                    ref={anchorRef}
 onClick={handleToggle}
                    style={{color:'white', marginTop:'0px'}} >
                    Dashboard
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    placement="bottom-start"
                    transition >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",}}>
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>Profile</MenuItem>
                              <MenuItem onClick={handleClose}>
                                My account
                              </MenuItem>
                              <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>

              </p>
            </div>
            <div style={{ display: "flex", marginLeft: "350px" }}>
              <p>Login</p>
              <p style={{ marginLeft: "10px" }}>
                <button>SignIn</button>
              </p>
            </div>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <div>
      <MainComponent/>
    </div>
    </div>
  );
}
