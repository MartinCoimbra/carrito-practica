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
    carroVisible: false,
  };

  agregarAlcarrito = (producto) => {
    const { carro } = this.state;
    /* Si esta el producto dentro del carro */
    if (carro.find((x) => x.name === producto.name)) {
      /* Lo buscamos para saber a quien agregarle 1 */
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      /* no hacemos concat porque estamos devolviendo todo (es un ternario) */
      return this.setState({
        carro: newCarro,
      });
    }
    /* concat es para agregar, lo mismo seria con "push"" */
    /* Esto va a pasar si no esta el producto  adentro del carro todavia */
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    /* prevenimos que abra el listado si no tiene productos añadido  */
    /* si no tenemos elementos en el carro no hagas nada, corta la funcion */
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ carroVisible: !this.state.carroVisible });
  };

  borrarProducto = (nombredelproducto) => {
    const carroNew = this.state.carro.filter(
      (x) => x.name !== nombredelproducto
    );
    this.setState({
      carro: carroNew,
    });
    if (this.state.carro.length === 1) {
      this.setState({ carroVisible: false });
    }
  };

  render() {
    const { carroVisible } = this.state;
    return (
      <div>
        <NavBar
          carro={this.state.carro}
          carroVisible={carroVisible}
          mostrarCarro={this.mostrarCarro}
          borrarProducto={this.borrarProducto}
        />
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
