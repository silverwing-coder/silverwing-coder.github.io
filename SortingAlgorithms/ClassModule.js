class SortingClass {
    constructor(width, height){
        this.width = width
        this.height = height
        this.data_sorting = []
        this.initializeData()
    }

    initializeData(){
        for(let i=0; i<this.width; i+=4){
            this.data_sorting.push(floor(random(50, this.height)))
        }
    }

}