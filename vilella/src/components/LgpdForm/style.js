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

  .mail {
    width: 100%;
    font-size: ${Theme.textSize.textMobileSm};
    font-weight: 500;
    color: ${Theme.colors.blue2};
    text-decoration: none;
    &:hover {
      background-color: ${Theme.colors.babyBlue};
      color: ${Theme.colors.blue1};
    }
  }


  @media (max-width: 420px) {
    .consent-label {
      font-size: .9rem;
      
    }
  }

`