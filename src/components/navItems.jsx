import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ href, text }) => (
  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
    <a href={href} className="flex items-center transition-colors hover:text-blue-500">
      {text}
      {text === 'Wishlist' && <FontAwesomeIcon icon={faHeart} className="ml-2" />}
    </a>
  </li>
);

export default NavItem;
