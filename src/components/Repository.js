import React from 'react';
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Repository extends React.Component {
    render() {
        return (
            <div className={`repository`}>
                <a href={this.props.node.url} style={{
                    fontSize: "1.25em"
                }}>
                    {this.props.node.nameWithOwner}
                </a>
                <span>
                    <FontAwesomeIcon icon={faStar} size="1x" color="black"/>
                    {this.props.node.stargazers.totalCount}
                </span>
                <p>
                    {this.props.node.description}
                </p>
            </div>
        )
    }
}

export default Repository;