import React, { useState } from "react";
import Athlete from "../store/athlete";
import { observer } from "mobx-react-lite";

type Props = {
  athlete: Athlete;
};

const TradeForm = observer(({ athlete }: Props) => {
  const [teamName, setTeamName] = useState<string>("");
  return (
    <>
      <input
        type="text"
        placeholder="Team name..."
        className="teamInput"
        onChange={(e) => setTeamName(e.target.value)}
      />
      <span>
        <button type="button" onClick={() => athlete.tradePlayer(teamName)}>
          Trade
        </button>
      </span>
    </>
  );
});

export default TradeForm;
