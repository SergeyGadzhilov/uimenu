import styled from 'styled-components';
import MenuItem from './MenuItem';
import { PlaceType } from '../../types';
import { Categories } from './Categories';
import { useState } from 'react';

interface FontInterface{
    font:string
}

const Place = styled.div`
  text-align: center;
  img {
    border-radius: 5px;
    margin-bottom: 20px;
  }
`;

const Container = styled.div<FontInterface>`
  b, p {
    ${({ font }) => font && `font-family: ${font};` }
  }
`;

function PlaceImage({place = null}) {
  return (
    <>
      {place?.image && <img src={place?.image} width={100} height={100} alt={place?.name}/>}
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MenuList = ({ place, shoppingCart = {}, onOrder, font,color }:{place:PlaceType,shoppingCart?:any,onOrder:(item:any)=>void,font?:string,color?:string}) => {
  const [activeCategory, setActiveCategory] = useState(place?.categories[0]?.id);
  if(place?.categories?.length == 0){
    return <h4 className='text-center text-gray'>Please Add Menu Categories <br/> and menu items</h4>
  }

  const ChangeCategory = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
    setActiveCategory(id);
  }

  return (
    <Container font={font!}>
      <Place>
        <PlaceImage place={place}/>
        <h3 style={{color:color}}><b>{place?.name}</b></h3>
      </Place>
      <Categories active={activeCategory} onChange={ChangeCategory} place={place}/>

      {place?.categories
        ?.filter(
          (category) => category?.items?.length
        )
        .map((category) => (
          <div id={category?.id} key={category?.id} className="mt-5">
            <h4 className="mb-4" style={{color}}>
              <b>{category?.name}</b>
            </h4>
            {category?.items
              .map((item) => (
                <MenuItem
                  key={item.id}
                  item={{
                    ...item,
                    quantity: shoppingCart[item.id!]?.quantity,
                  }} 
                  onOrder={onOrder}
                  color={color}
                />
              ))
            }
          </div>
        ))
      }
    </Container>
  )
};

export default MenuList;