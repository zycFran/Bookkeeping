import { delay } from '../utils'

export const getBillList = async () => {
  await delay(2000)
  let arr = [];
  for (let i = 0; i < 100; i++) {
    arr.push({
      key: i + Math.random(),
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
