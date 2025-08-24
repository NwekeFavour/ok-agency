import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = ["Demos", "Pages", "Support", "Contact"];

export default function ResponsiveNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="!bg-transparent !shadow-none" position="static" >
      <Container className=" lg:!max-w-[1200px] text-[#000]">
        <Toolbar className=" flex justify-center" disableGutters>
          {/* Logo / Brand Name (desktop) */}

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo (mobile) */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 600,
            }}
            className="title"
          >
            Ok
          </Typography>

          {/* Desktop Nav Links */}
          <Box className="" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Typography className="flex items-center title"
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontWeight: 600 }}
            >
                Ok
            </Typography>
            <div className=" flex space-x-4">
                {pages.map((page) => (
                <Link
                    className=" px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-black"
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                >
                    {page}
                    
                </Link>
                ))}
            </div>
          </Box>

          {/* Right side (optional - profile/login button) */}
          <Box sx={{ flexGrow: 0 }}>
            <Button className="!bg-[#473BF0] !border-none !capitalize" variant="contained" color="secondary">
              Start a Project
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
