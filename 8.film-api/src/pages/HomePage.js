import { useEffect, useState } from "react";
import { getAnimeList, getTopAnime } from "../api";
import * as React from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  Alert,
  Box,
  Stack,
  Card,
  CardMedia,
  Pagination,
} from "@mui/material";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
const ActionAreaCard = React.lazy(() => import("../components/Card"));

function HomePage() {
  const [animeTop, setAnimeTop] = useState([]);
  const [animeList, setAnimeList] = useState([]);
  const [notif, setNotif] = useState(false);
  const [paginate, setPaginate] = useState(1);
  const [slider, setSlider] = useState(0);
  console.log(animeList);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultList = await getAnimeList();
        setAnimeList(resultList);

        const resultTop = await getTopAnime();
        setAnimeTop(resultTop);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
    };

    fetchData();
  }, []);

  const notifBtn = () => {
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 2000);
  };

  const handlePagination = (event, value) => {
    setPaginate(value);
  };

  const AnimeSlider = animeTop.length !== 0 ? animeTop : "";
  return (
    <div style={{ padding:0,margin:0 }}>
      <Navbar setAnimeList={setAnimeList} />
      <Container maxWidth="lg" sx={{ mt: 4,mb:4 }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" gutterBottom>
            🎬 QIWAnime
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Temukan anime rekomendasi terbaik untukmu
          </Typography>
        </Box>

        <Grid mb={4}>
          <Typography variant="h4" textAlign="start" mb={5}>
            Top Anime
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
            spacing={2}
          >
            <Button
              variant="outlined"
              onClick={() =>
                setSlider(
                  (prev) => (prev - 1 + AnimeSlider.length) % AnimeSlider.length
                )
              }
              style={{ alignSelf: "center" }}
            >
              Prev
            </Button>
            {AnimeSlider.length >= 3 && (
              <Stack>
                <Card sx={{ display: "flex", flexWrap: "nowrap" }}>
                  {[0, 1, 2].map((offset) => {
                    const index = (slider + offset) % AnimeSlider.length;
                    const anime = AnimeSlider[index];
                    return (
                      <CardMedia
                        key={index}
                        component="img"
                        height={200}
                        image={anime?.images?.jpg?.large_image_url}
                        alt={anime?.title}
                        sx={{ width: 200 }}
                      />
                    );
                  })}
                </Card>

                <Typography align="center" mt={2} variant="h6">
                  {AnimeSlider[(slider + 1) % AnimeSlider.length]?.title}
                </Typography>
              </Stack>
            )}

            <Button
              variant="outlined"
              onClick={() =>
                setSlider((prev) => (prev + 1) % AnimeSlider.length)
              }
              style={{ alignSelf: "center" }}
            >
              Next
            </Button>
          </Stack>
        </Grid>

        <Grid>
          <Stack>
            <Typography>{AnimeSlider?.title}</Typography>
          </Stack>
        </Grid>
        <Stack direction={"row"} display="flex" justifyContent="space-between" mb={5}> 
        <Typography variant="h4">
            List Anime
          </Typography>
        <Link to="/list-anime"><h3>Lihat Semua</h3></Link>
        </Stack>
        <Grid container spacing={3}>
          <React.Suspense fallback="Loading...">
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
          </React.Suspense>
        </Grid>
        {/* {paginate} */}
        {/* <Stack direction={"row"} justifyContent={"center"}>
        <Pagination count={10} page={paginate} onChange={handlePagination} />
        </Stack> */}
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
