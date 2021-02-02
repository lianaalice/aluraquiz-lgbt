import styled from 'styled-components';

const AlternativesForm = styled.form`

  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &:focus {
      opacity: 1;
    } 
    &:first-child {
      margin-top: 15px;
    }
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
