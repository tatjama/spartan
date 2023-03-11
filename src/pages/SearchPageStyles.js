import styled from 'styled-components'

export const SearchPageStyles = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  
  nav, header {
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
  }

  nav {    
    align-items: center;
    color: #21af6f;
  }

  header {
    width: 700px;
    margin: 10px auto;
    flex-wrap: wrap;
  }

  .selectContainer {
    width: 57%;
    display: flex;
    justify-content: space-between;
  }

  .error {
    color: red;
    line-height: 20px;
    height: 20px;
    width: 100%;
    font-size: 14px;
    text-align: center;
  }

  .listMovies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 95%;
    margin: 10px auto;
  }  

  .background {
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    z-index: 10;
    .close {
      width: 100%;
      margin-bottom: 20px;
      z-index: 15;
      text-align: right;      
      h1 {
        padding: 40px;
        color: #21af6f;
        cursor: pointer;
        :hover {
          color: red;
        }
      }
    }
  }
  .module {
    position: absolute;
    background-color: white;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 768px)  {
    header {
        width: 100%;
    }

    .selectContainer {
        width: 100%;
    }

    .module {
      width: 75%;
    }
 }


  @media only screen and (max-width: 450px)  {
    nav, header {
        padding: 10px 20px;
    }

    nav, .error {
        font-size: 12px;
    }
    
    .listMovies {
      flex-direction: column;    
    } 
      
    .background .close h1 {
      padding: 20px;
    }
 }
`