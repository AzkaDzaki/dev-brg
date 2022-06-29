const url = ``

export default (axios) => ({
  getAPI() {
    return axios.get(`${url}`)
  },
  postAPI() {
    return axios.post(`${url}`)
  },
})
