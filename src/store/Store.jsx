import { observable, action } from 'mobx'

class Store {
    @observable likesCount = 12

    @action updateCount = () => {
        this.likesCount++;
    }
    
}

const storeInstance = new Store()

export default storeInstance;