import React, { FC } from 'react';
import Card from '../Card/Card';


interface GithubCardProps {
  item: any,
  expanded?: boolean
}

const GithubCard: FC<GithubCardProps> = (props) => (
  <div data-testid="GithubCard">
    <Card 
      title={ props.item.name }
      expanded={ props.expanded }
    ></Card>
  </div>
);

export default GithubCard;
