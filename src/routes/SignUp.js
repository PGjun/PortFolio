//리액트
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//스타일
import { CenterDiv } from "../style/styled";

//MUI 스타일
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

//외부함수
import { postEmail, postLoginData } from "../api";

function CheckEmail(str) {
  const emailtype =
    /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  if (!emailtype.test(str)) {
    return false;
  } else {
    return true;
  }
}

export default function SignUp() {
  const [getNumber, setGetNumber] = useState("");
  const [signupComplete, setSignupComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (signupComplete) {
      navigate(-1);
    }
  }, [signupComplete]);

  const SendEmail = () => {
    let clientEmail = document.getElementById("email").value;

    if (!clientEmail) {
      alert("이메일을 입력해주세요");
    } else if (!CheckEmail(clientEmail)) {
      alert("이메일 형식이 잘못되었습니다");
    } else {
      alert("입력하신 이메일로 인증번호가 전송되었습니다!");
      console.log(clientEmail);
      const data = "/mail/auth";
      const props = { path: data, userEmail: clientEmail };
      const response = postEmail(props);
      response.then((res) => {
        if (res.isSuccess) {
          setGetNumber(res.result);
        }
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const Number = e.target.number.value;
    const id = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const data = "/auth/signup";
    const props = { path: data, userEmail: id, userPassword: password };

    if (parseInt(getNumber) === parseInt(Number)) {
      console.log("인증번호가 일치");
      if (password === confirmPassword) {
        console.log("비밀번호 일치");
        const response = postLoginData(props);
        response.then((res) => {
          if (!res.isSuccess) {
            alert(`${res.message}`);
            console.log(id, password);
          } else {
            alert("회원가입 되었습니다");
            setSignupComplete(true);
          }
        });
      } else {
        alert("비밀번호가 일치하지 않습니다!");
      }
    } else {
      alert("인증번호가 일치하지 않습니다!");
    }
  };
  return (
    <>
      <CenterDiv
        width="25%"
        boxShadow="0px 0px 5px 1px #ccc"
        borderRadius="2px"
        backgroundColor="white"
        padding="0rem 5rem 0rem 5rem"
        textAlign="none"
      >
        <form onSubmit={onSubmit}>
          <Typography
            sx={{
              fontSize: "30px",
              color: "coral",
              m: 2,
              pt: 5,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            회원가입
          </Typography>
          <Divider sx={{ margin: "2rem 0rem 3rem 0rem" }} />
          <Typography component="h1" varient="h5" style={{ color: "black" }}>
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
          <Grid container>
            <Grid item xs={8}>
              <Typography
                component="h1"
                varient="h5"
                style={{ color: "black" }}
              >
                인증번호
              </Typography>
              <TextField
                color="warning"
                sx={{ mt: 1, mb: 2 }}
                label="Certification Number"
                required
                fullWidth
                name="Certification Number"
                autoComplete="Certification Number"
                id="number"
              />
            </Grid>
            <Grid item xs={4}>
              <Button sx={{ mt: 5, ml: 1 }} onClick={SendEmail}>
                인증번호 발송
              </Button>
            </Grid>
          </Grid>

          <Typography component="h1" varient="h5" style={{ color: "black" }}>
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
          <Typography component="h1" varient="h5" style={{ color: "black" }}>
            비밀번호 재확인
          </Typography>
          <TextField
            color="warning"
            sx={{ mt: 1, mb: 2 }}
            label="confirm password"
            type="password"
            fullWidth
            name="confirmPassword"
            autoComplete="current-password"
            required
            id="confirmPassword"
          />
          <FormControlLabel
            control={<Checkbox required />}
            label="E-Mail 수신에 동의합니다"
          />
          <Button
            color="warning"
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 7, background: "coral" }}
          >
            가입하기
          </Button>
        </form>
      </CenterDiv>
    </>
  );
}
