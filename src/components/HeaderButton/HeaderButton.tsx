import React, { FC } from 'react';

interface HeaderButtonProps {
   children: string
}

const HeaderButton: FC<HeaderButtonProps> = ({ children }) => (
 <button data-testid="HeaderButton" className="m-2 p-2 border rounded-md">
    { children }
 </button>
);

export default HeaderButton;
