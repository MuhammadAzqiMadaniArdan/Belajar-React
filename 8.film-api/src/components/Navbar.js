import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { getAnimeSearch } from "../api";
import { MenuItem } from "@mui/material";

const pages = ["List Anime", "Popular", "Recommended"];

function Navbar({ setAnimeList }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (inputSearch.length > 3) {
      const query = await getAnimeSearch(inputSearch);
      setAnimeList(query);
      navigate(`/search?q=${inputSearch}`);
    }
  };

  // Menu navigasi
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            QIWANIME
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Search Box */}
          <div style={{ display: "flex", gap: 2 }}>
            <TextField
              id="standard-search"
              label="Cari Anime Favoritmu..."
              type="search"
              variant="standard"
              error={inputSearch.length > 0 && inputSearch.length < 4}
              helperText={
                inputSearch.length > 0 && inputSearch.length < 4
                  ? "Minimal 4 karakter"
                  : ""
              }
              InputProps={{
                style: { color: "white" }, 
              }}
              InputLabelProps={{
                style: { color: "white" }, 
              }}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Button
              type="button"
              onClick={handleSearch}
              sx={{ my: 1, color: "white", display: "block" }}
            >
              Search
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
