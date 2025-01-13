const OpenLink = ({redirecURL , logoImage }) => {
    return (
        <>
             <a href={redirecURL} target="_blank">
                <img src={logoImage} className="logo react" alt="React logo" />
            </a>
        </>
    )
};

export default OpenLink;