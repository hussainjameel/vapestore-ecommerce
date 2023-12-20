import GenericService from "./GenericService";

class ProductService extends GenericService {
    constructor(props) {
        super(props);
    }
    addProducts = (data) => this.post("products", data);
    deleteProducts = (_id) => this.delete("products/" + _id);
    updateProducts = (id, data) => this.put("products/" + id, data);
    getSingleProduct = (id) => this.get("products/" + id);
    getProducts = () => this.get("products");
    // Pagination
    // getProducts = (page) => this.get("products?page=" + page);
}

let productService = new ProductService();
 
export default productService;



// axios
// .put("http://localhost:8080/api/products/" +id, { name, price })
// .then((res) => {
//     console.log(res.data);
//     navigate("/products");
// })
// .catch((err) => {
//     console.log(err);
// // }) 