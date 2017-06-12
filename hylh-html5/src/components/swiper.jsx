import React, {Component} from 'react';

import $ from 'jquery';

let Swiper = require('../lib/swiper.min');

require('../lib/swiper.min.css');

class ImageSwiper extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
         console.log($(window).width());
         console.log($('.nwrapper').width());
        new Swiper('.more_bottom .swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 2000,
            autoplayDisableOnInteraction: false,
        });


    }

    render() {
        return (
            <div className="more_bottom">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="lightbox swiper-slide">1</div>
                        <div className="lightbox swiper-slide">2</div>
                        <div className="lightbox swiper-slide">3</div>
                        <div className="lightbox swiper-slide">4</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }

}

export default ImageSwiper;