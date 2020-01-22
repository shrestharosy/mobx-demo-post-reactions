import { observable, action } from 'mobx'

class CountStore {
    @observable likesCount = 12

    @action updateCount = () => {
        this.likesCount++;
    }
    
}

const countStoreInstance = new CountStore()

export default countStoreInstance;