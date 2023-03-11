import styled from 'styled-components';

export const PaginationStyles = styled.p`
    width: 100%;
    text-align: center;
    margin: 10px;
    
    .pagination-placeholder {
        width: 100%;
        height: 40px;
    }
    .page {
      padding: 10px;
      color: #40bc84;
      cursor: pointer;
      :hover {
        color: black;
      }      
    }
    
    .page.active {
        color: red;
      }
    .page.disable {
        cursor: default;
    }

    @media only screen and (max-width: 450px)  {
        font-size: 12px;
 }
`

