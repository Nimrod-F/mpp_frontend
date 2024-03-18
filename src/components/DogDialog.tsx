import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DogBreed } from "../model/Dog";
import useDogStore from "../stores/DogStore";
import ReactHookFormSelect from "./ReactHookFormSelect";
interface Inputs {
  name: string;
  breed: DogBreed;
  description: string;
  imageUrl: string;
  age: number;
  owner: string;
}
const DogDialog = () => {
  const { opened, handleClose, addDog, selectedDog, editDog } = useDogStore();
  const { register, handleSubmit, control, reset } = useForm<Inputs>({});

  useEffect(() => {
    reset(selectedDog);
  }, [selectedDog]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (selectedDog) {
      editDog({
        ...selectedDog,
        ...data,
      });
    } else {
      addDog({
        id: Math.floor(Math.random() * 1000),
        ...data,
      });
    }
    reset();
    handleClose();
  };
  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      fullScreen={false}
    >
      <form style={{ padding: 16 }} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5">Add a new dog</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              fullWidth
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              {...register("description", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Image URL"
              fullWidth
              {...register("imageUrl", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              type="number"
              fullWidth
              {...register("age", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Owner"
              fullWidth
              {...register("owner", { required: true })}
            />
          </Grid>
          <Grid item xs={12}>
            <ReactHookFormSelect
              label="Breed"
              control={control}
              defaultValue={""}
              name={"breed"}
            >
              {Object.keys(DogBreed).map((breed) => {
                const value = DogBreed[breed as keyof typeof DogBreed];
                return (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </ReactHookFormSelect>
          </Grid>
          <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
            <Button variant="contained" type="submit" sx={{ mr: 2 }}>
              Submit
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};

export default DogDialog;
