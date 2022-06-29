export const helper = ({ redirect, app, route, store, $services }) => ({})

export default ({ app }, inject) => {
  inject('helper', helper(app))
}
