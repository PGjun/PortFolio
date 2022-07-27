//리액트
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

//스타일
import { Img } from "../style/styled";
import "../style/font.css";

//MUI 스타일
import {
  Button,
  Paper,
  IconButton,
  InputBase,
  Box,
  Grid,
  Container,
  Tooltip,
  Avatar,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

// 로그인 모달 import
import Modal from "react-modal";
import Login from "./Login";
import CloseIcon from "@mui/icons-material/Close";

//컨텍스트
import { LoginDataContext } from "../contexts/LoginDataContext";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { DBdataContext } from "../contexts/DBdataContext";
import { AllDBdataContext } from "../contexts/AllDBdataContext";
import { LoadingContext } from "../contexts/LoadingContext"; //로딩 컨텍스트

//컴포넌트
import SelectArea from "../components/SelectArea";

//외부함수
import { getLoginStatus, getLogOut, postSearchData } from "../api";
import { dummydata } from "../script/dummydata"; //더미데이터

export default function Header() {
  //컨택스트
  const { setSearchData } = useContext(SearchDataContext);
  const { setDBdata } = useContext(DBdataContext);
  const { setAllDBdata } = useContext(AllDBdataContext);
  const { setLoading } = useContext(LoadingContext); //로딩

  //스테이트
  const [modalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState({
    TrueFalse: false,
    profileImage: "",
  });
  const navigate = useNavigate();

  //함수
  useEffect(() => {
    async function test() {
      const data = "/auth/loginstatus";
      const props = { path: data };
      const response = await getLoginStatus(props);
      if (response.isSuccess) {
        setLogin((login) => ({
          ...login,
          TrueFalse: true,
          profileImage:
            "https://watchrabbit.s3.ap-northeast-2.amazonaws.com/carrot+(1).png",
        }));
      }
    }
    test();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true); //로딩
    const city = e.target[0].value;
    const area = e.target[1].value;
    const value = e.target[2].value;
    const data = "/db/test";
    const props = {
      path: data,
      userCity: city,
      userArea: area,
      userValue: value,
    };
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
    });
    //더미데이터 쓸때
    setDBdata(dummydata);
    setAllDBdata(dummydata);
    navigate("/statistics");
    setLoading(false);
    //더미더미
  };
  const LogOut = () => {
    const data = "/auth/logout";
    const props = { path: data };
    const response = getLogOut(props);
    response.then((res) => {
      if (res.isSuccess) {
        setLogin((login) => ({
          ...login,
          TrueFalse: false,
          profileImage: "",
        }));
        // window.location.replace("/main");
      } else {
        alert(`${res.message}`);
      }
    });
  };

  if (window.location.pathname === "/") {
    return null;
  } else if (window.location.pathname === "/signup") {
    return null;
  } else if (window.location.pathname === "/forgotpw") {
    return null;
  }

  return (
    <>
      <Container maxWidth="xl">
        <Grid>
          <Box
            sx={{
              mb: 2,
              ml: 5,
              mr: 5,
              background: "#f5f5f5",
              borderRadius: "0px 0px 5px 5px",
              boxShadow: "0px 0px 5px 1px #ccc",
              p: 2,
            }}
          >
            <Grid container>
              <Grid item xs={3} sx={{ textAlign: "center" }}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    size="small"
                    color="warning"
                    sx={{
                      typography: "Watch Rabbit",
                      fontSize: "2rem",
                      letterSpacing: 3,
                      color: "coral",
                      fontFamily: "ulsanjunggu",
                      borderRadius: "1rem",
                    }}
                  >
                    Watch <span style={{ color: "#357a38" }}>Rabbit</span>
                    <Img src="/img/carrot.png" width="35px" />
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={5}>
                <Paper
                  component="form"
                  action="/statistics"
                  sx={{
                    mt: 1,
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "90%",
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
              <Grid item xs={3}>
                <Box sx={{ display: "flex", float: "left" }}>
                  <NotificationsIcon
                    sx={{ color: "coral", m: 2, verticalAlign: "middle" }}
                  />
                  <div style={{ color: "dimgray", marginTop: "1.1rem" }}>
                    5개의 물품을 추적중입니다...
                  </div>
                </Box>
              </Grid>
              <Grid item xs={1}>
                {/* 로그인 모달 버튼 */}
                {login.TrueFalse ? (
                  <Tooltip title="로그아웃">
                    <Button color="warning" sx={{ m: 1 }} onClick={LogOut}>
                      <Avatar>
                        <Img src={login.profileImage} width="50px" />
                      </Avatar>
                    </Button>
                  </Tooltip>
                ) : (
                  <Tooltip title="로그인">
                    <Button
                      color="warning"
                      sx={{ m: 1 }}
                      onClick={() => setModalOpen(true)}
                    >
                      <Avatar></Avatar>
                    </Button>
                  </Tooltip>
                )}
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Divider
                    sx={{
                      color: "gray",
                      mb: 2,
                      fontFamily: "KoPubDotumMedium",
                    }}
                  >
                    menu
                  </Divider>

                  <Box>
                    <Link
                      to="/statistics"
                      style={{ textDecorationLine: "none" }}
                    >
                      {window.location.pathname === "/statistics" ? (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "#1c751c",
                          }}
                          variant="contained"
                          color="success"
                        >
                          시세 통계
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "coral",
                          }}
                          variant="contained"
                          color="warning"
                        >
                          시세 통계
                        </Button>
                      )}
                    </Link>
                    <Link to="/search" style={{ textDecorationLine: "none" }}>
                      {window.location.pathname === "/search" ? (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "#1c751c",
                          }}
                          variant="contained"
                          color="success"
                        >
                          판매 현황
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "coral",
                          }}
                          variant="contained"
                          color="warning"
                        >
                          판매 현황
                        </Button>
                      )}
                    </Link>

                    <Link to="/share" style={{ textDecorationLine: "none" }}>
                      {window.location.pathname === "/share" ? (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "#1c751c",
                          }}
                          variant="contained"
                          color="success"
                        >
                          나눔 현황
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "coral",
                          }}
                          variant="contained"
                          color="warning"
                        >
                          나눔 현황
                        </Button>
                      )}
                    </Link>

                    <Link to="/trace" style={{ textDecorationLine: "none" }}>
                      {window.location.pathname === "/trace" ? (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "#1c751c",
                          }}
                          variant="contained"
                          color="success"
                        >
                          추적 알림
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "coral",
                          }}
                          variant="contained"
                          color="warning"
                        >
                          추적 알림
                        </Button>
                      )}
                    </Link>
                    <Link to="/main" style={{ textDecorationLine: "none" }}>
                      {window.location.pathname === "/main" ? (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "#1c751c",
                          }}
                          variant="contained"
                          color="success"
                        >
                          사이트 안내
                        </Button>
                      ) : (
                        <Button
                          sx={{
                            ml: 2,
                            fontWeight: "bold",
                            color: "white",
                            background: "coral",
                          }}
                          variant="contained"
                          color="warning"
                        >
                          사이트 안내
                        </Button>
                      )}
                    </Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* 로그인 모달 */}
          <Modal
            style={{
              overlay: {
                background: "rgba(0, 0, 0, 0.7)",
              },
              content: {
                position: "absolute",
                top: "12%",
                left: "36.7%",
                background: "white",
                border: "none",
                width: "23rem",
                height: "33rem",
                boxShadow: "0px 0px 5px 1px dimgray",
              },
            }}
            closeTimeoutMS={300}
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
          >
            <IconButton
              sx={{ position: "absolute", top: "2%", left: "88%" }}
              onClick={() => setModalOpen(false)}
            >
              <CloseIcon color="warning" />
            </IconButton>
            <LoginDataContext.Provider value={{ login, setLogin }}>
              <Login />
            </LoginDataContext.Provider>

            <Grid container>
              <Grid item xs sx={{ ml: 3 }}>
                <Link to="/forgotpw" style={{ color: "dodgerblue" }}>
                  비밀번호 찾기
                </Link>
              </Grid>
              <Grid item sx={{ mr: 3 }}>
                <Link to="/signup" style={{ color: "dodgerblue" }}>
                  회원가입
                </Link>
              </Grid>
            </Grid>
          </Modal>
        </Grid>
      </Container>
    </>
  );
}
