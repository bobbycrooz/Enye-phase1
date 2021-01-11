import {useEffect} from 'react'
import './global.css'
import Sidepane from './components/sidepane'
import Mainpane from  './components/mainpane'


const App = (props) => {



  return(
    <div className="main">
      <Sidepane />
      <Mainpane />
    </div>

  )
}
export default App;
