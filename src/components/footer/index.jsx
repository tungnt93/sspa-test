import './Styles.scss';
import {APP_STORE, GGPLAY} from '../../assets';
import {navlist} from '../header/constans';
import {Link} from 'react-router-dom';

export default function App() {

  const paragraphs = [
    {
      icon: <svg className='icon-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>,
      text: "Số 89b đường Đền Lừ - Hoàng Mai - Hà Nội",
    },
    {
      icon: <svg className='icon-footer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>,
      text: "0969877888",
    },
    {
      icon: <svg className='icon-footer icon-email' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>,
      text: "Email : support@sfin.vn.vn"
    }
  ]

  return (
    <footer>
      <div className='row' > 
        <div className='column'>
          <h2 className='title'>Liên hệ với chúng tôi</h2>

          {paragraphs.map( (paragraph, index) => 
            <p key={index}>
              {paragraph.icon}
              <span>{paragraph.text}</span>
            </p>
          )}
        </div>

        <div className='column'>
          <h2 className='title'>Điều hướng</h2>
          
          {/* các link điều hướng */}
          {navlist.map( (navItem, index) => 
            index > 0 && 
              <Link to={navItem.to} key={index}>
                {navItem.name}
                {index < (navlist.length - 1) && " | "}
            </Link>
          )}

          {/* tới ggplay và App store*/}
          <div className='banner-ggplay-appStore'>
            <Link to="/" style={{backgroundImage: `url(${APP_STORE})`}}></Link>
            <Link to='/' style={{backgroundImage: `url(${GGPLAY})`}}></Link>
          </div>
        </div>

        <div className='column'>
          <h2 className='title'>Chứng nhận</h2>
          
          <p className='text'>
            Giấy phép kinh doanh : 0109959309 sở kế hoạch và đầu tư thành phố Hà Nội
          </p>
        </div>
      </div>
    </footer>
  )
}