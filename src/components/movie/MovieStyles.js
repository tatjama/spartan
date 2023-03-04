import styled from 'styled-components'

export const MovieStyles = styled.section`
    width: 700px;
    height: 300px;
    padding: 20px 40px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    article {
      width: 50%;
      height: 100%;
      line-height: 25px;
      margin-bottom: 20px;
    }

    h1 {
      margin-bottom: 20px;
    }

    p {
      font-size: 14px;
    }

    span {
      font-weight: bold;
    }
    .imgContainer {
      width: 45%;
      height: 100%;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      i {
        font-size: 1000%;
        color: #40bc84;
      }
    }

    @media only screen and (max-width: 768px)  {    
      width: 100%;
      height: 200px;
      
        article {
          line-height: 14px;
        }     

        h1 {
          font-size: 14px;
        }

        p {
          font-size: 10px;
        }         
 }

    @media only screen and (max-width: 450px)  {    
        padding: 10px 20px;
        display: block;
        height: auto;
        .imgContainer, article {
          width: 100%;
        }
  }
`