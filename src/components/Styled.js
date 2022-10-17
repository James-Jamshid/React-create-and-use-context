import styled from "styled-components";
export const Container = styled.div`
  border: 1px solid black;
  background: whitesmoke;
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: yellowgreen;
  padding: 10px 20px;
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100px;

  input {
    width: 250px;
    height: 30px;
    background-color: lightgrey;
    border-radius: 12px;
    padding-left: 20px;
    font-size: 14px;
  }
  button {
    width: 100px;
    height: 30px;
    border-radius: 8px;
    background-color: yellowgreen;
    font-size: 14px;
    :hover {
      background-color: darkgreen;
      color: white;
      cursor: pointer;
    }
  }
  .input {
    display: flex;
    gap: 20px;
  }
`;
