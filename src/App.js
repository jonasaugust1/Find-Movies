import {BrowserRouter, Link} from 'react-router-dom'
import { AppRoutes } from './Routes';
import './styles/global.css'

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <nav>
          <Link to='/'>Filmes</Link>
          <Link to='/series'>Series</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
