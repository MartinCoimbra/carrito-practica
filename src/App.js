import { Component } from "react";
import Productos from "./component/productos.js";
import Layout from "./component/Layout.js";
import Title from "./component/title.js";
import NavBar from "./component/NavBar.js";

export default class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "./productosimg/tomate.jpg" },
      { name: "Arbejas", price: 1500, img: "./productosimg/arbejas.jpg" },
      { name: "Lechuga", price: 1500, img: "./productosimg/lechuga.jpg" },
    ],
    carro: [],
  };
  agregarAlcarrito = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({
        carro: newCarro,
      });
    }
    /* concat es para agregar, lo mismo seria con "push"" */
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };
  render() {
    console.log(this.state.carro);
    return (
      <div>
        <NavBar />
        <Layout>
          <Title />
          <Productos
            agregarAlcarrito={this.agregarAlcarrito}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}
