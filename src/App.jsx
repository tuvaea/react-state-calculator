import "./App.css"
import PanelNumbers from "./PanelNumbers"
import PanelOperators from "./PanelOperators";
import PanelAnswer from "./PanelAnswer";
import { useCalculator } from './UseCalculator';

function App() {
  const calculator = useCalculator(); 

  return (
    <div className="calculator">
      <PanelNumbers panel = 'left' calculator = { calculator }/>
      <PanelOperators calculator = { calculator }/>
      <PanelNumbers panel = 'right' calculator = { calculator }/>
      <PanelAnswer calculator = { calculator }/>
    </div>
  )
}

export default App
