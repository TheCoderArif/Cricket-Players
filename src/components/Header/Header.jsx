import profile from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";
import './Header.css'
const Header = ({freeCredit}) => {
    return (
        <div className=" flex items-center justify-between mt-8 h-18 stickyh">

            <div className=" w-16 ">
                <img src={profile} alt="" />
            </div>
            <div className="buttons">
                <ul className='flex gap-10 '>

                    <button className="text-gray-600 btn btn-ghost">Home</button>
                    <button className="btn btn-ghost text-gray-600">Fixture</button>
                    <button className="btn btn-ghost text-gray-600">Teams</button>
                    <button className="btn btn-ghost text-gray-600">Schedules</button>

                   
                    <div className='coin-d flex items-center gap-2'>
                        <p className=''> {freeCredit} Coin</p>
                        <div><BsCoin></BsCoin></div>

                    </div>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;