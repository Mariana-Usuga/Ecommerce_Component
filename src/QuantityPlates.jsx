import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { deletePlateAction, addPlateAction } from './context/actionCreater'
import { useDispatch } from "react-redux";

const QuantityPlate = ({ name, quantity, price}) => {
  const dispatch = useDispatch()

  const deletePlate = (plate, quantity) => {
    dispatch(deletePlateAction({ plate, quantity }))
  }

  const increase = () => {
    dispatch(addPlateAction({ name }))
  } 

  return(
  <div className="quantity">
    <div className="quantity__number">
      <span className="quantity__number__lineLeft" 
      onClick={() => {deletePlate(name, quantity)}}>
        <AiOutlineLeft />
        </span>
      <span className="quantity__number__quantity">{quantity}</span>
      <span className="quantity__number__lineRight"
      onClick={increase}
      ><AiOutlineRight /></span>
  </div>
  <div className="quantity__price">
    <span>{price * quantity}</span>
  </div>
  </div>
    )
}

export default QuantityPlate