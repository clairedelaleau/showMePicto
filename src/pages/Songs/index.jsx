import axios from 'axios';
import { useEffect, useState } from 'react';
import SSongs from './style';

export default function Songs() {
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/songs').then(({ data }) => {
      setSongs(data);
    });
  }, []);

  return (
    <>
      <SSongs>
        <div className="thisSong">
          {songs.map((song) => {
            return (
              <div className="iSing">
                <h2>{song.name}</h2>
                <a
                  href={song.link}
                  target="_blank"
                  alt="lien vers ta chanson"
                  rel="noreferrer"
                >
                  <img className="picSong" src={song.picture} alt={song.name} />
                </a>
              </div>
            );
          })}
        </div>
      </SSongs>
    </>
  );
}
