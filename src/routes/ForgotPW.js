//리액트
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//스타일
import { CenterDiv } from "../style/styled";

//MUI스타일
import { Typography, TextField, Button, Divider, Grid } from "@mui/material";

//외부함수
import { postEmail, postFindPWD } from "../api";

export default function ForgotPW() {
  const [getAthNumber, setAthNumber] = useState("");
  const navigate = useNavigate();

  function CheckEmail(str) {
    const emailtype =
      /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (!emailtype.test(str)) {
      return false;
    } else {
      return true;
    }
  }

  const sendNumber = () => {
    const userEmail = document.getElementById("email").value;
    console.log(userEmail);
    if (!userEmail) {
      alert("이메일을 입력해주세요");
    } else if (!CheckEmail(userEmail)) {
      alert("이메일 형식이 잘못되었습니다");
    } else {
      const path = "/mail/auth";
      const props = { path, userEmail };
      const response = postEmail(props);
      response.then((res) => {
        if (res.isSuccess) {
          setAthNumber(res.result);
          alert(`${res.message}`);
        }
      });
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const path = "/mail/pwd";
    const inputNumber = e.target.AthNumber.value;
    const userPassword = e.target.NewPassword.value;
    const userEmail = e.target.email.value;

    if (parseInt(getAthNumber) === parseInt(inputNumber)) {
      console.log("인증번호가 일치");
      const props = { path, userPassword, userEmail };
      const response = postFindPWD(props);
      response.then((res) => {
        if (res.isSuccess) {
          alert(`${res.message}`);
          navigate("/"); // 새로고침 문제
        }
      });
    } else {
      alert("비밀번호가 일치하지 않습니다!");
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
            비밀번호 변경
          </Typography>
          ​
          <Divider sx={{ margin: "0rem 0rem 3rem 0rem" }} />​
          <Typography sx={{ color: "dimgray", mb: 3 }}>
            가입한 이메일 주소를 입력해주세요
            <br />
            비밀번호 재설정을 위한 인증번호를 보내드립니다
          </Typography>
          ​
          <Typography sx={{ color: "dodgerblue", mb: 3 }}>
            이메일은 대소문자를 구분해서 입력해주세요
          </Typography>
          ​
          <Typography component="h1" varient="h5">
            이메일
          </Typography>
          ​
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
                label="인증번호"
                required
                fullWidth
                name="AthNumber"
                autoComplete="인증번호"
                autoFocus
                id="AthNumber"
              />
            </Grid>
            <Grid item xs={4}>
              <Button
                sx={{ mt: 4, ml: 1 }}
                variant="outlined"
                onClick={sendNumber}
                style={{
                  maxWidth: "150px",
                  maxHeight: "80px",
                  minWidth: "150px",
                  minHeight: "56px",
                }}
              >
                인증번호 발송
              </Button>
            </Grid>
          </Grid>
          ​
          <Typography component="h1" varient="h5">
            새 비밀번호
          </Typography>
          ​
          <TextField
            color="warning"
            sx={{ mt: 1, mb: 3 }}
            label="New password"
            required
            fullWidth
            name="NewPassword"
            autoComplete="email"
            autoFocus
            id="NewPassword"
          />
          ​
          <Button
            color="warning"
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              mb: 7,
              background: "coral",
              fontSize: "1rem",
              p: 1,
            }}
          >
            확인
          </Button>
        </form>
      </CenterDiv>
    </>
  );
}
