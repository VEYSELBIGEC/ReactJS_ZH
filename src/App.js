import logo from "./logo.svg";
import "./App.css";

import HelloWorld from "./components/01-hello-world/01-hello-world";
import Jsx1 from "./components/03-jsx/jsx1";
import Jsx2 from "./components/03-jsx/jsx2";
import Jsx3 from "./components/03-jsx/jsx3";
import Jsx4 from "./components/03-jsx/jsx4";
import Jsx5 from "./components/03-jsx/jsx5";
import JsxPractise from "./components/03-jsx/jsx-practise";
import Style1 from "./components/04-styles/style1";
import Style2 from "./components/04-styles/style2";
import Style3 from "./components/04-styles/style3";
import Clock1 from "./components/05-clock1/clock1";
import Greetings from "./components/06-props/greetings";
import Clock2 from "./components/07-clock2/clock2";

function App() {
  return (
    <div className="App">
      {/* 
      <HelloWorld/>
      <Jsx1/>
      <Jsx2/>
      <Jsx3/>
      <Jsx4/>
      <Jsx5/>
      <JsxPractise/>
      <Style1/>
      <Style2/>
      <Style3/>
      <Clock1 />
      <Greetings/>
       */}
       
       <Clock2 textColor="white" bgColor="red"/>
      
   
    </div>
  );
}

export default App;
