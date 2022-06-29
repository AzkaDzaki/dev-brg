import { baseRes } from './response'
export default (axios) => ({
  getGeo(payload, errCallback = null) {
    return baseRes(
      axios.post(`https://sipjatan.com/hasura/v1/graphql`, payload),
      errCallback
    )
  },
})
