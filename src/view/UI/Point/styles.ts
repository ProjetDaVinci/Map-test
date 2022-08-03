import styled from "styled-components";

export const Container = styled.div`
  color: black;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #dadada;
  transition: all 0.3s;
  margin-bottom: 10px;

  & > p,
  h2 {
    margin: 12px 0;
  }
  &:hover {
    background-color: #b4b4b41f;
    border-radius: 12px;
  }
`;

export const Title = styled.h2`
  color: black;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flew-wrap: no-wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flew-wrap: no-wrap;
`;
