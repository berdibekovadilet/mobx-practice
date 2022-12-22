import { observer } from "mobx-react-lite";
import TradeForm from "./TradeForm";
import { useTeamStore } from "../store/teamStore";

const Roster = observer(() => {
  const { players } = useTeamStore();
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
      {players.map((athlete) => {
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
