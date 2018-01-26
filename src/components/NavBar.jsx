import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';


const NavLeft = styled.nav`
  top: 0px;
  float: left;
`;

const Header = styled.header`
  width: 100%;
  background-color: white;
  border-bottom: 3px solid #DFDFDF;
  padding: 10px 100px;
  overflow: hidden;
`;

const NavRight = styled.nav`
  float: right;
  color: white;
`;

// TODO: due to issue https://github.com/styled-components/styled-components/issues/439,
// bgcolor prop triggers react warning now, need to fix
const NavItem = styled(Link)`
  margin-right: 20px;
  span {
    padding-left: 4px !important;
  }
  height: 100%;
`;

const NavIcon = styled.div`
  vertical-align: middle;
  padding-left: 16px;
`;

/**
 * NavBar renders row of nav-items of form { name, icon, link }
 * @param {navaItems,user,onLogoutClick} params
 */
const NavBar = ({ navItems, user, onLogoutClick }) => (
  <Header>
    <NavLeft>
      {
        navItems.map(
          (item, i) => (
            <NavItem key={i} to={item.link}>
              <FlatButton label={item.name} style={{color: 'inherit'}}>
                <NavIcon className="material-icons">{item.icon}</NavIcon>
              </FlatButton>
            </NavItem>
          ),
        )
      }
    </NavLeft>
    <NavRight>
      { user.username !== undefined &&
        <ul>
          <NavItem to="/"><FlatButton label={user.username} /></NavItem>
          <NavItem to="#" onClick={onLogoutClick}>
            <FlatButton><span className="fui-exit" /></FlatButton>
          </NavItem>
        </ul>
      }
    </NavRight>
  </Header>
);

NavBar.propTypes = {
  navItems: PropTypes.array.isRequired,
  user: PropTypes.shape({ username: PropTypes.string }).isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default NavBar;
