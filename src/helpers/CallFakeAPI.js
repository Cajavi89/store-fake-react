
const CallFakeAPI = (cant) => {
  return fetch(`https://fakestoreapi.com/products?limit=${cant}`)
    .then(res => res.json())
}

export default CallFakeAPI
