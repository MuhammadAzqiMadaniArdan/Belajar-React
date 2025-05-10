import { useEffect, useState } from "react";
import { getAnimeSearch, getAnimeDetail } from "../api";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Box,
  Divider,
  Stack,
} from "@mui/material";
import Navbar from "../components/Navbar";

function Anime() {
  const params = useParams();
  const [animeDetail, setAnimeDetail] = useState(null);
  const [notif, setNotif] = useState(false);

  useEffect(() => {
    getAnimeDetail(params.id).then((result) => {
      setAnimeDetail(result);
    });
  }, [params]);

  const notifBtn = () => {
    setNotif(true);
    setTimeout(() => {
      setNotif(false);
    }, 2000);
  };

  if (!animeDetail) return <Typography>Loading...</Typography>;

  console.log(animeDetail);
  return (
    <>
      <Navbar setAnimeList={setAnimeDetail} />
      <Box sx={{ p: 4 }}>
        <Typography variant="h3" gutterBottom>
          {animeDetail.title}
        </Typography>
        <Grid container spacing={4} direction="row">
          {/* Gambar */}
          <Grid item xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="450"
                image={animeDetail.images?.webp?.large_image_url}
                alt={animeDetail.title}
              />
            </Card>
          </Grid>

          {/* Teks dan informasi */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="h5">Sinopsis</Typography>
              <Typography variant="body1" color="text.secondary">
                {animeDetail.synopsis || "Sinopsis tidak tersedia."}
              </Typography>

              <Divider />

              <Typography variant="h6">Informasi</Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip label={`Skor: ${animeDetail.score || "-"}`} />
                <Chip label={`Tahun Rilis: ${animeDetail.year || "-"}`} />
                <Chip
                  label={`Tanggal Rilis: ${
                    animeDetail.aired?.from?.slice(0, 10) || "-"
                  }`}
                />
                <Chip label={`Status: ${animeDetail.status || "-"}`} />
              </Stack>

              {animeDetail.producers?.length > 0 && (
                <>
                  <Divider />
                  <Typography variant="h6">Produser</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {animeDetail.producers.map((prod, index) => (
                      <Chip key={index} label={prod.name} />
                    ))}
                  </Stack>
                </>
              )}
            </Stack>
          </Grid>
        </Grid>

        {animeDetail.trailer?.embed_url && (
          <Box mt={6}>
            <Typography variant="h5" gutterBottom>
              Trailer
            </Typography>
            <Box sx={{ position: "relative", pb: "56.25%", height: 0 }}>
              <iframe
                src={animeDetail.trailer.embed_url}
                title="Trailer"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                frameBorder="0"
                allowFullScreen
              />
            </Box>
          </Box>
        )}
          <Box mt={6}>
            <Typography variant="h5" gutterBottom>
              Link Resmi
            </Typography>
              <Link
                title="Trailer"
                to={animeDetail?.url}
              >Go </Link>
            </Box>
      </Box>
    </>
  );
}

export default Anime;
