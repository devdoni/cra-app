import React from "react";
import TitleWarp from "./TitleDiv";
import MainDiv from "./MainDiv";
import SubDiv from "./SubDiv";
import MoreDiv from "./MoreDiv";

class AdWrap_2 extends React.Component {
    render() {
        return(
            React.createElement(
                'div',
                {
                    className: 'ad_wrap'
                },
                [
                    React.createElement(
                        TitleWarp,
                        {
                            title: this.props.title
                        },
                        null
                    ),
                    React.createElement(
                        MainDiv,
                        {
                            url: this.props.main_url,
                            src: this.props.main_src,
                        },
                        null
                    ),
                    React.createElement(
                        SubDiv,
                        {
                            infos: [
                                {
                                    img_src: '02/imgs/img06.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '시크릿데이 유기농 입오버 4P',
                                    info_txt2: '4팩 11,900원~',

                                },
                                {
                                    img_src: '02/imgs/img07.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '로운의 앤드지 봄여름 셋업',
                                    info_txt2: '77% 79,000원',

                                },
                                {
                                    img_src: '02/imgs/img08.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '알찬구성 하우견과 100봉',
                                    info_txt2: '최대 55% 25,900원~',
                                },
                                {

                                }
                            ]
                        },
                        null
                    ),
                    React.createElement(
                        MoreDiv,
                        {
                            share_url1: this.props.share_url1,
                            share_url2: this.props.share_url2,
                            share_txt1: this.props.share_txt1,
                            share_txt2: this.props.share_txt2
                        },
                        null
                    ),

                ]
            )
        );
    }
}

export default AdWrap_2;