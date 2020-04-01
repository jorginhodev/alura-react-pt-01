import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 400 14px Roboto, sans-serif;
  background: #f0f0f5;
  -webkit-font-smoothing: antialiased;
}

input,
button,
textarea {
  font: 400 16px Roboto, sans-serif;
}

button {
  cursor: pointer;
}

form input {
  width: 100%;
  height: 40px;
  color: #333333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin-top: 10px;
}

.button {
  width: 100%;
  height: 40px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 40px;
  filter: filter 0.3s;

  &:hover {
    filter: brightness(90%);
  }
}
`;
