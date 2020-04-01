import styled from "styled-components";

export const Container = styled.header`
  background-color: #e02042;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 24px;
    color: #fff;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin: 0 10px;

      a {
        text-decoration: none;
        color: #f5f5f5;
        font-size: 15px;
        font-weight: 600;
        text-transform: uppercase;
      }
    }
  }
`;
