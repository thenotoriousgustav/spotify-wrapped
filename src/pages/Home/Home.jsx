import spotify from '../../assets/icons/spotify.svg';
import styles from './Home.module.css';

// export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
// const CLIENT_ID = 'a1f078686cd94162a55502ae43c8a245';
// const REDIRECT_URI = 'http://localhost:3000/';

// // const scopes = ['user-read-email', 'user-top-read', 'user-read-private'];

// // export const AUTH_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${scopes.join(
// //   '%20'
// // )}&response_type=token&show_dialog=true`;

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=a1f078686cd94162a55502ae43c8a245&response_type=code&redirect_uri=https://spify.vercel.app/&scope=streaming%20user-read-email%20user-top-read%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export default function Home() {
  return (
    <section style={{ backgroundColor: '#7c3aed' }}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <img src={spotify} alt='Spotify' />
          </div>
          <div className={styles.textWrapper}>
            <h1>Your 2023 Wrapped</h1>
            <p>
              Take a look at how you listened. Because no one else listened
              exactly like you.
            </p>
          </div>

          <div className={styles.btnWrapper}>
            <a href={AUTH_URL} className='w-64 rounded-3xl bg-green-500 py-3'>
              Connect with Spotify
            </a>
            <button>Not on spotify yet?</button>
          </div>
        </div>
      </div>
    </section>
  );
}
