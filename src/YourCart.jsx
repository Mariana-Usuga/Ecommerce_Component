import MyPlates from "./MyPlates";
import { useSelector } from "react-redux";

import './scss/yourCart.scss'

const YourCart = () => {
  const plates = useSelector((state) => state.plates );
  return(
    <>
     <div className="yourCart">
     <h2 className="yourCart__title">Your Cart</h2>
     {plates.length === 0 ?
     <h2>Su cesta esta vacia</h2> : 
    <div>
      <MyPlates />
    </div>
    }
     </div>
    </> 
    )
}

export default YourCart