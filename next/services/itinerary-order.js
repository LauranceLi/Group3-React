const baseUrl = 'http://localhost:3005/api/ordergroup'

export const loadProducts = async () => {
  // 要使用try...catch陳述式，讓與伺服器連線作REST更穩健
  try {
    const res = await fetch(baseUrl)
    const data = await res.json()
    if (data.status === 'success') {
      return data.data.products
    } else {
      console.warn('沒有得到資料')
      return []
    }
  } catch (e) {
    console.error(e)
    return sample
  }
}

export const loadProduct = async (pid = '') => {
  try {
    if (!pid) throw new Error('pid是必要參數')

    const res = await fetch(`${baseUrl}/${pid}`)
    return await res.json()
  } catch (e) {
    console.error(e)
    return sample[0]
  }
}
