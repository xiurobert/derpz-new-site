import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, {css} from "styled-components";

class ClickyIcon extends React.Component {
    url;
    icon;
    render() {
        return(
            <div className={this.props.className}>
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={this.props.icon} size="2x" color="black"/>
                </a>
            </div>
        );
    }
}

const StyledClickyIcon = styled(ClickyIcon)`
    font-size: 1.5em;
    margin-left: 0.25rem;
    margin-right: 0.25rem;
`
export default StyledClickyIcon;