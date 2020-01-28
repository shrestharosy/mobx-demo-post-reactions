import { action, runInAction, observable } from "mobx";

class ImageStore {
    
    id = 1

    @observable imageUrl = `https://rickandmortyapi.com/api/character/avatar/1.jpeg`

    @action async fetchImage() {
            const characterId = ++this.id
            const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            const data = await response.json()
            // this.setImageUrl(data.image)

            runInAction(() => {
                this.imageUrl = data.image
            })
    }


    // @action setImageUrl(url) {
    //     this.imageUrl = url
    // }

}

const imageStore = new ImageStore()

export default imageStore;