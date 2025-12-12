import { MdDeleteForever } from "react-icons/md";
import './SelectedPlayers.css'

const SelectedPlayers = ({ player, handleRemovePlayer }) => {
  const {img,  name , playing_type } = player;
  return (
    <div>
    <div className="flex justify-between bg-amber-50 items-center my-card">

    <div className="flex items-center">
        <div className="">
            <img className="w-10 h-10 rounded-full" src={img} alt={name} />
        </div>
        <div className="ml-3">
            <h1>{name}</h1>
            <h1>{playing_type}</h1>
        </div>
    </div>

    <div>
        <button onClick={() => handleRemovePlayer(player)}  className="btn btn-sm"><MdDeleteForever></MdDeleteForever></button>
    </div>

    </div>
    
    </div>
  );
};

export default SelectedPlayers;
