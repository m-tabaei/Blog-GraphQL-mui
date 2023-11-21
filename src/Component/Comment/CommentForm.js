import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../GraphQL/mutation";

function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });
  const sendHandler = () => {
    if (name && email && text) {
      sendComment();
    } else {
      Toast.warn("فیلد ها را پر کنید", {
        position: "top-center",
      });
    }
  };

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba (0, 0, 0, 1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          multiline
          minRows={4}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button variant="contained" onClick={sendHandler}>
          ارسال
        </Button>
      </Grid>
      <ToastContainer />
    </Grid>
  );
}

export default CommentForm;
