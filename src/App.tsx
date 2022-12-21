import "./App.css";
import Roster from "./components/Roster";
// import Counter from "./components/Counter";
// import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter initialCount={5} /> */}
        {/* <Todo /> */}
        <Roster />
      </header>
    </div>
  );
}

export default App;
