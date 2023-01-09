import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/01-hello-world/01-hello-world';
import Jsx1 from './components/03-jsx/jsx1';
import Jsx2 from './components/03-jsx/jsx2';
import Jsx3 from './components/03-jsx/jsx3';
import Jsx4 from './components/03-jsx/jsx4';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Jsx1/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
    </div>
  );
}

export default App;
