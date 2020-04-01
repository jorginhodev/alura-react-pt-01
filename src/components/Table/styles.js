import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const TableContent = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 50em;
  margin: 50px auto;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  thead {
    background: darkslateblue;
    color: #fff;

    th {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 10px;
    }
  }

  tbody {
    tr {
      &:hover {
        color: #e02041;
      }

      &:nth-child(odd) {
        background-color: #fff;
      }

      td {
        padding: 10px;
        text-align: center;
        cursor: pointer;

        button {
          background-color: transparent;
          border: none;
          color: #e02041;
          font-weight: bold;
        }
      }
    }
  }
`;
