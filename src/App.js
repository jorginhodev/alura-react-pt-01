import React, { useState } from "react";

import Header from "./components/Header";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {
  const [authors, setAuthors] = useState([
    {
      id: 1,
      name: "Paulo",
      book: "React",
      price: 1000
    },
    {
      id: 2,
      name: "Daniel",
      book: "Java",
      price: 99
    },
    {
      id: 3,
      name: "Marcos",
      book: "Design",
      price: 150
    },
    {
      id: 4,
      name: "Bruno",
      book: "DevOps",
      price: 100
    }
  ]);

  function removeAuthor(id) {
    setAuthors(authors.filter(author => author.id !== id));
  }

  function addAuthor(author) {
    setAuthors([...authors, author]);
  }

  return (
    <>
      <Header />
      <Table authors={authors} removeAuthor={removeAuthor} />
      <Form addAuthor={addAuthor} />
    </>
  );
}

export default App;
