import './Banner.css'
import banner from '../../assets/banner-main.png'
const Banner = ( {handleFreeCredit} ) => {
    return (
        <div className="banner h-5/6 flex flex-col items-center bg-black rounded-2xl">
            {/* <p>Banner</p> */}
            <img className='w-40 mb-3 mt-9 ' src={banner} alt="" />
            <h1 className=' text-2xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h2 className='text-gray-300 my-2'> Beyond Boundaries Beyound Limits </h2>
            <div className='button-border p-1 mb-8'>
            {/* <button onClick={handleFreeCredit} className=" FreeCredit bg-amber-300 m-2 p-2 rounded-md  ">Claim Free Credit</button> */}
            <button onClick={handleFreeCredit} className=" btn btn-warning w-xm">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;