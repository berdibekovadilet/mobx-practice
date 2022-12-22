import { observer } from "mobx-react-lite";
import Athlete from "../store/athlete";
import TradeForm from "./TradeForm";

const lebronJames = new Athlete("Lebron James", 30, 30000);
const stephCurry = new Athlete("Steph Curry", 34, 50000);

const Roster = observer(() => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Teams</th>
          <th>Trade Form</th>
          <th>Birthday?</th>
          <th>Salary</th>
        </tr>
      </tbody>
      {[lebronJames, stephCurry].map((athlete) => {
        return (
          <tbody key={athlete.name}>
            <tr key={athlete.name}>
              <td>{athlete.name}</td>
              <td>{athlete.age}</td>
              <td>{athlete.teamHistory}</td>
              <td>
                <TradeForm athlete={athlete} />
              </td>
              <td>
                <button
                  type="button"
                  style={{ width: "100%" }}
                  onClick={() => athlete.wishHappyBirthday()}
                >
                  Birthday 🎊
                </button>
              </td>
              <td>{athlete.salary}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
});

export default Roster;
