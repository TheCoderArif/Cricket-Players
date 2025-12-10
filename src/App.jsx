
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'

function App() {

  const [freeCredit, setFreeCredit] = useState(0);


  const handleFreeCredit = () => {
    const clickedFreeCredit = freeCredit + 60000 ;
    setFreeCredit(clickedFreeCredit);
    console.log("clicked");
  }

  return (
    <>
      <div className='px-10'>

        <header>
          <Header freeCredit={freeCredit}></Header>
        </header>

        <section>
          <Banner handleFreeCredit = {handleFreeCredit}></Banner>
        </section>
        
      </div>
    </>
  )
}

export default App
