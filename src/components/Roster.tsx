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
        <th>Is it their birthday?</th>
      </tr>
      {[lebronJames, stephCurry].map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>
              <button
                type="button"
                style={{ width: "100%" }}
                onClick={() => athlete.wishHappyBirthday()}
              >
                Wish happy birthday 🎊
              </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
});

export default Roster;
