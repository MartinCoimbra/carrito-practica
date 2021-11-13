import { Component } from "react";
import { isElementOfType } from "react-dom/test-utils";
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
    const { carro } = this.props;
    const cantidad = carro.reduce((acc, element) => acc + element.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 && <BubbleAlert value={cantidad} />}
        </span>
        <button style={styles.Carro}>Carro</button>
      </div>
    );
  }
}
