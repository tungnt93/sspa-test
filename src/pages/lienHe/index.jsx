import {Header, Banner, Footer, FormLienHe} from '../../components';
import './Styles.scss';

export default function App () {
    return (
        <div className='lien-he-page'>
            <Header />
            <Banner />
            
            <div className='content' >
                <FormLienHe />
            </div>

            <Footer/>
        </div>
    )
}