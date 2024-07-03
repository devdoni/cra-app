import React from "react";
import TitleWarp from "./TitleDiv";
import MainDiv from "./MainDiv";
import SubDiv from "./SubDiv";
import MoreDiv from "./MoreDiv";

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

export default AdWrap_3;