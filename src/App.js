import logo from "./logo.svg";
import "./App.css";

const fruits = [
  { name: "apple", color: "red", count: 30 },
  { name: "banana", color: "yellow", count: 15 },
  { name: "orange", color: "orange", count: 13 },
  { name: "grape", color: "purple", count: 20 },
];

function App() {
  return (
    <div className="App">
      {fruits.map(function (fruit, key) {
        return (
          <FruitTest key={key} customCopm={<p style={{ color: fruit.color, fontSize: fruit.count }}>{fruit.name}</p>}>
            
          </FruitTest>
        );
      })}
    </div>
  );
}
function MyComp({  color, size, children }) {
  return <div><p style={{ color: color, fontSize: size }}>{children}</p><hr/></div>;
}


 function FruitTest({customCopm}) {
  return <div style={{backgroundColor:'gray'}}>
   {customCopm}
  </div>;
 }
 export default App;