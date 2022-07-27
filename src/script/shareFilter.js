// import { dummydata } from "./dummydata.js";

function shareFilter(resData) {
  let shareData = new Array();
  for (const item of resData) {
    let price = item.Price;
    const indexNanum = price.indexOf("나눔");
    if (indexNanum !== -1) {
      shareData.push(item);
    }
  }
  return shareData;
}

export { shareFilter };
