//리액트
import { useContext, useState } from "react";

//MUI 스타일
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import styled from "styled-components";

//컨텍스트
import { SearchDataContext } from "../contexts/SearchDataContext";
import { DBdataContext } from "../contexts/DBdataContext";

//외부함수
import { shareFilter } from "../script/shareFilter";
// import { dummydata } from "../script/dummydata.js"; //더미데이터

const TitleTextStyle = styled.div`
  font-size: 1.7rem;
  color: #383b40;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Share() {
  //선언부
  const { searchData } = useContext(SearchDataContext);
  const { DBdata } = useContext(DBdataContext);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const dataCell = shareFilter(DBdata); // 더미 or DBdata

  //함수
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("rowsPerPage", rowsPerPage);
    console.log("newPage", newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
            나눔 현황
          </TitleTextStyle>
          <br />

          <TableContainer
            component={Paper}
            variant="outlined"
            sx={{ background: "", boxShadow: "0px 0px 3px 0px #ccc" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
                  >
                    지역 / 동네
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
                  >
                    판매자/매너온도
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "dotted 1px lightgray" }}
                  >
                    글 제목
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
                  >
                    분류
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
                  >
                    물품 가격
                  </TableCell>

                  <TableCell align="center" sx={{ width: "9rem" }}>
                    게시글 보기
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {dataCell
                  .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                  .map((dataCell) => {
                    return (
                      <TableRow>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "dotted 1px lightgray" }}
                        >
                          {dataCell.Region} / {dataCell.Province}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "dotted 1px lightgray" }}
                        >
                          {dataCell.Nickname} / {dataCell.Temperature}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "dotted 1px lightgray" }}
                        >
                          {dataCell.Title}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "dotted 1px lightgray" }}
                        >
                          {dataCell.Classification}
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{ borderRight: "dotted 1px lightgray" }}
                        >
                          {dataCell.Price}
                        </TableCell>
                        <TableCell align="center">
                          <a
                            href={dataCell.URL}
                            target="blank"
                            style={{ textDecoration: "none" }}
                          >
                            <Button variant="outlined" color="warning">
                              이동
                            </Button>
                          </a>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={dataCell.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            rowsPerPageOptions={[5, 10, 25, 50]}
            labelRowsPerPage="게시글 범위"
            labelDisplayedRows={function defaultLabelDisplayedRows({
              from,
              to,
              count,
            }) {
              return `전체 ${
                count !== -1 ? count : `more than ${to}`
              }개 중 ${from}–${to}까지`;
            }}
          ></TablePagination>
        </Box>
      </Container>
    </>
  );
}
