import axios from 'axios';

const fetchCurrency = async (currency) => {
try {
  return await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res) => res.data);

} catch (error) {
  console.error(error.message)
}
}

export default fetchCurrency;