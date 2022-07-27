//리액트
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//라우터
import Title from "./routes/Title";
import Statistics from "./routes/Statistics";
import Search from "./routes/Search";
import Share from "./routes/Share";
import Trace from "./routes/Trace";
import Home from "./routes/Home";
import SignUp from "./routes/SignUp";
import ForgotPW from "./routes/ForgotPW";

//컨텍스트
import { SearchDataContext } from "./contexts/SearchDataContext";
import { DBdataContext } from "./contexts/DBdataContext";
import { AllDBdataContext } from "./contexts/AllDBdataContext";
import { LoadingContext } from "./contexts/LoadingContext";

//컴포넌트
import Header from "./components/Header";
import { Loading } from "./components/Loading";

function App() {
  const [searchData, setSearchData] = useState({
    userCity: "",
    userArea: "",
    userValue: "",
  });
  const [DBdata, setDBdata] = useState([
    {
      URL: "",
      Title: "",
      Price: "0",
      Classification: "",
      Region: "",
      Province: "",
      Nickname: "",
      Temperature: "",
      UpdateTime: "",
    },
  ]);
  const [allDBdata, setAllDBdata] = useState([
    {
      URL: "",
      Title: "",
      Price: "",
      Classification: "",
      Region: "",
      Province: "",
      Nickname: "",
      Temperature: "",
      UpdateTime: "",
    },
  ]);

  const [loading, setLoading] = useState(false);

  return (
    <SearchDataContext.Provider value={{ searchData, setSearchData }}>
      <DBdataContext.Provider value={{ DBdata, setDBdata }}>
        <AllDBdataContext.Provider value={{ allDBdata, setAllDBdata }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            <Header />
            {loading ? (
              <Loading />
            ) : (
              <Routes>
                <Route path="/" element={<Title />} />
                <Route path="statistics" element={<Statistics />} />
                <Route path="search" element={<Search />} />
                <Route path="share" element={<Share />} />
                <Route path="trace" element={<Trace />} />
                <Route path="main" element={<Home />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="forgotpw" element={<ForgotPW />} />
              </Routes>
            )}
          </LoadingContext.Provider>
        </AllDBdataContext.Provider>
      </DBdataContext.Provider>
    </SearchDataContext.Provider>
  );
}

export default App;
