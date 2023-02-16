import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';

const code = new URLSearchParams(window.location.search).get('code');

export default function App() {
  return code ? <Dashboard code={code} /> : <Home />;
}
