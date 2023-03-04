import styled from "styled-components";

export const SearchBarStyles = styled.div`
    width: 40%;

  input {
    height: 40px;
    padding: 10px 40px;
    outline: none;    
    border: 2px solid transparent;
    background-color: #f8faf4;
    border-bottom: 2px solid #7ba507;
    ::placeholder{
        color: rgb(200, 200, 200);
    }
  }

  i {
    position: relative;
    left: 15px;
    bottom: 27px;
    z-index: 10;
    color: #7ba507;
  }

  @media only screen and (max-width: 768px)  {
    width: 100%;
    margin-bottom: 10px;

    input {
        width: 100%;
    }
 }
`