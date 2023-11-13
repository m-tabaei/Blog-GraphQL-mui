import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../GraphQL/queries";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <h4>صبور باشید ... </h4>;

  if (error) return <h4>Error ...</h4>;
  console.log(data);
  return (
    <>
      <h1>Blogs</h1>
    </>
  );
};

export default Blogs;
