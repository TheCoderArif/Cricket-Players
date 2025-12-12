import { useEffect, useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";

const Available = ({handleChoosePlayer}) => {
  const [availablePlayers, setAvailablePlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setAvailablePlayers(data));
  }, []);
  return (
    <div className="mb-30">
      {/* <h1>Available Players</h1> */}

      <div className=" grid  grid-cols-3 gap-10">
        {
        availablePlayers.map((player) => (
          <AvailablePlayers handleChoosePlayer={handleChoosePlayer} player={player} key={player.id}></AvailablePlayers>))
        }
      </div>
    </div>
  );
};

export default Available;
