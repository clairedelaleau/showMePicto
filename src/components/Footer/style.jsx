import styled from 'styled-components';

const SHeader = styled.header`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;

  img {
    border: solid 2px black;
    border-radius: 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: auto;
    height: 200px;
  }
`;

export default SHeader;
