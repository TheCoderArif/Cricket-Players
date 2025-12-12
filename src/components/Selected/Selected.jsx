import Available from "../Available/Available";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Selected = ({selectedPlayers, handleRemovePlayer}) => {
    // console.log(selectedPlayers)
    
    return (
        <div>
            {
                selectedPlayers.map(player => <SelectedPlayers handleRemovePlayer={handleRemovePlayer} key={player.id} player={player}></SelectedPlayers>)
            }
            <button  className="btn btn-warning">Add more player</button>
        </div>
    );
};

export default Selected;