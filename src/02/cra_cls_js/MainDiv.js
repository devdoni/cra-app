import React from "react";

class MainDiv extends React.Component {
    render(props) {
        return(
            React.createElement(
                'div',
                {
                    className: 'main_goods'
                },
                React.createElement(
                    'a',
                    {
                        href: this.props.url
                    },
                    React.createElement(
                        'img',
                        {
                            src: this.props.src
                        },
                        null
                    )
                )
            )
        );
    }
} 



export default MainDiv;