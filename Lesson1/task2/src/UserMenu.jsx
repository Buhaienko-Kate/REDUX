import React from 'react';
import { DataContext } from './data-context.js';

class UserMenu extends React.Component {
  render() {
    // console.log(this.context);
    return (
      <div className="menu">
        <span className="menu__greeting">{this.context.name}</span>
        <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar" />
      </div>
    );
  }
}

UserMenu.contextType = DataContext;

export default UserMenu;
