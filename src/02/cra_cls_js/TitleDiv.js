import React from "react";

class TitleDiv extends React.Component {
    render(props) {
        return(
            React.createElement(
                'div',
                {
                    className: 'title'
                },
                React.createElement(
                    'h3',
                    null,
                    this.props.title
                )
            )
        );
    }
}

export default TitleDiv; 