import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import BtnSection from "./components/BtnSection/BtnSection";

function App() {
  const [freeCredit, setFreeCredit] = useState(0);

  const [isActive, setIsActive] = useState({
    isActive: true,
    status: "available"
  });


  const handleFreeCredit = () => {
    const clickedFreeCredit = freeCredit + 60000;
    setFreeCredit(clickedFreeCredit);
    // console.log("clicked");
  };

  const handleAS = status => {
    if (status == "available"){
      setIsActive({
        isActive: true,
        status: "available"
      })
    }
    else {
      setIsActive({
        isActive: false,
        status: "selected"
      })
    }
  }

  return (
    <>
    <div className="">

    
      <div className="px-26">
        <header>
          <Header freeCredit={freeCredit}></Header>
        </header>

        <section>
          <Banner handleFreeCredit={handleFreeCredit}></Banner>
        </section>

        <section>
          <BtnSection handleAS={handleAS} isActive={isActive}></BtnSection>
        </section>

        
      </div>
    </div>  
    </>
  );
}

export default App;
