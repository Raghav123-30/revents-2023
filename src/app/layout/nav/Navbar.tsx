import { Menu, Container, MenuItem, Button } from "semantic-ui-react";

const Navbar = () => {
  return (
    <Menu inverted={true} fixed="top">
      <Container>
        <MenuItem header>
          <img src="/logo.png" alt="logo"></img>
          Re-vents
        </MenuItem>
        <MenuItem name="Events"></MenuItem>
        <MenuItem>
          <Button
            floated="right"
            positive={true}
            inverted={true}
            content="Create event"
          ></Button>
        </MenuItem>
        <MenuItem position="right">
          <Button basic inverted content="Login"></Button>
          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          ></Button>
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default Navbar;
