import { observable, action } from 'mobx'

class Store {
    @observable likesCount = 12

    @observable comments = ["Wow", "awesome"]

    @action updateCount = () => {
        this.likesCount++;
    }

    @action postComment = (comment) => {
        this.comments.push(comment)
        console.log(this.comments)
    }
    
}

const storeInstance = new Store()

export default storeInstance;