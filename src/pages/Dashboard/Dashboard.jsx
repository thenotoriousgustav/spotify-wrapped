import styles from './Dashboard.module.css';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image-more';

import { useState, useEffect } from 'react';

import SpotifyWebApi from 'spotify-web-api-node';
import useAuth from '../../api/useAuth';

const spotifyApi = new SpotifyWebApi({
  clientId: 'a1f078686cd94162a55502ae43c8a245',
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    const callApi = async () => {
      try {
        const res = await spotifyApi.getMyTopTracks({ limit: 5 });
        console.log(res.body.items);
        setData(res.body.items);
      } catch (error) {
        console.log(error);
        if (error) throw error;
      }
    };
    callApi();
  }, [accessToken]);

  function shot() {
    domtoimage.toPng(document.getElementById('download')).then(function (blob) {
      saveAs(blob, 'my-node.png');
    });
  }

  return (
    <section style={{ backgroundColor: '#22c55e' }}>
      <div className={styles.container}>
        <div id='download' className={styles.wrapper}>
          {data.map((item, index) => (
            <div key={index} className={styles.wrapperList}>
              <h2>#{index + 1}</h2>
              <img
                src={item.album.images[0].url}
                alt={item.name}
                className='inline-block h-36 w-36 object-cover'
              />
              <div>
                <p style={{ fontSize: '1.25rem', fontWeight: 500 }}>
                  {item.name}
                </p>
                <p style={{ fontSize: '1rem', marginTop: '0.25rem' }}>
                  {item.artists[0].name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.button} onClick={shot}>
          Download
        </button>
      </div>
    </section>
  );
}
