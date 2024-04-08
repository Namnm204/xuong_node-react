import { useLocalStorage } from "@/hooks/useStorage";
import { IProduct } from "@/interfaces/product";
import { getAllProducts } from "@/service/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

type newProps = {
  featured?: boolean;
  data?: IProduct[];
};

const News = ({ featured, data }: newProps) => {
  const queryClient = useQueryClient();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["PRODUCT_KEY"],
    queryFn: getAllProducts,
  });
  const [user] = useLocalStorage("user", {});
  const userId = user?.user._id;
  const { mutate } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string;
      quantity: number;
    }) => {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/carts/add-to-cart`,
        {
          productId,
          quantity,
          userId,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
    },
  });
  const filteredProducts = featured
    ? products?.filter((product: IProduct) => product?.featured == featured)
    : data
    ? data
    : products;

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <div className="main-content-new">
      <h1>New</h1>
      <hr />
      <div className="main-content-new-box">
        {filteredProducts?.map((product: IProduct, index: number) => {
          return (
            <div key={index} className="main-content-new-box-item">
              <div className="main-content-new-box-item-img">
                <img src={product?.image} alt="" />
              </div>
              <div className="main-content-new-box-item-sale">
                <span>{product?.discount}%</span>
              </div>
              <div className="main-content-new-box-item-thongtin">
                <h2>
                  <Link to={`/products/${product._id}`}>{product?.name}</Link>
                </h2>
                <p>{product?.description}</p>
                <span>
                  {product?.price - product?.price * (product?.discount / 100)}
                </span>{" "}
                <del>{product?.price}</del>
              </div>
              <div className="main-content-new-box-item-hover">
                <Link to={`/products/${product._id}`}>
                  <button>Quick view</button>
                </Link>
                <button
                  onClick={() => {
                    mutate({ productId: product._id, quantity: 1 });
                  }}
                >
                  Add to cart
                </button>
                <div className="like-share-Compare">
                  <div className="share p">
                    {/* <ion-icon name="share-social-outline" /> */}
                    share
                  </div>
                  <div className="Compare">
                    {/* <ion-icon name="git-compare-outline" /> */}
                    Compare
                  </div>
                  <div className="like">
                    {/* <ion-icon name="heart-outline" /> */}
                    like
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mgbt" />
    </div>
  );
};

export default News;
