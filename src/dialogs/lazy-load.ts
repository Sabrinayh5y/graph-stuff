import LazyComponent from '../components/lazy-component'

export default {
    info: LazyComponent(() => import('./info/index'))
}