import { Component } from "react";
import Productos from "./component/productos.js";

export default class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "./productos/tomate.jpg" },
      { name: "Arbejas", price: 1500, img: "./productos/arbeja.jpg" },
      { name: "Lechuga", price: 1500, img: "./productos/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <>
        <p>Hola mundos</p>
        <Productos
          agregarAlcarrito={() => console.log("Pendiente")}
          productos={this.state.productos}
        />
      </>
    );
  }
}
