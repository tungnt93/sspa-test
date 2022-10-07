import Slider from 'react-slick';
import {BANNER1, BANNER2, BANNER3} from '../../assets';
import './Styles.scss';

export default function App () {

    const images = [BANNER1, BANNER2, BANNER3];

    return(
        <div className='banner'>
            <Slider
                dots={true}
                speed={500}
                slidesToScroll = {1}
                slidesToShow = {1}
                arrows = {false}
                autoplay = {true}
                autoplaySpeed = {3000}
            >
                {/* render ra tất cả các banner */}
                {images.map((image, index)=>
                    <div key={index} className='banner-slider'>
                        <div className='banner-background'
                            style={{backgroundImage: `url(${image})`}}
                        ></div>
                    </div>
                )}
            </Slider>
        </div>
    )
}