import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #00000055;
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  font-weight: bold;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.primary};

  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .4s;
    &:hover,
    &:focus {
      opacity: .6;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Criado por
        <a href="https://www.linkedin.com/in/liana-alice/">
          <span> liana alice </span>
        </a>
        durante a
        <a href="https://www.alura.com.br/imersao-react-next-js">
          <span> Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
