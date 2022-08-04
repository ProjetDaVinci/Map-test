import styled from "styled-components";

export const Container = styled.div`
  color: black;
  width: 100%;
  max-width: 300px;
  padding: 40px;
  border: 1px solid black;
  border-radius: 15px;
  background: white;
  & > h2 {
    text-align: center;
    margin: 0 0;
  }
`;

export const Input = styled.input`
  background-color: hsl(0, 0%, 100%);
  border-color: hsl(0, 0%, 80%);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  min-height: 39px;
`;

export const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  border: none;
  padding: 13px;
  border-radius: 6px;
  background: #ffabab;
  cursor: pointer;
`;
