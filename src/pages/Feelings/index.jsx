import axios from 'axios';
import { useEffect, useState } from 'react';
import SHome from './style';

export default function Feelings() {
  const [feelings, setFeelings] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/feelings').then(({ data }) => {
      setFeelings(data);
    });
  }, []);

  return (
    <>
      <SHome>
        <div className="thisFeeling">
          {feelings.map((feeling) => {
            return (
              <div className="feel">
                <h2>{feeling.name}</h2>
                <img
                  className="picFeeling"
                  src={feeling.picture}
                  alt={feeling.name}
                />
              </div>
            );
          })}
        </div>
      </SHome>
    </>
  );
}
