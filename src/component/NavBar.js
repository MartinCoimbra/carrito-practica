import { Component } from "react";
import Logo from "./Logo"
import Carro from "./Carro"

const styles = {
  navbar: {
    height: "100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    padding:"0 50px",
    boxShadow:"0 2px 3px rgb(0,0,0,0.1)"
  },
};

export default class NavBar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro />
      </nav>
    );
  }
}
