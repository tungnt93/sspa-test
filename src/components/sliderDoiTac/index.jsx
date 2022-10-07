import { COLUMNS_SLIDER_DOITAC, NEN } from './constans';
import Slider from 'react-slick';
import {useEffect, useState} from 'react';
import './Styles.scss';

function App() {

    const SETTINGS_SLIDER_DOI_TAC = {
        dots: false,
        infinite: true,
        arrows: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2.3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    
    // dùng để lấy chiều cao của thẻ lớn nhất
    const [height, setHeight] = useState(0);

    console.log(height)

    useEffect(() =>{
        // lấy ra các thẻ div column-content
        const columnsContent = document.querySelectorAll(".column-slider-doi-tac .column-content");

        // dùng để lưu lại chiều cao của các column-content
        let arrayHeight = []
        
        setTimeout(() => {
            columnsContent.forEach(column => {
                arrayHeight.push(column.offsetHeight)
            })

            // set chiều cao của các thẻ column-content bằng thẻ column-content có chiều cao lớn nhất
            setHeight(Math.max.apply(Math, arrayHeight));
        }, 600);
    }, [])

    return (
        <div className="slider-doi-tac" style={{ backgroundImage: `url(${NEN})` }}>
            <div className='row'>
                <Slider {...SETTINGS_SLIDER_DOI_TAC} >
                    {COLUMNS_SLIDER_DOITAC.map((column, index) =>
                        <div className='column-slider-doi-tac' key={index}>

                            <div className='column-content' 
                                style= {height > 0 ? {height: `${height}px`} : {}}
                            >
                                {/* khung avatar và ảnh các chủ shop */}
                                <div className='khung_avatar' style={{ backgroundImage: `url(${column.khung_avatar})` }}>
                                    <div className='avatar' style={{ backgroundImage: `url(${column.avatar})` }} ></div>
                                </div>

                                {/* tên chủ spa và tên spa */}
                                <div className='text-info-shop'>
                                    <span className='name' >{column.name}</span>
                                    <span className='name-store'>{column.name_store}</span>
                                </div>

                                {/* đoạn text các chủ spa chia sẻ */}
                                <p>"{column.text}"</p>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
};

export default App;