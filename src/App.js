import { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 1500, img: "/productos/arbeja.jpg" },
      { name: "Lechuga", price: 1500, img: "/productos/lechuga.jpg" },
    ],
  };
  render() {
    return (
      <>
        <p>Hola mundo</p>
        <p>Hola mundo</p> 
        <p>Hola mundo</p>
        <p>Hola mundo</p>
      </>
    );
  }
}
