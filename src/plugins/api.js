import Base from '@/services/base'
import Geo from '@/services/geo'

export default ({ $axios }, inject) => {
  // Initialize API factories
  const factories = {
    base: Base($axios),
    geo: Geo($axios),
  }

  // Inject $services
  inject('services', factories)
}
