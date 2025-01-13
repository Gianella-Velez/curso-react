import viteLogo from "../../assets/vite.svg";
import reactLogo from "../../assets/react.svg";
import Git from "../../assets/GitHub.png";

const Logo = () => {
    return (
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://github.com/Gianella-Velez/curso-react/commit/d979d3a1fcc14ccfa7aba929e5067fd7205a21d7" target="_blank">
                <img src={Git} className="logo react" alt="React logo" />
            </a>
        </div>
    );
};

export default Logo;