const BASE_URL = "https://www.watchrabbit.co.kr:8443";

export async function postLoginData(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: Data.userEmail,
      password: Data.userPassword,
    }),
  });
  const body = await response.json();
  return body;
}

export async function postEmail(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: Data.userEmail,
    }),
  });
  const body = await response.json();
  return body;
}
export async function postGoogle(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const body = await response.json();
  return body;
}
export async function postKakao(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const body = await response.json();
  return body;
}
export async function postSearchData(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      city: Data.userCity,
      area: Data.userArea,
      value: Data.userValue,
    }),
  });
  const body = await response.json();
  return body;
}
export async function getLogOut(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const body = await response.json();
  return body;
}
export async function postFindPWD(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      email: Data.userEmail,
      password: Data.userPassword,
    }),
  });
  const body = await response.json();
  return body;
}

//로그인 유지
export async function getLoginStatus(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  const body = await response.json();
  return body;
}

export async function postTraceData(Data) {
  const response = await fetch(`${BASE_URL}${Data.path}`, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      City: Data.traceCity,
      Area: Data.traceArea,
      Value: Data.traceValue,
      MinPrice: Data.traceMinPrice,
      MaxPrice: Data.traceMaxPrice,
    }),
  });
  const body = await response.json();
  return body;
}
