import React from "react";

class InfoLi extends React.Component {
    render(props) {
        return(
            React.createElement(
                'li',
                {
                    className: 'info'
                },
                React.createElement(
                    'a',
                    {
                        href: this.props.info_url
                    },
                        [
                            React.createElement(
                                'p',
                                null,
                                this.props.info_txt1
                            ),
                            React.createElement(
                                'p',
                                null,
                                this.props.info_txt2
                            ),
                        ]
                    )
                )
            );
    }
}

class ImgLi extends React.Component {
    render(props) {
        return(
            React.createElement(
                'li',
                {
                    className: 'img'
                },
                React.createElement(
                    'a',
                    {
                        href: this.props.img_url
                    },
                    React.createElement(
                        'img',
                        {
                            src: this.props.img_src
                        },
                        null
                    )
                )
            )
        );
    }
}

class Ul extends React.Component {
    render(props) {
        return(
            React.createElement(
                'ul',
                null,
                [
                    React.createElement(
                        ImgLi,
                        {
                            img_src: this.props.img_src,
                            img_url: this.props.img_url
                        },

                    ),
                    null,

                    React.createElement(
                        InfoLi,
                        {
                            info_url: this.props.info_url,
                            info_txt1: this.props.info_txt1,
                            info_txt2: this.props.info_txt2,
                        },
                    ),
                    null
                ]
                
            )
        );
    }
}

class SubDiv extends React.Component {
    render(props) {
        return(
            React.createElement(
                'div',
                {
                    className: 'sub_goods'
                },
                [
                    React.createElement(
                        Ul,
                        {   
                            img_src: this.props.infos[0].img_src,
                            img_url: this.props.infos[0].img_url,
                            info_url: this.props.infos[0].info_url,
                            info_txt1: this.props.infos[0].info_txt1,
                            info_txt2: this.props.infos[0].info_txt2,
                        },
                    ),
                    React.createElement(
                        Ul,
                        {   
                            img_src: this.props.infos[1].img_src,
                            img_url: this.props.infos[1].img_url,
                            info_url: this.props.infos[1].info_url,
                            info_txt1: this.props.infos[1].info_txt1,
                            info_txt2: this.props.infos[1].info_txt2,
                        },
                        null,
                    ),
                    React.createElement(
                        Ul,
                        {
                            img_src: this.props.infos[2].img_src,
                            img_url: this.props.infos[2].img_url,
                            info_url: this.props.infos[2].info_url,
                            info_txt1: this.props.infos[2].info_txt1,
                            info_txt2: this.props.infos[2].info_txt2,
                        },
                    ),
                ]
            )
        );
    }
}

export default SubDiv;