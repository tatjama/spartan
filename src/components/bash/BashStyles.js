
import styled from 'styled-components';

export const BashStyles = styled.section`
  
  ol > li, pre {
    line-height: 1rem;
    font-size: 1rem;
    margin: 10px 20px;
  }
  pre {
    margin: 20px 0;
    padding: 20px;
    background-color: ivory;
    width: 600px;
    line-height: 1rem;
    font-size: 1rem;    
  }
  .buttons {
    padding: 20px 0;
    display: flex;
    gap: 50px;
  }
  .hidden {
    display: none;
  }

  @media screen and (max-width: 767px) {
    ol > li{
      line-height: 0.77rem;
      font-size: 0.77rem;
      margin: 0;
    }
    pre{
      padding: 10px;
      width: 340px;
      line-height: 0.6rem;
      font-size: 0.6rem;
    }
  }

  @media screen and (max-width: 400px) {
    ol > li {
      font-size: 0.67rem;
    }
    pre {
      width: 280px;
      font-size: 0.5rem;
    }
  }
  
`;
