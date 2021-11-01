import { Component } from "react";
import Producto from "./producto";

const styles = {
    productos:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
}

export default class Productos extends Component {
  render() {
    /* los props que recibimos los guardamos aqui */
    const { productos, agregarAlcarrito } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((producto) => {
          return (
            <Producto
              agregarAlcarrito={agregarAlcarrito}
              key={producto.name}
              producto={producto}
            />
          );
        })}
      </div>
    );
  }
}
