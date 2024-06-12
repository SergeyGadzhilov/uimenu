import { PlaceType } from '../../types';
import { Categories } from './Categories';
import { createContext, useState } from 'react';
import { Place } from './Place';
import { Items } from './Items';
import { ShoppingCart } from '../../ShoppingCart/core/ShoppingCart';

export const CartContext = createContext(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuList = ({ place, cart = null, onOrder=null, onRemove=null } :
  {
    place:PlaceType,
    cart: ShoppingCart,
    onOrder: (item:any) => void
    onRemove: (item: any) => void
  }
) => {
  const [activeCategory, setActiveCategory] = useState(place?.categories[0]?.id);
  if(place?.categories?.length == 0){
    return <h4 className='text-center text-gray'>Please Add Menu Categories <br/> and menu items</h4>
  }

  const ChangeCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    setActiveCategory(id);
  }

  return (
    <CartContext.Provider value={cart}>
      <Place place={place}/>
      <Categories active={activeCategory} onChange={ChangeCategory} categories={place?.categories}/>
      <Items categories={place?.categories} onOrder={onOrder} onRemove={onRemove}/>
    </CartContext.Provider>
  )
};

export default MenuList;