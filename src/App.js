import { Component } from "react";
import Productos from "./component/productos.js";

export default class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "./productosimg/tomate.jpg" },
      { name: "Arbejas", price: 1500, img: "./productosimg/arbejas.jpg" },
      { name: "Lechuga", price: 1500, img: "./productosimg/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <>
        <p>Hola mundos</p>
        <Productos
          agregarAlcarrito={(arg) => console.log(arg)}
          productos={this.state.productos}
        />
      </>
    );
  }
}
