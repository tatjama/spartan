import styled from "styled-components";

export const SelectStyles = styled.select`
    width: 170px;
    height: 40px;
    padding: 10px 40px;
    outline: none;    
    border: 2px solid transparent;
    background-color: #f8faf4;
    border-bottom: 2px solid #7ba507;
    ::placeholder {
        color: rgb(200, 200, 200);
    }  

    @media only screen and (max-width: 768px)  {
        width: 45%;
        padding: 10px 20px;
    }

    @media only screen and (max-width: 400px)  {
        width: 48%;
        padding: 10px 15px;
    }
`