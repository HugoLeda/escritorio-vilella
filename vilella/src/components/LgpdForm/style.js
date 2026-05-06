import styled from "styled-components";
import Theme from "../../styles/theme";

export const Forms = styled.div `

  .Toastify__toast--success,
  .Toastify__toast--error {
    background-color: ${Theme.colors.lightGray};
    color: ${Theme.colors.gray2};
  }

  .Toastify__close-button>svg{
    fill: ${Theme.colors.gray2};
        
  }

  .Toastify__progress-bar{
    //background-color: ${Theme.colors.babyBlue};
  }

  .Toastify__toast--error {    
    color: ${Theme.colors.red2};
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
    gap: 1rem;
  }

  .form-fill {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-item {
    display: flex;
    flex-direction: column;
  }

  .consent-label {
    display: flex;    
    gap: .5rem;
  }

  label {
    display: block;
    text-align: left;
  }
  
  label.required::after {
    content: " *";
    color: ${Theme.colors.red2};
  }

  input::placeholder,
  textarea::placeholder {
    color: #ccc;
    margin:0;
  }

  input:not([type="checkbox"]),
  select,
  textarea {
    width: 100%;
    color: ${Theme.colors.gray1};
    border: 1px solid #ddd;
    padding: .5rem;
    border-radius: 6px;
    user-select: none;    
  }

  textarea {
    min-height: 100px;
    max-height: 200px;
  }

  .send {
    width: 100%;
    padding: .5rem 1rem;
    border-radius: 6px;
    border: 1px solid #0d2daa;
    background-color: #0d2daa;
    box-shadow: 0 2px 5px rgb(0,0,0,0.2);    
    
    color: ${Theme.colors.white};
    font-size: ${Theme.textSize.textMobileSm};
    font-weight: 400;    
    text-transform: uppercase;    
    text-decoration: none;        
    cursor: pointer;
    
    transition: ease-out all .2s;

    &:hover {
      border: 1px solid ${Theme.colors.babyBlue};
      color: ${Theme.colors.blue2};
      background-color: ${Theme.colors.babyBlue};
      span {
        font-weight: 400;
      }
      
    }
  }

  .send-items {
    display: flex; 
    justify-content: center;    
    align-items: center;
    gap: .5rem;
  }

  @media (max-width: 420px) {
    .consent-label {
      font-size: .9rem;
      
    }
  }

`