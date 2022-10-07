import { useState } from 'react';
import Slider from 'react-slick';
import {Banner, Header, Footer, FormLienHe, SliderDoiTac} from '../../components';

import {
    COLUMNS_SECTION_1, COLUMNS_SECTIONS_4, SECTIONS_2_3, ANH7, 
} 
from './constans';

import './Styles.scss';

export default function App () {

    // 0 - > 480 mobile, 481 -> 1023 tablet, 1024 -> 1680px pc, 1680 < pc kích thước lớn
    // setting slider chung
    const SETTINGS_SLIDER = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        speed: 500,
    }

    // setting slider chung SECTION 1
    const SETTINGS_SLIDER_SECTION_1 = {
        ...SETTINGS_SLIDER,
        slidesToShow:  3,

        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2.03,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.03,
            }
          }
        ]
    };

    // setting slider chung SECTION 2 và 3
    const SETTINGS_SLIDER_SECTION_2_3 = {
        ...SETTINGS_SLIDER,
        slidesToShow:  3,

        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2.052,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.02,
            }
          }
        ]
    };

    // setting slider chung SECTION 4
    const SETTINGS_SLIDER_SECTION_4 = {
        ...SETTINGS_SLIDER,
        slidesToShow:  3,

        responsive: [
          {
            // css riêng cho màn 1024
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.33,
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2.05,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              arrows: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: true,
              slidesToShow: 1,
            }
          }
        ]
    };


    const [RowItemShowMore, setRowItemShowMore] = useState(100);
    const [itemShowMore, setItemShowMore] = useState(100);

    console.log(RowItemShowMore);
    console.log(itemShowMore);

    return (
        <div className='home-page'>
            <Header />
            <Banner />

            <div className='content'>
                
                {/* section 1 */}
                <div className='section section_1'>
                    <div className='row'>
                        {/* render ra các coulm trong section 1 dạng Slider */}
                        <Slider {...SETTINGS_SLIDER_SECTION_1}>
                            {COLUMNS_SECTION_1.map((column, index)=> 
                                <div className='column' key={index} >
                                    {/* ảnh nền từng cột */}
                                    <div className='background-img'
                                        style={{backgroundImage: `url(${column.image})`}}
                                    ></div>

                                    {/* nội dung text và tiêu đề */}
                                    <div>
                                        <h3 className='title'>{column.title}</h3>
                                        <p className='text'>{column.text}</p>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
                
                {/*section 2 và section 3 */}
                {SECTIONS_2_3.map((sesction, indexRow) => 
                    <div className='section section_2_3' key={indexRow}>
                        <div className='row'>

                            {/* render ra màn hình các column section 2 và section 3 */}
                            <Slider {...SETTINGS_SLIDER_SECTION_2_3} >
                                {sesction.COLUMNS.map ( (column, indexColumn) =>
                                    <div className='column' key={indexColumn}>
                                        <div className='column-content'>
                                            {/* icon nền từng cột */}
                                            <div className='icon'>
                                                <img src={column.icon}/>
                                            </div>
                                            
                                            {/* nội dung text và tiêu đề */}
                                            <div>
                                                <h3 className='title'>{column.title}</h3>

                                                {/* đoạn text */}
                                                <p className='text'
                                                    dangerouslySetInnerHTML={{ __html: column.text}}
                                                    // ẩn hiện đoạn text
                                                    style={ indexColumn === itemShowMore && indexRow === RowItemShowMore 
                                                        ? {display: 'block'} : {}
                                                    }
                                                >
                                                </p>

                                                {/* btn xem thêm hoặc ẩn text */}
                                                {indexColumn === itemShowMore && indexRow === RowItemShowMore ?
                                                    <span className='btn-xemThem-An' onClick={() => {
                                                            setItemShowMore(100);
                                                            setRowItemShowMore(100)
                                                    }}>Ẩn</span> :
                                                    <span className='btn-xemThem-An' onClick={() => {
                                                        setItemShowMore(indexColumn);
                                                        setRowItemShowMore(indexRow)
                                                    }}>Xem thêm</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                )}

                {/*section 4 */}
                <div className='section section_4'>
                    <h2 className='section-heading'>Giải pháp quản lý dễ dàng và tối ưu chi phí</h2>
                    <div className='row'>
                        <Slider {...SETTINGS_SLIDER_SECTION_4}>
                            {COLUMNS_SECTIONS_4.map((column, index) =>
                                <div className='column' key={index} >
                                    <div className='column-content'>
                                        {/* ảnh trên cùng */}
                                        <div className='background-img' style={{backgroundImage: `url(${column.image})`}} ></div>

                                        <h3 className='title'>{column.title}</h3>
                                        
                                        {/* các đoạn text */}
                                        {column.paragraphs.map( (paragraph, index) => 
                                            <p key={index}>
                                                <img src={column.icon} className="icon" />
                                                {paragraph}
                                            </p>
                                        )}

                                        <button className='btn-trai-nghiem'>Dùng thử miễn phí</button>
                                    </div>
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>

                {/* section 5 */}
                <div className='section section_5'>
                    <div className='row'>
                        <div className='column'>
                          <FormLienHe />
                        </div>

                        <div className='column'>
                            <div className='background-image' 
                                style={{ backgroundImage: `url(${ANH7})`}}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* section 6 */}
                <div className='section section_6'>
                    <h2 className='section-heading'>Chủ spa nói gì về SmartSpa</h2>

                    <SliderDoiTac />
                </div>
            </div>

            <Footer />
        </div>
    )
}