import mailMe from 'assets/mailMe.png';
import law from 'assets/law.png';
import SFooter from './style';

export default function Footer() {
  return (
    <SFooter>
      <img className="mailMe" src={mailMe} alt="Envoyer un mail à Claire" />
      <img className="legalMentions" src={law} alt="mentions légales" />
    </SFooter>
  );
}
