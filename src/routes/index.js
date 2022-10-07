import {Route, Routes} from 'react-router-dom';
import {route} from '../utils/constans/config'
import {LienHe, TrangChu, BangGia} from '../pages'

export default function App () {
    return(
        <Routes>
            <Route path={route.HOME} element={<TrangChu />}/>
            <Route path={route.LIEN_HE} element={<LienHe />} />
            <Route path={route.BANG_GIA} element={<BangGia/>} />
            <Route path="*" element={<TrangChu />}/>
        </Routes>
    )
}