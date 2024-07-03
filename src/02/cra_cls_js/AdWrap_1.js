import React from "react";
import TitleWarp from "./TitleDiv";
import MainDiv from "./MainDiv";
import SubDiv from "./SubDiv";
import MoreDiv from "./MoreDiv";

class AdWrap extends React.Component {
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

class AdWrap_3 extends React.Component {
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
                                    img_src: '02/imgs/img10.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '부산 영도 그랜드 베른 호텔 1박',
                                    info_txt2: '+카페조식 8만원대~',

                                },
                                {
                                    img_src: '02/imgs/img11.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '각인가능! 레트로 감성 홈카페잔',
                                    info_txt2: '톡딜가 13,900원~',

                                },
                                {
                                    img_src: '02/imgs/img12.jpg',
                                    img_url: '#none',
                                    info_url: '#none',
                                    info_txt1: '필립스 S9983 전기면도기',
                                    info_txt2: '24만원대',
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
export default AdWrap;