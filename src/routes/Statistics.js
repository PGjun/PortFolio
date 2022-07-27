//스타일
import { Box, Container, Grid } from "@mui/material";
import styled from "styled-components";

//컴포넌트
import { PriceChart } from "../components/PriceChart";

//컨텍스트
import { useContext } from "react";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { DBdataContext } from "../contexts/DBdataContext";

//외부함수
import { sumDataFunc } from "../script/sumDataFunc";

const GridStyle = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  height: 5rem;
  box-shadow: 0px 0px 3px 1px #ccc;
  text-align: center;
`;
const ChartStyle = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 3px 1px #ccc;
  text-align: center;
  padding-top: 2rem;
`;
const MainTextStyle = styled.span`
  font-size: 2.5rem;
  color: ${(props) => props.color || "coral"};
  font-weight: bold;
`;
const SubTextStyle = styled.span`
  font-size: 1.1rem;
  color: #383b40;
  font-weight: bold;
`;
const TitleTextStyle = styled.div`
  font-size: 1.7rem;
  color: #383b40;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Statistics() {
  const { searchData } = useContext(SearchDataContext);
  const { DBdata } = useContext(DBdataContext);
  const sumData = sumDataFunc(DBdata);

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
            fontFamily: "MICEGothic Bold",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TitleTextStyle>
                {searchData.userCity} {searchData.userArea}{" "}
                {searchData.userValue} 시세 통계
              </TitleTextStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>평균 시세</SubTextStyle>
                <br />
                <br />
                <MainTextStyle>{sumData[1]}원</MainTextStyle>
              </GridStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>최저가</SubTextStyle>
                <br />
                <br />
                <MainTextStyle color="skyblue">{sumData[2]}원</MainTextStyle>
              </GridStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>최고가</SubTextStyle>
                <br />
                <br />
                <MainTextStyle color="#dc4343">{sumData[3]}원</MainTextStyle>
              </GridStyle>
            </Grid>
            <Grid item xs={3}>
              <GridStyle>
                <SubTextStyle>게시글 수</SubTextStyle>
                <br />
                <br />
                <MainTextStyle color="dimgray">{sumData[4]}개</MainTextStyle>
              </GridStyle>
            </Grid>
          </Grid>
          <br />
          <br />
          <TitleTextStyle>
            전국 {searchData.userValue} 시세 그래프
          </TitleTextStyle>
          <br />

          <ChartStyle>
            <PriceChart />
          </ChartStyle>
        </Box>
      </Container>
    </>
  );
}
