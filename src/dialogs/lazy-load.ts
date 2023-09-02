import LazyComponent from '../components/lazy-component'

export default {
    confirm: LazyComponent(() => import('./confirm'))
}