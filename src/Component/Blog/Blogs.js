import { useQuery } from "@apollo/client";
import { GET_BLOGS_INFO } from "../../GraphQL/queries";
import { Grid } from "@mui/material";
import CardEL from "../shared/CardEL";

const Blogs = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <h4>صبور باشید ... </h4>;

  if (error) return <h4>Error ...</h4>;
  console.log(data);
  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} key={post.id}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blogs;
