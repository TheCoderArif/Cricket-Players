import profile from '../../assets/logo.png'
import { BsCoin } from "react-icons/bs";
import './Header.css'
const Header = () => {
    return (
        <div className=" flex items-center justify-between mt-8 h-18">

            <div className=" w-16 ">
                <img src={profile} alt="" />
            </div>
            <div className="buttons">
                <ul className='flex gap-10 '>
                    <li className='mt-2 btn-hover text-gray-600'>Home</li>
                    <li className='btn-hover mt-2 text-gray-600'>Fixture</li>
                    <li className='btn-hover mt-2 text-gray-600'>Teams</li>
                    <li className='btn-hover mt-2 text-gray-600'>Schedules</li>
                    <div className='coin-d flex items-center gap-2'>
                        <p className=''>Coin</p>
                        <div><BsCoin></BsCoin></div>

                    </div>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;