import React from 'react'

import { Link, Nav, Ul } from './styles'

import { BsFillChatLeftDotsFill, BsFillPersonFill } from 'react-icons/bs'
import { FaToolbox } from 'react-icons/fa'
import { MdLocalOffer } from 'react-icons/md'

export const NavBar = () => {
  const SIZE = '23px'

  return (
    <Nav>
      <Ul>
        <li>
          <Link to='/'>
            <BsFillPersonFill size={SIZE} />
          </Link>
        </li>
        <li>
          <Link to='/mywork'>
            <FaToolbox size={SIZE} />
          </Link>
        </li>
        <li>
          <Link to='/services'>
            <MdLocalOffer size={SIZE} />
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <BsFillChatLeftDotsFill size={SIZE} />
          </Link>
        </li>
      </Ul>
    </Nav>
  )
}
