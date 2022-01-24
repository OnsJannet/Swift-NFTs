import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import LogoImg from '../../images/logo14.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo smooth to="/#home" onClick={closeMobileMenu}>
		<Logo src={LogoImg} /> 
</NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks smooth to="/#home" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/#mint" onClick={closeMobileMenu}>
                  Mint
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to="/#goals" onClick={closeMobileMenu}>
                  Goals
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks smooth to='/#FAQ' onClick={closeMobileMenu}>
                  FAQ
                </NavLinks>
              </NavItem>              
              <NavItemBtn>
                {button ? (
                  <NavBtnLink  href="https://discord.com/channels/935164442839224371/935164844854870096" rel="noopener noreferrer" target="_blank">
                    <Button primary>Join Discord</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink href="https://discord.com/channels/935164442839224371/935164844854870096">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      Join Discord
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
