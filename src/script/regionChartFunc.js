/**
 * ver0.1 평균 최저 최고 그래프
 */

// function regionChartFunc(resData) {
//   const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
//   const testObject = new Object();
//   const finalData = new Array();

//   resData.forEach((item) => {
//     let region = item.Region;
//     let price = item.Price;
//     let strSelect = /[^0-9]/g;
//     if (!testObject[region]) testObject[region] = [];
//     if (testObject[region])
//       testObject[region].push(
//         // parseInt(price.replace(",", "").replace("원", ""))
//         parseInt(price.replace(strSelect, 0))
//       );
//   });

//   // console.log("testObject: ", testObject);

//   for (let region in testObject) {
//     finalData.push({
//       region,
//       최저가: parseInt(Math.min(...testObject[region])),
//       최고가: parseInt(Math.max(...testObject[region])),
//       평균가: parseInt(average(testObject[region])),
//     });
//   }

//   // console.log("finalData: ", finalData);

//   return finalData;
// }
// export { regionChartFunc };

/**
 * ver0.2 평균 최저 최고 그래프
 * 만, 나눔, 가격없음 패스
 */

function regionChartFunc(resData) {
  const average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
  const testObject = new Object();
  const finalData = new Array();
  for (const item of resData) {
    let region = item.Region;
    let price = item.Price;
    const indexMan = price.indexOf("만");
    const indexNanum = price.indexOf("나눔");
    const indexNoprice = price.indexOf("가격없음");
    const indexNumOne = price.indexOf("1원");
    
    if (
      indexNumOne !== -1 ||
      indexMan !== -1 ||
      indexNanum !== -1 ||
      indexNoprice !== -1
    )
      continue;
    let strSelect = /[^0-9]/g;
    if (!testObject[region]) testObject[region] = [];
    if (testObject[region])
      testObject[region].push(
        parseInt(price.replace(",", "").replace("원", "").replace(strSelect, 0))
      );
  }
  // console.log("testObject: ", testObject);
  for (let region in testObject) {
    finalData.push({
      region,
      최저가: parseInt(Math.min(...testObject[region])),
      최고가: parseInt(Math.max(...testObject[region])),
      평균가: parseInt(average(testObject[region])),
    });
  }
  // console.log("finalData: ", finalData);
  return finalData;
}
export { regionChartFunc };
