import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
`;

export const Sidebard = styled.div`
  position: absolute;
  z-index: 99999999;
  background-color: #fff;
  border-radius: 12px;
  overflow: overlay;
  width: 20vw;
  min-width: 220px;
  height: 91vh;
  right: 10px;
  top: 10px;
`;

export const Container = styled.div`
  position: relative;
  padding: 20px;
`;

export const Button = styled.button`
  z-index: 999999999;
  background-color: #fff;
  right: 20px;
  top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 12px;
  transition: all 0.2s;
  cursor: pointer;
  margin-right: 15px;
  &:hover {
    background-color: red;
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
`;

export const AlertText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: red;
  text-shadow: #9a7474 1px 0 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  margin-bottom: 10px;
`;
