import styled from "styled-components";

export const HomePageStyles = styled.ol`
    
    padding: 40px 20px;

    li {
        margin: 40px;
        font-size: 1.5rem;
        line-height: 2.5rem;
    }
    h3 {
        margin: 20px 0;
    }
    p {
        margin: 20px 0;
    }   
    
    @media screen and (max-width: 767px) {
        li {
            margin: 20px;
            font-size: 1rem;
            line-height: 1.5rem;
        }
    }

    @media screen and (max-width: 400px) {
        padding: 20px 10px;
        
    }
`;