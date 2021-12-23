import React from 'react';

class Language extends React.Component {
    render() {
        return(
            <div className="language card">
                <div className="card-content">
                    <h4 className="subtitle is-4">{this.props.language}</h4>
                    <p>
                        {this.props.children}
                    </p>
                </div>
            </div>
        )
    }
}

export default Language;