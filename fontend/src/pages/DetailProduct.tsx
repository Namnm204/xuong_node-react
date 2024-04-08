import { getProductsById } from "@/service/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const DetailProduct = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["PRODUCT_KEY", id],
    queryFn: async () => await getProductsById(id as string),
  });
  console.log(product);

  const { data: relatedProduct } = useQuery({
    queryKey: ["RELATED_PRODUCT", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/products/${product.category}/related`
      );
      return data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  console.log("relatedProduct", relatedProduct);

  return (
    <div>
      {product?.name}

      <hr />
      <h3>Related Products</h3>
      {relatedProduct?.map((item) => (
        <div>
          <Link to={`/products/${item._id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default DetailProduct;
