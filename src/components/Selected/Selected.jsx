import Available from "../Available/Available";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Selected = ({setIsActive, selectedPlayers, handleRemovePlayer}) => {
    // console.log(selectedPlayers)
    const setByPass = () => {
        setIsActive({
    isActive: true,
    status: "available"
  })
    }
    return (
        <div className="mb-30">
            {
                selectedPlayers.map(player => <SelectedPlayers handleRemovePlayer={handleRemovePlayer} key={player.id} player={player}></SelectedPlayers>)
            }
            <button onClick={setByPass}  className="btn btn-warning">Add more player</button>
        </div>
    );
};

export default Selected;