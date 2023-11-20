import React from "react";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { useQuery } from "@apollo/client";
import { Container, Grid, Avatar, Typography } from "@mui/material";
import { GET_AUTHOR_INFO } from "../../GraphQL/queries";
import CardEL from "./../shared/CardEL";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug: slug },
  });
  if (loading) return <h3>صبور باشید ... </h3>;

  if (error) return <h3>Error ...</h3>;
  console.log(data);
  const { author: { name, field, avatar, description, post} } = data;
  return (
    <Container maxWidth="lg">
      <Grid container mt={10}>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
          <Typography component="h3" variant="h5" fontWeight={700}>
            {name}
          </Typography>
          <Typography component="p" variant="h5" color="text.secondary">
            {field}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div
            dangerouslySetInnerHTML={{
              __html: sanitizeHtml(description.html),
            }}
          ></div>
        </Grid>
        <Grid item xs={12} mt={6}>
          <Typography component="h3" variant="h5" fontWeight={700}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2} mt={2}>
            {post.map((post) => (
              <Grid key={post.id} item xs={12} sm={6} md={4}>
                <CardEL
                  title={post.title}
                  slug={post.slug}
                  coverPhoto={post.coverPhoto}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AuthorPage;
