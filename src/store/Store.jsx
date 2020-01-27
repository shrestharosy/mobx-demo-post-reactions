import { observable, action } from 'mobx'

class Store {
    @observable likesCount = 12

    @observable comments = ["Wow", "awesome"]

    @action updateCount = () => {
        this.likesCount++;
    }
    
}

const storeInstance = new Store()

export default storeInstance;