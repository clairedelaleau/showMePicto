import axios from 'axios';
import { useEffect, useState } from 'react';
import SNeeds from './style';

export default function Needs() {
  const [needs, setNeeds] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/needs').then(({ data }) => {
      setNeeds(data);
    });
  }, []);

  return (
    <>
      <SNeeds>
        <div className="iNeed">
          {needs.map((need) => {
            return (
              <div className="need">
                <h2>{need.name}</h2>
                <img className="picNeed" src={need.picture} alt={need.name} />
              </div>
            );
          })}
        </div>
      </SNeeds>
    </>
  );
}
