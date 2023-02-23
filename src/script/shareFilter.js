//나눔필터
function shareFilter(resData) {
  let shareData = [];
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
