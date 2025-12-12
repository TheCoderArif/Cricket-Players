import { useState } from "react";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const BtnSection = ({ handleAS, isActive, freeCredit, setFreeCredit }) => {
  const availableClicked = () => {
    handleAS("available");
    // console.log(isActive);
  };

  const selectedClicked = () => {
    handleAS("selected");
    // console.log(isActive);
  };

  const [choosePlayer, setChoosePlayer] = useState([]);


  const handleRemovePlayer = data => {

    const afterRemove = choosePlayer.filter(player => player.id !== data.id)
    const newCredit = freeCredit + data.price ;
    setFreeCredit(newCredit);
    setChoosePlayer(afterRemove);
  }





  const handleChoosePlayer = (player) => {
    if (freeCredit > player.price){

      if(choosePlayer.length < 6){

        const isAvailable = choosePlayer.some(data => data.id === player.id)
        if(isAvailable){

          alert("You have already choosen this player.")

        }
        else{

          const newPlayerList = [...choosePlayer, player];
          setChoosePlayer(newPlayerList);
          const remainingCredit = freeCredit - player.price;
          setFreeCredit(remainingCredit)
          // console.log(newPlayerList)
          alert(`Congratulations. You've added ${player.name}`)

        }

      }
      else{

        alert("You can't add more than six players. Remove player from selected section to add more.")

      }

    }
    else{

      alert('Not enough coins. Get more credits and try again.')
      

    }
  }





  return (
    <div>
      <div className="flex justify-between mt-14 mb-10">
        <h1 className="text-xl font-bold">
          {isActive.isActive ? "Available Players" : "Selected Players"}
        </h1>
        <div>
          <button
            onClick={availableClicked}
            className={`${isActive.isActive ? "btn btn-warning" : "btn"}`}
          >
            Available
          </button>
          <button
            onClick={selectedClicked}
            className={`${isActive.isActive ? "btn " : "btn btn-warning"}`}
          >
            Selected ({choosePlayer.length} / 6 )
          </button>
        </div>
      </div>

      {isActive.isActive ? (
        <Available handleChoosePlayer={handleChoosePlayer}></Available>
      ) : (
        <Selected handleRemovePlayer={handleRemovePlayer} handleAS={handleAS} selectedPlayers={choosePlayer}></Selected>
      )}
    </div>
  );
};

export default BtnSection;
