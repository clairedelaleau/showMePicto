import { Link } from 'react-router-dom';
import pictos from 'assets/pictos.png';
import SHeader from './style';

export default function Header() {
  return (
    <SHeader>
      <Link to="/">
        <img className="iNeed" src={pictos} alt="Je retourne à l'accueil" />
      </Link>
    </SHeader>
  );
}
