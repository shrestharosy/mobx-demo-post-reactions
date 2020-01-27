import { observable, action, computed } from 'mobx'

class Store {
    @observable likesCount = 12

    @observable comments = ["Wow", "awesome"]

    @action updateCount() {
        this.likesCount++;
    }

    @action postComment(comment) {
        this.comments.push(comment)
    }

    @computed get commentsCount(){
        return this.comments.length;
    }

}

const storeInstance = new Store()

export default storeInstance;