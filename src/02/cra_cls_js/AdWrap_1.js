import React from "react";
import TitleWarp from "./TitleDiv";
import MainDiv from "./MainDiv";
import SubDiv from "./SubDiv";
import MoreDiv from "./MoreDiv";

class AdWrap_1 extends React.Component {
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
                                    img_src: '02/imgs/img02.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '당일생산 국산 포기김치',
                                    info_txt2: '3kg 9,900원',

                                },
                                {
                                    img_src: '02/imgs/img03.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '[한정수량] 해운대암소 양념 본갈비',
                                    info_txt2: '5팩 29,900원',

                                },
                                {
                                    img_src: '02/imgs/img04.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '매일유업 아몬드브리즈',
                                    info_txt2: '190ml 24팩 14,900원',
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

export default AdWrap_1;