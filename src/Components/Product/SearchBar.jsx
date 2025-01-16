const SearchBar = () => {
    return (
        <>
            <input type="text" placeholder="para buscar" />
            <div>
                <label htmlFor="">
                    <input type="checkbox" /> Only show products in stock
                </label>
            </div>
        </>
    )
};

export default SearchBar;