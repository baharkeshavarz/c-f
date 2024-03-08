"use client"

import React from "react"
import Link from "next/link"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import { Tabs, Tab, useMediaQuery, useTheme } from "@mui/material"
import InfoIcon from "@mui/icons-material/Info"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import TimelineIcon from "@mui/icons-material/Timeline"
import AddReactionIcon from "@mui/icons-material/AddReaction"
import ContactMailIcon from "@mui/icons-material/ContactMail"

import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu
} from "@mui/material"

import { Home } from "@mui/icons-material"
import Logo from "./logo"
import LocaleSwitcher from "./locale-switcher"
import { Locale } from "@/i18n.config"

interface NavbarProps {
  lang: Locale
  t: any
}

const ResponsiveAppBar = ({ lang, t }: NavbarProps) => {
  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <Container
        maxWidth="xl"
        className="sticky top-0 z-10 h-max max-w-full rounded-none bg-black opacity-90 lg:px-8 lg:py-2"
      >
        <div className="mx-auto max-w-6xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <IconButton sx={{ p: 0 }}>
                <Logo />
              </IconButton>
              <Menu
                id="menu-appbar-avatar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top", // Adjust to match the new position
                  horizontal: "right"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none", padding: 0 }
                }}
              >
                <List className="w-screen">
                  <ListItemButton>
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <Link
                      href="/about"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <ListItemText
                        onClick={handleCloseNavMenu}
                        primary={"Home"}
                      />{" "}
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <Link
                      href="/about"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <ListItemText
                        onClick={handleCloseNavMenu}
                        primary={"About"}
                      />{" "}
                    </Link>
                  </ListItemButton>

                  <ListItemButton>
                    <ListItemIcon>
                      <ManageAccountsIcon />
                    </ListItemIcon>
                    <Link
                      href="/skills"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <ListItemText
                        onClick={handleCloseNavMenu}
                        primary={"Skills"}
                      />
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <TimelineIcon />
                    </ListItemIcon>
                    <Link
                      href="/projects"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <ListItemText
                        onClick={handleCloseNavMenu}
                        primary={"Projects"}
                      />
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <AddReactionIcon />
                    </ListItemIcon>
                    <Link
                      href="/blogs"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <ListItemText
                        onClick={handleCloseNavMenu}
                        primary={"Blogs"}
                      />
                    </Link>
                  </ListItemButton>
                  <ListItemButton>
                    <ListItemIcon>
                      <ContactMailIcon />
                    </ListItemIcon>
                    <Link
                      href="/contact"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <ListItemText
                        onClick={handleCloseNavMenu}
                        primary={"Contact"}
                      />
                    </Link>
                  </ListItemButton>
                </List>
              </Menu>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", md: "none" }
              }}
            >
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
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mx: 10
              }}
            >
              {isMatch ? (
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
              ) : (
                <>
                  <Tabs
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <LocaleSwitcher t={t} />
                    <Tab
                      value="one"
                      label={<p>Home</p>}
                      onClick={() => {
                        window.location.href = "/"
                      }}
                      style={{
                        textDecoration: "none",
                        color: theme.palette.primary.main
                      }}
                      className="hover:p-0.2 hover:rounded-md hover:bg-white/10"
                    />
                    <Tab
                      label={
                        <Link
                          href="/about"
                          style={{
                            textDecoration: "none",
                            color: "white",
                            opacity: "1"
                          }}
                        >
                          <p> About</p>
                        </Link>
                      }
                      className="hover:p-0.2 hover:rounded-md hover:bg-white/10"
                    ></Tab>

                    <Tab
                      value="three"
                      label={
                        <p>
                          <Link
                            href="/skills"
                            style={{
                              textDecoration: "none",
                              color: "white"
                            }}
                          >
                            {" "}
                            Skills
                          </Link>
                        </p>
                      }
                      className="hover:p-0.2 hover:rounded-md hover:bg-white/10"
                    />

                    <Tab
                      value="three"
                      label={
                        <p>
                          <Link
                            href="/projects"
                            style={{
                              textDecoration: "none",
                              color: "white"
                            }}
                          >
                            Projects
                          </Link>
                        </p>
                      }
                      className="Tab3 animate__animated animate__zoomIn"
                    />

                    <Tab
                      value="three"
                      label={
                        <p>
                          <Link
                            href="/blogs"
                            style={{
                              textDecoration: "none",
                              color: "white"
                            }}
                          >
                            {" "}
                            Blogs
                          </Link>
                        </p>
                      }
                      className="hover:p-0.2 hover:rounded-md hover:bg-white/10"
                    />
                    <Tab
                      value="three"
                      label={
                        <p>
                          <Link
                            href="/contact"
                            style={{
                              textDecoration: "none",
                              color: "white"
                            }}
                          >
                            Contact
                          </Link>
                        </p>
                      }
                      className="hover:p-0.2 hover:rounded-md hover:bg-white/10"
                    />
                  </Tabs>
                </>
              )}
            </Box>
          </Toolbar>
        </div>
      </Container>
    </>
  )
}
export default ResponsiveAppBar
