import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const Hot_URL =
    "https://images.unsplash.com/photo-1604949210966-9440c324823f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const Cold_URL =
    "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=612x612&w=0&k=20&c=LKQgMoqdgHP5PkelvEMdwXhCMG_M1XhGoFT27-Hjrk4=";
  const Rain_URL =
    "https://images.unsplash.com/photo-1692362385851-cf68a6d9604b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="info">
      <h2>Weather-Info</h2>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345, backgroundColor: "black" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={
                (info.humidity > 80 ||
                  info.weather.toLowerCase().includes("rain")) &&
                info.temp > 15
                  ? Rain_URL
                  : info.temp > 15
                    ? Hot_URL
                    : Cold_URL
              }
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "rgb(0 255 234)" }}
              >
                {info.city.toUpperCase()+" "}
                {(info.humidity > 80 ||
                  info.weather.toLowerCase().includes("rain")) &&
                info.temp > 15 ?
                  <ThunderstormIcon />
                : info.temp > 15 ?
                  <SunnyIcon />
                :
                  <AcUnitIcon />
                }
              </Typography>
              <Typography variant="body2" component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min Temp = {info.minTemp}&deg;C</p>
                <p>Max Temp = {info.maxTemp}&deg;C</p>
                <p>
                  The weather can be described as {info.weather} and feels like{" "}
                  {info.feelsLike}&deg;C
                </p>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
