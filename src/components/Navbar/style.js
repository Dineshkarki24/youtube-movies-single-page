import styled from "styled-components";

export const NavWrapper = styled.div`
  background-color: #fdb73b;
  font-family: "Poppins", sans-serif;
  form {
    background-color: #fff;
    margin-left: 40px;
    height: 40px;
    padding: 0 20px;
    border-radius: 100px;
    input {
      border: none;
    }
    input:focus {
      box-shadow: none;
    }
  }
  .nav-link {
    color: #000 !important;
  }
`;
