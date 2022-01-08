import * as React from 'react';

import "./IconRow.scss";

class IconRow extends React.Component {
    render() {
        return(
            <div className="icon-row">
                {this.props.children}
            </div>
        )
    }
}

export default IconRow;