import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetallesCarro from "./detallesCarro";
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
    const { carro, carroVisible, mostrarCarro, borrarProducto } = this.props;
    const cantidad = carro.reduce((acc, element) => acc + element.cantidad, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 && <BubbleAlert value={cantidad} />}
        </span>
        <button onClick={mostrarCarro} style={styles.Carro}>
          Carro
        </button>
        {carroVisible && (
          <DetallesCarro carro={carro} borrarProducto={borrarProducto} />
        )}
      </div>
    );
  }
}
