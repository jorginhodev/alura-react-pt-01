import React from "react";

import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <h1>Casa do Código</h1>

      <ul>
        <li>
          <a href="/">Autores</a>
        </li>
        <li>
          <a href="/">Livros</a>
        </li>
        <li>
          <a href="/">Sobre</a>
        </li>
      </ul>
    </Container>
  );
}
