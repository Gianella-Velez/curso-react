import OpenLink from '../Components/core/OpenLink.jsx';

import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import Git from "../assets/GitHub.png";

const Home = () => {
    return (
        <div>
            <OpenLink redirecURL="https://vite.dev" logoImage={viteLogo} />
            <OpenLink redirecURL="https://react.dev" logoImage={reactLogo} />
            <OpenLink redirecURL="https://github.com/Gianella-Velez/curso-react" logoImage={Git} />
            <Body />
            <Footer />
        </div>
    )
};

export default Home; 