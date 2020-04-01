import React from "react";
import formatPrice from "../../utils/formatPrice";

import { TableContainer, TableContent } from "./styles";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>Autores</th>
        <th>Livros</th>
        <th>Preço</th>
        <th>Remover</th>
      </tr>
    </thead>
  );
};

const TableBody = ({ authors, removeAuthor }) => {
  return (
    <tbody>
      {authors.map(author => (
        <tr key={author.id}>
          <td>{author.name}</td>
          <td>{author.book}</td>
          <td>{formatPrice(author.price)}</td>
          <td>
            <button onClick={() => removeAuthor(author.id)}>&#215;</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default function Table({ authors, removeAuthor }) {
  return (
    <TableContainer>
      <TableContent>
        <TableHead />
        <TableBody authors={authors} removeAuthor={removeAuthor} />
      </TableContent>
    </TableContainer>
  );
}
