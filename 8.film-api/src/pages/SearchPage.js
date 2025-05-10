import { useEffect, useState } from "react";
import { getAnimeRecommendations, getAnimeSearch } from "../api";
import * as React from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  Alert,
  Box,
} from "@mui/material";
import Navbar from "../components/Navbar";
import ActionAreaCard from "../components/Card";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
  const [animeList, setAnimeList] = useState([]);
  const [notif, setNotif] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")

  useEffect(() => {
    getAnimeSearch(query).then((result) => {
      setAnimeList(result);
    });
  }, [query]);

  const notifBtn = () => {
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 2000);
  };

  return (
    <div className="App">
      <Navbar setAnimeList={setAnimeList} />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" gutterBottom>
            🎬 Azqi Movie
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Temukan anime rekomendasi terbaik untukmu
          </Typography>
        </Box>

        {notif && (
          <Alert severity="success" sx={{ mb: 3 }}>
            Notifikasi Telah Dinyalakan Bang ⭐⭐
          </Alert>
        )}

        <Box textAlign="center" mb={4}>
          <Typography variant="h6">Notifikasi</Typography>
          <Button variant="contained" onClick={notifBtn}>
            {notif ? "ON" : "OFF"}
          </Button>
        </Box>

        <Grid container spacing={3}>
          {animeList.map((anime) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={anime.mal_id}>
              <ActionAreaCard
                title={anime.title}
                image={anime.images?.jpg?.large_image_url}
                year={anime.year}
                score={anime.score}
                id={anime.mal_id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default SearchPage;
