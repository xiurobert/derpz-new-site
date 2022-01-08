import * as React from 'react';

import styled from 'styled-components';

class IconRow extends React.Component {
    render() {
        return(
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}

const StyledIconRow = styled(IconRow)`
    margin-top: 0.5rem;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
`;

export default StyledIconRow;