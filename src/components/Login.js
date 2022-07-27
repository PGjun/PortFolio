import { TextField, Button, Typography, Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { postGoogle, postLoginData, postKakao } from "../api";
import { Img } from "../style/styled";
import { useContext } from "react";
import { LoginDataContext } from "../contexts/LoginDataContext";

const GoogleButton = styled(Button)({
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#ddd",
  },
});
const KakaoButton = styled(Button)({
  backgroundColor: "#fae100",
  color: "black",
  "&:hover": {
    backgroundColor: "#FFD700",
  },
});

export default function Login() {
  const { setLogin } = useContext(LoginDataContext);

  const onSubmit = (e) => {
    console.log("login complete");
    e.preventDefault();
    const id = e.target.email.value;
    const password = e.target.password.value;
    const data = "/auth/signin";
    const props = { path: data, userEmail: id, userPassword: password };
    console.log(id, password);
    const response = postLoginData(props);
    response.then((res) => {
      if (res.isSuccess) {
        setLogin((login) => ({
          ...login,
          TrueFalse: res.isSuccess,
          profileImage:
            "https://watchrabbit.s3.ap-northeast-2.amazonaws.com/carrot+(1).png",
        }));
        alert(`${res.message}`);
        window.location.replace("/main");
      } else {
        alert(`${res.message}`);
      }
    });
  };

  const googleClick = () => {
    const data = "/auth/google";
    const props = { path: data };
    const response = postGoogle(props);
    response.then((res) => {
      console.log(res);
      console.log("구글로 이동");
      const isSuccess = res.isSuccess;
      const profile_image = res.result.profile_image;
      const props = { TrueFalse: isSuccess, profileImage: profile_image };
      setLogin((login) => ({
        ...props,
      }));
    });
  };
  const kakaoClick = () => {
    const data = "/auth/kakao";
    const props = { path: data };
    const response = postKakao(props);
    response.then((res) => {
      if (res.isSuccess) {
        const profile_image = res.result.profile_image;
        setLogin((login) => ({
          ...login,
          TrueFalse: true,
          profileImage: profile_image,
        }));
        window.location.replace("/main");
      } else {
        alert(`${res.message}`);
      }
    });
  };
  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ background: "white" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
              color: "coral",
              m: 2,
              mb: 4,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            로그인
          </Typography>

          <form onSubmit={onSubmit}>
            <Typography component="h1" varient="h5">
              이메일
            </Typography>
            <TextField
              color="warning"
              sx={{ mt: 1, mb: 2 }}
              label="email"
              required
              fullWidth
              name="email"
              autoComplete="email"
              autoFocus
              id="email"
            />
            <Typography component="h1" varient="h5">
              비밀번호
            </Typography>
            <TextField
              color="warning"
              sx={{ mt: 1, mb: 2 }}
              label="password"
              type="password"
              fullWidth
              name="password"
              autoComplete="current-password"
              required
              id="password"
            />

            <Button
              type="submit"
              color="warning"
              fullWidth
              variant="contained"
              sx={{ mt: 3, background: "" }}
            >
              로그인
            </Button>
            <a
              href="https://www.watchrabbit.co.kr:8443/auth/google"
              style={{ textDecoration: "none" }}
            >
              <GoogleButton
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
                onClick={googleClick}
              >
                <Img
                  src="/img/googlelogo.png"
                  width="20px"
                  position="absolute"
                  left="10px"
                />
                구글로 로그인
              </GoogleButton>
            </a>
            <a
              href="https://www.watchrabbit.co.kr:8443/auth/kakao"
              style={{ textDecoration: "none" }}
            >
              <KakaoButton
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 4, background: "" }}
                onClick={kakaoClick}
              >
                <Img
                  src="/img/kakaologo.png"
                  width="30px"
                  position="absolute"
                  left="7px"
                />
                카카오로 로그인
              </KakaoButton>
            </a>
          </form>
        </Box>
      </Container>
    </>
  );
}
