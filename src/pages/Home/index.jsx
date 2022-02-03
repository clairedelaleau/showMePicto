import iMFeeling from 'assets/iMFeeling.png';
import iNeed from 'assets/iNeed.png';
import iSing from 'assets/iSing.png';
import SHeader from 'components/Header/style';
import { Link } from 'react-router-dom';
import SHome from './style';

export default function Home() {
  return (
    <>
      <SHeader />
      <SHome>
        <div className="home">
          <div className="iNeed">
            <Link to="/needs">
              <img src={iNeed} alt="je veux quelque chose" />
            </Link>
          </div>

          <div className="iMFeeling">
            <Link to="/feelings">
              <img src={iMFeeling} alt="comment ça va ?" />
            </Link>
          </div>

          <div className="iSing">
            <Link to="/songs">
              <img src={iSing} alt="je choisis une chanson" />
            </Link>
          </div>
        </div>
      </SHome>
    </>
  );
}
