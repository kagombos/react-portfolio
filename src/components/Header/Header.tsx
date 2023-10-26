import React, { FC } from 'react';
import HeaderButton from '../HeaderButton/HeaderButton';

interface HeaderProps { }

const Header: FC<HeaderProps> = () => (
  <div data-testid="Header" className="w-full flex justify-between border-b">
    <HeaderButton>
      Projects
    </HeaderButton>
    <HeaderButton>
      About
    </HeaderButton>
  </div>
);

export default Header;
