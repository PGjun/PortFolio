import { Box, Container } from "@mui/material";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            m: 5,
            mt: 2,
            background: "#f5f5f5",
            borderRadius: "5px",
            p: 5,
            boxShadow: "0px 0px 5px 1px #ccc",
            height: "42rem",
          }}
        >
          <Carousel />
        </Box>
      </Container>
    </>
  );
}
