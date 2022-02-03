import styled from 'styled-components';

const SNeeds = styled.section`
  background-color: black;
  /* color: white;
  font-weight: 40px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */

  .iNeed {
    height: auto;
    width: auto;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
  }

  .picNeed {
    background-color: white;
    margin-top: 1rem;
    margin-bottom: 2rem;
    border: solid 2px black;
    border-radius: 20%;
    height: 35vh;
    width: auto;
  }
`;
export default SNeeds;
