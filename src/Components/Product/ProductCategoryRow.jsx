import ProductRow from "./ProductRow";

const ProductCategoryRow = ({title, products}) => {
    return (
        <>
            <table border={1} className="tablaGeneral">
                <thead>
                    <tr>
                        <th colSpan={12}>
                            {title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map ((product,index) => (
                            <ProductRow key={index} nombre={product.nombre} precio={product.precio} />
                        ))
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
};

export default ProductCategoryRow;