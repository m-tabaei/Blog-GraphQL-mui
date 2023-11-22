import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POST_COMMENT } from "../../GraphQL/queries";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_POST_COMMENT, {
    variables: { slug },
  });
  console.log(data)
  return <div>Comments</div>;
}

export default Comments;
