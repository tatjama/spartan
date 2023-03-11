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
        line-height: 1rem;
        font-size: 1rem;
    }   
    
    @media screen and (max-width: 767px) {
        li {
            margin: 20px;
            font-size: 1rem;
            line-height: 1.5rem;
        }
        p {
            line-height: 0.77rem;
            font-size: 0.77rem; 
        }
    }

    @media screen and (max-width: 400px) {
        padding: 20px 10px;
        p {
            font-size: 0.67rem;
        }        
    }
`;