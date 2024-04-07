export default function ProductDetails( { params }: { params: {productId: string}} ) {
    return(<>
    <h1>DETAIL Product page {params.productId}</h1>
    </>);
}
 

