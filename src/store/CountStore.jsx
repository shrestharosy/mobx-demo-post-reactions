import { observable } from 'mobx'

class CountStore {
    @observable likesCount = 0
}

const CountStoreInstance = new CountStore()

export default CountStoreInstance;