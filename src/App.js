import logo from './logo.svg';
import './App.css';
import Text from "./components/Text";
import {useState, useRef} from "react";
import exportAsImage from './util';

function App() {
  const [text, setText] = useState("Nombre");
  const exportRef = useRef();
  

  return (
    <div className="root">
      <div className="input"> 
        <label htmlFor="text">Nombre</label>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => exportAsImage(exportRef.current, "pacto.png")}>Descargar</button>
      </div>
      <div className="App" ref={exportRef}>
        <Text word={text}/>
      </div>
    </div>
  );
}

export default App;
