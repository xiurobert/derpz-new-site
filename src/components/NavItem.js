import React from 'react';

class NavItem extends React.Component {
    render() {
        return(
            <p className="level-item has-text-centered">
                <a className="link regular-nav-item" href={this.props.href ? this.props.href : "#"}>
                    {this.props.children}
                </a>
            </p>
        )
    }
}

export default NavItem;