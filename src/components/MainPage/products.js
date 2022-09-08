import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
return (
    <div>
    <p>This is the Products page. Explore...</p>
    <Link to="/mainPage" state={"from Products Page"}>Go Back</Link>
    </div>
)
};

export default Products;