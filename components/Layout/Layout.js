import Header from '../common/Header/Header';
import Mint from "../common/Mint/Mint";
import Footer from '../common/Footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Mint />
            <Footer />
        </>
    )
}

export default Layout