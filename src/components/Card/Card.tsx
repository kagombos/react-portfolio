import React, { FC } from 'react';


interface CardProps {
  title?: string,
  image?: string,
  desc?: string,
  expanded?: boolean
}

const Card: FC<CardProps> = (props) => (
  <div data-testid="Card" className={`border rounded-md ${props.expanded ? 'w-full' : 'w-40'}`}>
    <div className="p-1">
      { props.title ?? "Card Title" }
    </div>
    <img
      className="w-full border-t"
      src={ props.image ?? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1200px-SMPTE_Color_Bars.svg.png" } 
    />
    { 
      props.desc && 
      <div className="border-t p-1">
        { props.desc }
      </div> 
    }
  </div>
);

export default Card;
