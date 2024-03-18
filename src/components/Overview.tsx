import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useDogStore from "../stores/DogStore";

const Overview = () => {
  const navigate = useNavigate();
  const { dogs, deleteDog, handleOpen } = useDogStore();
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} display={"flex"}>
        <Grid item xs={10}>
          <Typography variant="h4">Dog Overview</Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={() => handleOpen()} aria-label="add">
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
      {dogs.map((dog) => (
        <Grid key={dog.id} item xs={12} md={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => navigate(`/dogs/${dog.id}`)}>
              <CardMedia
                sx={{ height: 140 }}
                image={dog.imageUrl}
                title={dog.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`${dog.name} - ${dog.breed}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {dog.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" onClick={() => deleteDog(dog.id)}>
                Delete
              </Button>
              <Button size="small" onClick={() => handleOpen(dog)}>
                Edit
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Overview;
