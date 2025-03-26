export default function ProductDetails({ params }) {
    return (
        <div>
            <h1>Product Details Page</h1>
            <p>Product ID: {params.id}</p>
        </div>
    );
}
