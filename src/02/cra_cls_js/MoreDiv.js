import React from "react";


class MoreDiv extends React.Component {
    render(props) {
        return(
            React.createElement(
                'div',
                {
                    className: 'more_share'
                },
                [
                    React.createElement(
                        'a',
                        {
                            href: this.props.share_url1
                        },
                        this.props.share_txt1
                    ),
                    React.createElement(
                        'a',
                        {
                            href: this.props.share_url2
                        },
                        this.props.share_txt2
                    )
                ]
            )
        );
    }

}

export default MoreDiv;

