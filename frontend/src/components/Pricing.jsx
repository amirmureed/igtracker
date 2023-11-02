import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Pricing.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import NavBar from "./Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Pricing = () => {
  return (
    <>
      <NavBar />
      <Box
        component="section"
        sx={{
          background: "#f5f3f3",
          px: 10,
          py: 5,
          mt: 8,
          borderRadius: "15px",
        }}
        style={{ marginLeft: "50px", marginRight: "50px" }}
      >
        <Typography
          variant="h3"
          sx={{
            pt: 1,
            pb: 6,
            textAlign: "center",
            fontWeight: "600",
            letterSpacing: "5px",
          }}
        >
          Simple transparent pricing
        </Typography>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center"
          >
            <Grid item md={4} elevation={0}>
              <Item sx={{ borderRadius: "8px" }}>
                <Card
                  sx={{ minWidth: 290 }}
                  elevation={0}
                  style={{ justifyContent: "start" }}
                >
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "start",
                      }}
                      gutterBottom
                    >
                      Basic
                    </Typography>
                    <h2 className="subscription-price">
                      $19 <span className="sub-freq">/ Month</span>
                    </h2>
                    <p className="subscription-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus maiores sequi, in adipisci eaque.
                    </p>
                    <Typography variant="body">
                      <ul>
                        <li>All Limited Links</li>
                        <li>Chat and Email Support</li>
                        <li>24/7 Live Class Support</li>
                        <li>All Limited Links</li>
                        <li>Chat and Email Support</li>
                        <li>24/7 Live Class Support</li>
                        <li>All Limited Links</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "start" }}>
                    <Button variant="contained">Buy Now</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item md={4}>
              <Item sx={{ borderRadius: "8px" }}>
                <Card sx={{ minWidth: 290 }} elevation={0}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "start",
                      }}
                      gutterBottom
                    >
                      Basic
                    </Typography>
                    <h2 className="subscription-price">
                      $19 <span className="sub-freq">/ Month</span>
                    </h2>
                    <p className="subscription-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus maiores sequi, in adipisci eaque.
                    </p>
                    <Typography variant="body">
                      <ul>
                        <li>All Limited Links</li>
                        <li>Chat and Email Support</li>
                        <li>24/7 Live Class Support</li>
                        <li>All Limited Links</li>
                        <li>Chat and Email Support</li>
                        <li>24/7 Live Class Support</li>
                        <li>All Limited Links</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained">Buy Now</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
            <Grid item md={4}>
              <Item sx={{ borderRadius: "8px" }}>
                <Card sx={{ minWidth: 290 }} elevation={0}>
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "start",
                      }}
                      gutterBottom
                    >
                      Basic
                    </Typography>
                    <h2 className="subscription-price">
                      $19 <span className="sub-freq">/ Month</span>
                    </h2>
                    <p className="subscription-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Necessitatibus maiores sequi, in adipisci eaque.
                    </p>
                    <Typography variant="body">
                      <ul>
                        <li>All Limited Links</li>
                        <li>Chat and Email Support</li>
                        <li>24/7 Live Class Support</li>
                        <li>All Limited Links</li>
                        <li>Chat and Email Support</li>
                        <li>24/7 Live Class Support</li>
                        <li>All Limited Links</li>
                      </ul>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained">Buy Now</Button>
                  </CardActions>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Pricing;
