import "./App.css";
// import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter initialCount={5} /> */}
        <Todo />
      </header>
    </div>
  );
}

export default App;
