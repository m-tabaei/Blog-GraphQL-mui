import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../GraphQL/queries";
import { Avatar, Grid, Typography } from "@mui/material";

const Authors = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <h4>صبور باشید ... </h4>;

  if (errors) return <h4>Error ...</h4>;
  console.log(data);
  const { authors } = data;
  return (
    <Grid
      container
      sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}
    >
      {authors.map((author) => (
        <Grid item xs={12} padding={2} key={author.id}>
          <a href={`/authors/${author.slug}` } style={{display:"flex",alignItems: "center", textDecoration: "none" }} >
            <Avatar src={author.avatar.url} sx={{marginLeft: 2}} />
            <Typography cpmponent="p" variant="p" color="text.secondary">
              {author.name}
            </Typography>
          </a>
        </Grid>
      ))}
    </Grid>
  );
};

export default Authors;
