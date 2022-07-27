import { Box, Container } from "@mui/material";
import { Img } from "../style/styled";

export const Loading = () => {
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
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Img src="img/loading.gif" width="200px" height="200px  " />
        </Box>
      </Container>
    </>
  );
};
