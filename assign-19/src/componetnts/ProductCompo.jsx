


const ProductCompo = ({ ProductData }) => {

    return (

        <div className="overflow-x-auto space-x-4 flex">
            {
                ProductData.map((product) => {
                    return (
                        <div className="min-w-80 mx-2 bg-white rounded-md shadow-md text-center">
                            <img src={product.imageUrl} alt=""
                                className="h-48 w-full rounded-lg " />
                            <h3 className="font-bold my-2">{product.name}</h3>
                            <p className="my-2 text-gray-400">{product.cat_des}</p>
                            <button className="btn btn-error my-4">Buy Now</button>
                        </div>
                    )
                })
            }
        </div>

    );
};

export default ProductCompo;