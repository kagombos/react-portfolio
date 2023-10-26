import React, { FC } from 'react';
import GithubCard from '../GithubCard/GithubCard';


interface OverlayProps {
  item?: any,
  position?: DOMRect,
  expanded?: boolean,

  closeCard?: () => void
}

const Overlay: FC<OverlayProps> = (props) => {

  const expandedStyle = {

  }

  let collapsedStyle = {
    top: (props.position?.top ?? 0),
    left: (props.position?.left ?? 0)
  }

  return (
    <div data-testid="Overlay" className={ `fixed w-full h-full bg-white/20 overflow-y-hidden ${props.expanded ? '' : 'pointer-events-none'}` }>
      {
        props.item ? 
        <div style={ props.expanded ? expandedStyle : collapsedStyle } onClick={props.closeCard} className="absolute">
          <GithubCard item = {props.item} expanded = { props.expanded }></GithubCard>
        </div>
        : ''
      }
    </div>
  )
};


export default Overlay;
