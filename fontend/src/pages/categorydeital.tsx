import { News } from "@/components";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const Categorydeital = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["CATEGORY_DETAIL", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/categorys/${id}`
      );
      return data;
    },
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <div className="main-content-new">
        <h1>Danh mục: {data.categorys.name}</h1>
        <hr />
      </div>
      <News data={data.products} />
    </div>
  );
};

export default Categorydeital;
