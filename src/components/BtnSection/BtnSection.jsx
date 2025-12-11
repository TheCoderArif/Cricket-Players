import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const BtnSection = ({handleAS, isActive}) => {

    const availableClicked = () => {
        handleAS("available");
        // console.log(isActive);
    }

    const selectedClicked = () => {
        handleAS("selected");
        // console.log(isActive);

    }

    return (
        <div>

        <div className="flex justify-between mt-14 mb-10">
            <h1 className="text-xl font-bold">{isActive.isActive? "Available Players": "Selected Players"}</h1>
            <div>
                <button onClick={availableClicked} className={`${isActive.isActive? "btn btn-warning": "btn"}`}>Available</button>
                <button onClick={selectedClicked} className={`${isActive.isActive? "btn ": "btn btn-warning"}`}>Selected ()</button>
            
            </div>
        </div>

            {isActive.isActive? <Available></Available> : <Selected></Selected>}
            

        </div>
    );
};

export default BtnSection;