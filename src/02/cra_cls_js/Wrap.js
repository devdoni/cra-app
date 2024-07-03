import React from "react";

import AdWrap_1 from "./AdWrap_1";
import AdWrap_2 from "./AdWrap_2";
import AdWrap_3 from "./AdWrap_3";

class Wrap extends React.Component {
    render() {
        return(
            React.createElement(
                'div',
                {
                    id: 'wrap'
                },
                [
                    React.createElement(
                        AdWrap_1,
                        {
                            title: '작지만 강해~ 후회없는 선택 미니건조기',
                            main_url: '#none',
                            main_src: '02/imgs/img01.jpg',
                            share_url1: '#none',
                            share_url2: '#none',
                            share_txt1: '핫톡딜 더보기!',
                            share_txt2: '공유하기'
                        },
                        null
                    ),
                    React.createElement(
                        AdWrap_2,
                        {
                            title: '시원 담백한 육수에 쫄깃한 면발',
                            main_url: '#none',
                            main_src: '02/imgs/img05.jpg',
                            share_url1: '#none',
                            share_url2: '#none',
                            share_txt1: '핫톡딜 더보기!',
                            share_txt2: '공유하기'
                            
                        },
                        null
                    ),
                    React.createElement(
                        AdWrap_3,
                        {
                            title: '치킨계의 원탑 맘스터치 1+1',
                            main_url: '#none',
                            main_src: '02/imgs/img09.jpg',
                            share_url1: '#none',
                            share_url2: '#none',
                            share_txt1: '핫톡딜 더보기!',
                            share_txt2: '공유하기'
                        },
                        null
                    ),
                ]
            )
        );
    }   
}



export default Wrap;