import { Banner, Header, Footer, SliderDoiTac } from '../../components';
import Slider from 'react-slick';
import { COLUMNS_BANG_GIA, KHUNG_BANG_GIA, TICK, BTN_TRAI_NGHIEN } from './constans';
import './Styles.scss';

function App() {

    const SETTING_SLIDER = {
        dots: false,
        infinite: false,
        arrows: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 500,

        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    return (
        <div className="page-bang-gia">
            <Header />
            <Banner />

            <div className='content' >
                {/* bảng giá */}
                <div className='section-bang-gia'>
                    <h2 className='section-heading'>Bảng giá cho khách hàng chủ SPA</h2>
                    <Slider {...SETTING_SLIDER} >
                        {COLUMNS_BANG_GIA.map((column, index) =>
                            <div className='column' key={index}>
                                <div className='column-content'>
                                    {/* phần giá và tên gói */}
                                    <div className='column-content-top'
                                        style={{ backgroundImage: `url(${column.backgroundTop})` }}
                                    >
                                        <span className='name' >{column.name}</span>
                                        <span className='price' >{column.price}</span>
                                    </div>

                                    <div className='column-content-bottom'>
                                        {/* render các tính năng nổi bật */}
                                        {column.tinh_nang_noi_bat.map((tinhNang, index) =>
                                            <p className='tinh-nang-noi-bat' key={index}>
                                                <img className='icon-tick' src={TICK} />
                                                {tinhNang}
                                            </p>
                                        )}

                                        {/* render các tính năng thường */}
                                        {column.tinh_nang_thuong.map((tinhNang, index) =>
                                            <p className='tinh-nang-thuong' key={index}>
                                                <img className='icon-tick' src={TICK} />
                                                {tinhNang}
                                            </p>
                                        )}

                                        {/* btn đăng ký dùng thử */}
                                        <button style={{ backgroundImage: `url(${BTN_TRAI_NGHIEN})` }} className='btn-dung-thu'></button>
                                        
                                        <div className='box-color'></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </div>

                <SliderDoiTac />
            </div>

            <Footer />
        </div>
    )
}

export default App