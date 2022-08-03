import styled from "styled-components";

export const Container = styled.div`
  color: black;
  width: 100%;
  height: 100px;
  transition: all 0.3s;
  background-color: #b4b4b41f;
  position: absolute;
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
