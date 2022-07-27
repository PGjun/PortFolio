import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SearchDataContext } from "../contexts/SearchDataContext";
import { useContext, useState } from "react";
import { Button, TablePagination } from "@mui/material";
import { DBdataContext } from "../contexts/DBdataContext";
import { sumDataFunc } from "../script/sumDataFunc";

export default function SearchTable() {
  const { DBdata } = useContext(DBdataContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const sumData = sumDataFunc(DBdata);

  const dataCell = DBdata;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log("rowsPerPage", rowsPerPage);
    console.log("newPage", newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const { searchData } = useContext(SearchDataContext);

  return (
    <>
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
                데이터 검색일
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                {searchData.userCity} 평균가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                {searchData.userCity} 최저가격
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "9rem" }}
              >
                {searchData.userCity} 최고가격
              </TableCell>
              <TableCell align="center" sx={{ width: "9rem" }}>
                {searchData.userCity} 게시글 수
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[0]}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[1]}원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[2]}원
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {sumData[3]}원
              </TableCell>
              <TableCell align="center">{sumData[4]}개</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <p />
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
    </>
  );
}
