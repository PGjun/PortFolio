import data from "../data";
import { useState, useMemo } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Button, TableContainer, Table } from "@mui/material";
import { postTraceData } from "../api";

export default function AddTraceTable({ children }) {
  const [traceStatus, setTraceStatus] = useState(false);

  const [currentCountry, setCurrentCountry] = useState("서울");
  const [currentCity, setCurrentCity] = useState(data[currentCountry][0]);
  const countries = useMemo(() => Object.keys(data), []);
  const cities = useMemo(() => data[currentCountry], [currentCountry]);
  const onChange = (e) => {
    const currentCountry = e.target.value;
    setCurrentCountry(currentCountry);
    setCurrentCity(data[currentCountry][0]);
  };
  const onChange2 = (e) => {
    setCurrentCity(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let Id = document.getElementById(children).id;
    const city = e.target[0].value;
    const area = e.target[1].value;
    const value = e.target[2].value;
    const minPrice = e.target[3].value;
    const maxPrice = e.target[4].value;
    const data = `/trace/db/:${Id}`;
    const props = {
      path: data,
      traceCity: city,
      traceArea: area,
      traceValue: value,
      traceMinPrice: minPrice,
      traceMaxPrice: maxPrice,
    };
    postTraceData(props);
  };

  return (
    <p>
      <TableContainer
        component="form"
        variant="outlined"
        sx={{
          background: "white",
          borderRadius: "0.5rem",
          boxShadow: "0px 0px 5px 1px #ccc",
        }}
        onSubmit={onSubmit}
      >
        <Table aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell
                id={children}
                sx={{ borderRight: "dotted 1px lightgray" }}
              >
                {children}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
              >
                <select
                  name="selectId1"
                  id="selectId1"
                  onChange={onChange}
                  value={currentCountry}
                  style={{ padding: "0.4rem", border: "none", outline: "none" }}
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
              >
                <select
                  name="selectId2"
                  id="selectId2"
                  value={currentCity}
                  onChange={onChange2}
                  style={{ padding: "0.4rem", border: "none", outline: "none" }}
                >
                  {cities.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
              >
                <input
                  placeholder="추적할 물품"
                  style={{
                    padding: "0.7rem",
                    border: "none",
                    outline: "none",
                  }}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
              >
                <input
                  placeholder="최저가"
                  style={{
                    padding: "0.7rem",
                    border: "none",
                    outline: "none",
                  }}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "dotted 1px lightgray", width: "11rem" }}
              >
                <input
                  placeholder="최고가"
                  style={{
                    padding: "0.7rem",
                    border: "none",
                    outline: "none",
                  }}
                />
              </TableCell>
              <TableCell align="center" sx={{ width: "11rem" }}>
                {traceStatus ? (
                  <Button
                    color="success"
                    type="submit"
                    variant="contained"
                    sx={{ width: "7rem" }}
                    onClick={() => setTraceStatus(false)}
                  >
                    추적 중...
                  </Button>
                ) : (
                  <Button
                    color="success"
                    type="submit"
                    variant="outlined"
                    sx={{ width: "7rem" }}
                    onClick={() => setTraceStatus(true)}
                  >
                    추적 시작
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </p>
  );
}
