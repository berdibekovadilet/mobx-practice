import { observer } from "mobx-react-lite";
import Athlete from "../store/athlete";

const lebronJames = new Athlete("Lebron James", 30);
const stephCurry = new Athlete("Steph Curry", 34);

const Roster = observer(() => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {[lebronJames, stephCurry].map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
          </tr>
        );
      })}
    </table>
  );
});

export default Roster;
