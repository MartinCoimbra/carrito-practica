import { Component } from "react";
import Productos from "./component/productos.js";
import Layout from "./component/Layout.js";
import Title from "./component/title.js";

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
      <Layout>
        <Title />
        <Productos
          agregarAlcarrito={(arg) => console.log(arg)}
          productos={this.state.productos}
        />
      </Layout>
    );
  }
}
