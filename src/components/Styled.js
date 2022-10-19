import styled from "styled-components";
export const Container = styled.div`
  border: 1px solid black;
  padding: 10px;
`;
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: yellowgreen;
  padding: 10px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;
export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 10px;
  h4 {
    color: red;
    font-size: small;
    padding: 10px;
  }
  input {
    width: 200px;
    height: 30px;
    background-color: lightgrey;
    border-radius: 8px;
    padding-left: 5px;
  }
  .input {
    display: flex;
    gap: 20px;
  }
`;
export const RootContainer = styled.div`
  height: 900px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 100px;
    height: 30px;
    border-radius: 8px;
    background-color: #fa4299;
    font-size: 14px;
  }
  button:hover {
    background-color: #a445b2;
    color: white;
    cursor: pointer;
  }
`;
export const RootWrapper = styled.div`
  width: 600px;
  height: 700px;
  box-shadow: 5px 5px 12px 6px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  border-radius: 16px;
  background-color: white;
`;
