import { delay } from '../utils'

export const getBillList = async (params) => {
  await delay(2000)
  let arr = [],page = params.page || 1;
  for (let i = (page-1) * 15; i <= (page)*15; i++) {
    arr.push({
      key: i + 12,
      month: i + 1,
      exMoney: 1999 + i,
      inMoney: 3399 + i,
      balance: -2399 + i
    })
  }
  return [
    {
      data: arr
    }
  ];
}
