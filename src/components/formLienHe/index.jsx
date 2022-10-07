import {Link} from 'react-router-dom';
import {useState } from 'react';
import {subMitContact} from './action'
import './Styles.scss';

export default function App () {

    // nhập số điện thoại
    const[errorPhone, setErrorPhone] = useState("");
    const [phone, setPhone] = useState("");
    const regex_phone = /((09|03|07|08|05)+([0-9]{8})\b)/g;

    // name 
    const [name, setName] = useState("");
    // source
    const [source, setSource] = useState("");

    // hàm gửi thông tin đi
    const submit = async () => {
        const data = {phone, name, source};

        try {
            const response = await subMitContact(data);

            if (response.status === 200) {
                window.alert("Bạn đã đăng ký tài khoản thành công, nhân viên sẽ liên hệ cho bạn trong thời gian sớm nhất");
            }
            else if (response.status === 404) {
                window.alert("Có lỗi xảy ra !");
            }
        
        } catch (error) {
            window.alert("Có lỗi xảy ra ...!");
            window.location = "/lien-he";
        }

        setName("");
        setPhone("")
        setSource("");
    }

    // xử lý thông tin trước khi gửi đi
    const handelSubmit = () => {
        if (phone.length === 0) {
            setErrorPhone("Vui lòng nhập số điện thoại (*)");
        }
        else if (regex_phone.test(phone) === false) {
            setErrorPhone("Bạn nhập sai định dạng (*)");
        }
        else {
            submit();
            setErrorPhone("");
        }
    }

    return (
        <div className='form'>
            <h3 className='from-title'>Dùng thử SmartSpa miễn phí</h3>
            <p className='text-from'>+1500,000 doanh ngiệp và chủ shop tin dùng</p>
                
            <div className='box-input full-width'>
                <label className='text-error' ></label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Họ và tên của bạn' />
            </div>

            <div className='half-width'>
                <div className='box-input'>
                    <label htmlFor='phone' className='text-error'>{errorPhone}</label>
                    <input value={phone} onChange={e => setPhone(e.target.value)} id='phone' placeholder='Số điện thoại của bạn (*)' />
                </div>

                <div className='box-input' >
                    <label className='text-error'></label>
                    <input value={source} onChange={e => setSource(e.target.value)} placeholder='Tên của hàng của bạn của bạn' />
                </div>
            </div>

            <p className='text-from'>
                <input type='checkbox' className='checkbox' />
                Tôi đồng ý với 
                <Link to="/" > quy định sử dụng</Link> và
                <Link to="/" > chính sách bảo mật</Link> của 
                <Link to="/" > SmartSpa</Link>
            </p>

            <button onClick={handelSubmit}  className='btn-submit'>Đăng ký dùng thử</button>
        </div>
    )
}