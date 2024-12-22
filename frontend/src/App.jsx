import { useState } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Side from './Components/Side';
import Bulkmail from './Components/Bulkmail';
import News from './Components/News';
import Footer from './Components/Footer';
import Review from './Components/Review';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Navbar />
      <Main />
      <Side />
      <Bulkmail />
      <News />
      <Review />
      <Footer />


    </>
  )
}

export default App
