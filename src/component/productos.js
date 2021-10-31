import { Component } from "react";
import Producto from "./producto";

export default class Productos extends Component {
  render() {
    /* los props que recibimos los guardamos aqui */
    const { productos, agregarAlcarrito } = this.props;

    return (
      <div>
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
