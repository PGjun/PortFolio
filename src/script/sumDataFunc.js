function sumDataFunc(resData) {
  var st_serchDay; //데이터 검색일
  var st_priceAverageAllRegion; //전국 평균가격
  var st_priceMinAllRegion; //전국 최저가격
  var st_priceMaxAllRegion; //전국 최대가격
  var st_postNumber; //전체 게시글 수
  var st_priceWithoutWon = [];
  //검색테이블 리스트정보 전역변수
  for (let i = 0; i < resData.length; i++) {
    var st_price = resData[i].Price.replace(",", "");
    const indexMan = st_price.indexOf("만");
    const indexNanum = st_price.indexOf("나눔");
    const indexNoprice = st_price.indexOf("가격없음");
    const indexNumOne = st_price.indexOf("1원");
    if (
      indexNumOne !== -1 ||
      indexMan !== -1 ||
      indexNanum !== -1 ||
      indexNoprice !== -1
    )
      continue;
    st_priceWithoutWon.push(parseInt(st_price));
  }

  let today = new Date();
  let year = today.getFullYear();

  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  st_serchDay = year + "년" + month + "월" + day + "일"; //데이터 검색일에 쓸 오늘 날짜 변수

  //전체 게시글 가져와주는 코드 OK
  st_postNumber = resData.length;

  //전국 최저가격과 최대가격 찾는 코드
  st_priceMaxAllRegion = Math.max(...st_priceWithoutWon);
  st_priceMinAllRegion = Math.min(...st_priceWithoutWon);

  //전국 평균가격 얻는 함수
  const result = st_priceWithoutWon.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  st_priceAverageAllRegion = parseInt(result / st_priceWithoutWon.length);
  return [
    st_serchDay,
    st_priceAverageAllRegion,
    st_priceMinAllRegion,
    st_priceMaxAllRegion,
    st_postNumber,
  ];
}

export { sumDataFunc };
