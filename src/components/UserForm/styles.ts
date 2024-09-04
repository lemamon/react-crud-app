import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 50px;
  width: 100%;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 600px;
  padding-right: 20px;

  & > div {
    margin-bottom: 16px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-top: 8px;
  padding: 8px;
  width: 98%;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #1976d2;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Error = styled.span`
  color: #ff5f54;
  font-size: 14px;
`;
