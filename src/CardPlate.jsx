import { useDispatch } from "react-redux";
import { addPlateAction } from "./context/actionCreater";

const CardPlate = ({ name, price, img }) => {
  const dispatch = useDispatch()

  const addPlate = () => {
    const plate = {
      id: new Date().getTime().toString(),
      name: name,
      price: price,
    }
      dispatch(addPlateAction( plate ))
  }

  return(
    <div className="plate">
      <div className="plate__item">
        <img src={img} alt="plate" className="plate__item__img"/>
      </div>
      <div className="plate__item">
        <h3 className="plate__item__title">{name}</h3>
        <span className="plate__item__price">{`$${price}`}</span>
        <button className="plate__item__btn" type="button"
        onClick={addPlate}
        >Add to Cart</button>
      </div>
    </div>
    )
}

export default CardPlate