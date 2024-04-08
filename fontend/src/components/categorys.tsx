import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categorys } = useQuery({
    queryKey: ["CATEGORY_LIST"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/categorys"
      );
      return data;
    },
  });
  console.log(categorys);

  return (
    <>
      <div className="main-content-new">
        <h1>Categorys</h1>
        <hr />

        <div>
          {categorys?.map((category: { _id?: number; name: string }) => (
            <div key={category._id}>
              <h3>
                <Link to={`categorys/${category._id}`}>{category.name}</Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
