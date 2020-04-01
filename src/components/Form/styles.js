import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 80px auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContent = styled.form`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
  }
`;
