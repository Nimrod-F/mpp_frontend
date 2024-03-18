import { Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Dog from "../model/Dog";
import useDogStore from "../stores/DogStore";

const Detail = () => {
  const params = useParams();
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  const { dogs } = useDogStore();
  React.useEffect(() => {
    if (params.id) setDog(dogs.find((dog) => dog.id === parseInt(params.id!)));
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src={dog?.imageUrl}
            alt={dog?.name}
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="body1">
                <b>Owner:</b>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField disabled={true} value={dog?.owner || ""} />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body1">
                <b>Age:</b>
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <TextField disabled={true} value={dog?.age || ""}></TextField>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Detail;
