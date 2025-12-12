import { CgProfile } from "react-icons/cg";
import { FaFlag } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";

const AvailablePlayers = ({ player, handleChoosePlayer }) => {
  const { name, img, region, playing_type, hand,  price } = player;
  return (
    <div>
      <div className="border border-gray-200 card bg-base-400 w-86 shadow-sm">
        <figure className="px-4 pt-6 ">
          <img
            src={img}
            alt={name}
            className="rounded-xl h-50"
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title"> <CgProfile></CgProfile>{name}</h2>
          <div className="flex justify-between border-b-1 pb-2 border-gray-300">
            <div className="flex gap-2 items-center text-gray-500 ">
                <FaFlag></FaFlag> {region}
            </div>
            <div>
                <button className="btn btn-soft text-gray-600">{playing_type}</button>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-7">Rating</h2>
          </div>
          <div className="flex justify-between w-full">
            <div className="font-bold text-xm">{hand}</div >
            <div className=" text-xm text-gray-500">{hand}</div >
          </div>

          <div className="flex justify-between w-full">
            <div className="font-bold text-xm flex items-center">Price: <BiDollar></BiDollar>{price}</div >
            <div className=" text-xm text-gray-500">
                <button onClick={() => handleChoosePlayer(player)} className="h-8 btn btn-outline">Choose player</button>
            </div >
          </div>

          
          
          
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
