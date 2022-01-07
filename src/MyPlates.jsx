import { useSelector } from "react-redux";
import  plate4 from './imgs/plate__french-fries.png'
import QuantityPlates from './QuantityPlates'

import './scss/myPlate.scss'

const MyPlates = () => {
  const plates = useSelector((state) => state.plates );
  
  return(
    <>
    {
      plates.map((plate) => {
        return(
          <>
          <div className="myPlate" key={plate.id}>
          <div className="myPlate__item">
          <img className="myPlate__item__img" src={plate4} alt="" />
          <div className="myPlate__item__quantity">{plate.quantity}</div>
        </div>
        <div className="myPlate__item">
          <h4 className="myPlate__item__name">{plate.name}</h4>
          <span className="myPlate__item__price">{plate.price}</span>
          <QuantityPlates name={plate.name} quantity={plate.quantity} price={plate.price} />
        </div>
      </div> 
      </>
        )
      })
    }
    </>
    )
}

export default MyPlates