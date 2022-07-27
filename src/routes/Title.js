//리액트
import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

//스타일
import "../style/font.css";
import { CenterDiv, Img } from "../style/styled";

//MUI 스타일
import {
  Paper,
  IconButton,
  InputBase,
  Box,
  Grid,
  Zoom,
  Tooltip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

//컨텍스트
import { AllDBdataContext } from "../contexts/AllDBdataContext";
import { DBdataContext } from "../contexts/DBdataContext";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { LoadingContext } from "../contexts/LoadingContext"; //로딩 컨텍스트

//컴포넌트
import SelectArea from "../components/SelectArea";

//외부함수
import { postSearchData } from "../api";
// import { dummydata } from "../script/dummydata"; //더미데이터
//

export default function Title() {
  //
  const { setSearchData } = useContext(SearchDataContext);
  const { setDBdata } = useContext(DBdataContext);
  const { setAllDBdata } = useContext(AllDBdataContext);
  const { setLoading } = useContext(LoadingContext); //로딩

  //
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true); //로딩
    const city = e.target[0].value;
    const area = e.target[1].value;
    const value = e.target[2].value;
    console.log(city, area, value);
    const data = "/db/test";
    const props = {
      path: data,
      userCity: city,
      userArea: area,
      userValue: value,
    };
    // setTitleOn(false);
    setSearchData((searchData) => ({
      ...props,
    }));
    const response = postSearchData(props);
    response.then((res) => {
      if (res.isSuccess) {
        if (e.target[0].value === "전국") {
          setDBdata(res.result.total);
        } else {
          setDBdata(res.result.local);
        }
        setAllDBdata(res.result.total);
        navigate("/statistics");
      } else {
        alert(`${res.message}`);
      }
      setLoading(false);
    });
    //더미데이터 쓸때
    // setDBdata(dummydata);
    // setAllDBdata(dummydata);
    // navigate("/statistics");
    //더미더미
  };

  const [sideBar, setSideBar] = useState(false);

  window.onload = function () {
    setSideBar(true);
  };

  return (
    <>
      {/* 타이틀 화면 구현 */}
      <CenterDiv
        width="40%"
        boxShadow="0px 0px 5px 1px #ccc"
        borderRadius="7px"
        backgroundColor="#f5f5f5"
      >
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item sx={{ margin: 3 }}></Grid>
        </Grid>
        <Grid container sx={{ mt: 35 }}>
          <Grid item xs={12}>
            <Box
              sx={{
                typography: "Watch Rabbit",
                fontSize: 60,
                letterSpacing: 8,
                color: "#ff803d",
                fontFamily: "ulsanjunggu",
              }}
            >
              Watch<span style={{ color: "#357a38" }}>Rabbit</span>
              <Img src="/img/carrot.png" width="65px" />
            </Box>
          </Grid>
          <Grid item xs={2} sx={{ mt: 5 }}></Grid>
          <Grid item xs={8} sx={{ mt: 7 }}>
            {/* 검색창 */}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "98%",
              }}
              onSubmit={onSubmit}
            >
              <SelectArea />
              <InputBase
                sx={{ ml: 2, flex: 1 }}
                placeholder="검색할 물품을 입력하세요"
              />
              <IconButton type="submit" sx={{ p: "10px" }}>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>

          <Grid item xs={12} sx={{ m: 15 }}>
            <Link to="/main">
              <Tooltip title="Main Page" arrow TransitionComponent={Zoom}>
                <IconButton>
                  <HomeIcon fontSize="large" />
                </IconButton>
              </Tooltip>
            </Link>
          </Grid>
        </Grid>
      </CenterDiv>

      <Box
        sx={{
          height: "100vh",
          width: "100%",
          background: "rgba(0, 0, 0, 0.8)",
          position: "absolute",
          opacity: sideBar ? "100%" : "0%",
          top: sideBar ? "0%" : "-100%",
          transitionDuration: "1s",
          boxShadow: "0px 0px 50px 10px dimgray",
        }}
        onClick={() => setSideBar(false)}
      >
        <IconButton
          onClick={() => setSideBar(false)}
          sx={{ position: "absolute", top: "95%", left: "48.7%" }}
        >
          <ArrowDropUpIcon fontSize="large" sx={{ color: "white" }} />
        </IconButton>
        <Box
          sx={{
            color: "white",
            position: "absolute",
            left: "35%",
            top: "10%",
            textAlign: "center",
          }}
        >
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>검색창에 시세를 알고싶은 중고물품을 검색해보세요!</h2>
          <p />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          홈아이콘 클릭시 홈페이지로 이동합니다.
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "48.7%",
          top: sideBar ? "-20%" : "-2%",
          transitionDuration: "1s",
        }}
      >
        <IconButton
          sx={{ opacity: sideBar ? "0%" : "100%" }}
          onClick={() => setSideBar(true)}
        >
          <ArrowDropDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
}
