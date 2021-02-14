const Product = () => {
return (
    <div key={p.id} className="col-md-6">
    <div>  
        <img src={p.image} height="100" />
        <div>{p.title} </div>
        {p.body}
    </div>
        <div>
            <ul>
            <li>${p.price}</li>
            </ul>
            <input type="button" value="Buy" />
        </div>
        <br />
    </div>
)}
    export default Product;