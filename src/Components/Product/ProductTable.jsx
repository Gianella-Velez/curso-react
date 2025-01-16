import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = () => {
    const fruits = [
        { nombre: "Apple", precio: 1 },
        { nombre: "Dragonfruit", precio: 1 },
        { nombre: "PassionFruit", precio: 2 },
        { nombre: "Apple", precio: 1 },
        { nombre: "Dragonfruit", precio: 1 },
        { nombre: "PassionFruit", precio: 2 }

    ];
    const vegetables = [
        { nombre: "Spinach", precio: 2 },
        { nombre: "Pumpkin", precio: 4 },
        { nombre: "Peas", precio: 1 },
        { nombre: "Spinach", precio: 2 },
        { nombre: "Pumpkin", precio: 4 },
        { nombre: "Peas", precio: 1 }
    ];

    return (
        <>
            <ProductCategoryRow title="Fruits" products={fruits} />
            <ProductCategoryRow title="vegetables" products={vegetables} />
        </>
    )
};

export default ProductTable;