//리액트
import { useContext } from "react";

//스타일
import styled from "styled-components";

//MUI스타일
import { Box, Container } from "@mui/material";

//컨텍스트
import { SearchDataContext } from "../contexts/SearchDataContext";

//컴포넌트
import SearchTable from "../components/SearchTable";

const TitleTextStyle = styled.div`
  font-size: 1.7rem;
  color: #383b40;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Search() {
  const { searchData } = useContext(SearchDataContext);
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
            height: "100%",
            fontFamily: "MICEGothic Bold",
          }}
        >
          <TitleTextStyle>
            {searchData.userCity} {searchData.userArea} {searchData.userValue}{" "}
            판매 현황
          </TitleTextStyle>
          <br />
          <SearchTable />
        </Box>
      </Container>
    </>
  );
}
