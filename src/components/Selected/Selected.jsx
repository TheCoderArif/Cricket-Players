import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Selected = ({selectedPlayers}) => {
    // console.log(selectedPlayers)
    return (
        <div>
            {
                selectedPlayers.map(player => <SelectedPlayers key={player.id} player={player}></SelectedPlayers>)
            }
        </div>
    );
};

export default Selected;