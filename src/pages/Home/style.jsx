import styled from 'styled-components';

const SHome = styled.section`
  font-weight: 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  .hello {
    img {
      border: solid 2px black;
      border-radius: 20%;
      height: 10vh;
      width: auto;
    }
  }
  .home {
    height: 110vh;
    width: auto;
  }
  .iNeed,
  .iMFeeling,
  .iSing {
    display: flex;
    flex-direction: wrap;
    justify-content: center;
    margin-top: 1rem;

    img {
      border: solid 3px black;
      border-radius: 20%;
      height: 35vh;
      width: auto;
    }
  }
`;
export default SHome;
