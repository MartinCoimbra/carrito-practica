import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
  Carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 18,
  },
};

export default class Carro extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert />
        </span>
        <button style={styles.Carro}>Carro</button>
      </div>
    );
  }
}
