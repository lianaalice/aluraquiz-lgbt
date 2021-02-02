import styled from 'styled-components';

const QuizBackground = styled.div`
  width: 100%;
  background-size: auto;
  background-repeat: repeat;
  background-position: top ;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      background-size: contain;
      
      background-position: center;
      background-image:
        linear-gradient(to top, transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 280px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
