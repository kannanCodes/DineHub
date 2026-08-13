import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 3,
        }}
      >
        <Typography variant="h2" fontWeight={800} color="primary">
           Dine Hub
        </Typography>

        <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
          Manage your favorite restaurants in one simple place.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/restaurants")}
          sx={{ px: 4, py: 1.5, fontSize: "1.2rem" }}
        >
          View Restaurants
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
