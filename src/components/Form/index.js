import React, { useState } from "react";
import generateId from "../../utils/generateId";

import { FormContainer, FormContent } from "./styles";

export default function Form({ addAuthor }) {
  const [name, setName] = useState("");
  const [book, setBook] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit() {
    const data = {
      id: generateId(),
      name,
      book,
      price
    };

    addAuthor(data);

    setName("");
    setBook("");
    setPrice("");
  }

  return (
    <FormContainer>
      <FormContent>
        <h1>Adicionar novo livro:</h1>
        <input
          placeholder="Informe o nome do autor"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          placeholder="Informe o nome do livro"
          id="book"
          type="text"
          name="book"
          value={book}
          onChange={e => setBook(e.target.value)}
        />

        <input
          placeholder="Informe o preço"
          id="price"
          type="text"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button className="button" onClick={handleSubmit} type="button">
          Salvar
        </button>
      </FormContent>
    </FormContainer>
  );
}
