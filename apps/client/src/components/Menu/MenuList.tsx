import { PlaceType } from '../../types';
import { Categories } from './Categories';
import { useState } from 'react';
import { Place } from './Place';
import { Items } from './Items';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuList = ({ place, onOrder } : {place:PlaceType, onOrder:(item:any)=>void}) => {
  const [activeCategory, setActiveCategory] = useState(place?.categories[0]?.id);
  if(place?.categories?.length == 0){
    return <h4 className='text-center text-gray'>Please Add Menu Categories <br/> and menu items</h4>
  }

  const ChangeCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    setActiveCategory(id);
  }

  return (
    <>
      <Place place={place}/>
      <Categories active={activeCategory} onChange={ChangeCategory} categories={place?.categories}/>
      <Items categories={place?.categories} onOrder={onOrder}/>
    </>
  )
};

export default MenuList;