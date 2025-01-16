const ProductRow = ({nombre,precio}) => {
    return (
        <>
            <tr>
                <td>{nombre}</td>
                <td>{precio}</td>
            </tr>
        </>
    )
};

export default ProductRow;