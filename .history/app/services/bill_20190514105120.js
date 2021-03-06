import { delay } from '../utils'

export const getBillList = async (page) => {
  await delay(2000)
  console.log(arguments)
  let arr = [];
  for (let i = page; i < page + 15; i++) {
    arr.push({
      key: i,
      month: 1 + i,
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
