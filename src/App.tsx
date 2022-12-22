import "./App.css";
import MoneyForm from "./components/MoneyForm";
import Roster from "./components/Roster";
import TeamInfo from "./components/TeamInfo";
import Athlete from "./store/athlete";
import { TeamStoreProvider } from "./store/teamStore";
// import Counter from "./components/Counter";
// import Todo from "./components/Todo";

const lebronJames = new Athlete("Lebron James", 37, 5);
const stephCurry = new Athlete("Steph Curry", 34, 4);

function getPlayersFromBackend(): Athlete[] {
  return [lebronJames, stephCurry];
}

function App() {
  const players = getPlayersFromBackend();
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter initialCount={5} /> */}
        {/* <Todo /> */}
        <TeamStoreProvider players={players}>
          <TeamInfo />
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
