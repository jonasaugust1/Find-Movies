import {Form} from './components/Form'
import { Movies } from './components/Movies';
import './styles/global.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <Movies />
      </header>
    </div>
  );
}

export default App;
