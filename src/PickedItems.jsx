import  plate1 from './imgs/plate__bacon-eggs.png'
import  plate2 from './imgs/plate__chicken-salad.png'
import  plate3 from './imgs/plate__fish-sticks-fries.png'
import  plate4 from './imgs/plate__french-fries.png'
import  plate5 from './imgs/plate__ravioli.png'
import  plate6 from './imgs/plate__salmon-vegetables.png'
import  plate7 from './imgs/plate__spaghetti-meat-sauce.png'
import  plate8 from './imgs/plate__tortellini.png'
import CardPlate from './CardPlate'

import './scss/pickedItems.scss'

const PickedItems = () => {
  return(
    <>
    <div className='plates'>
    <h2 className='title'>To Go Menu</h2>
      <CardPlate name="Bacon with eggs" price='50' img={plate1}/>
      <CardPlate name="Chicken with salad" price='4.50' img={plate2}/>
      <CardPlate name="Fish with sticks and fries" price='4.50' img={plate3}/>
      <CardPlate name="French Fries with Ketchup" price='4.50' img={plate4} />
      <CardPlate name="Ravioli" price='4.50' img={plate5}/>
      <CardPlate name="Salmon and Vegetables" price='4.50' img={plate6}/>
      <CardPlate name="Spaghetti with Meat Sauce" price='4.50' img={plate7}/>
      <CardPlate name="Tortellini" price='4.50' img={plate8}/>
    </div>
    </>
    )
}

export default PickedItems