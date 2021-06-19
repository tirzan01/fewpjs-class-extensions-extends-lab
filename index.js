// Your code here

class Polygon {
    constructor (sideslength){
        this.sideslength = [...sideslength]
    }

    get countSides (){
        return this.sideslength.length
    }

    get perimeter (){
        return this.sideslength.reduce((curr, acc) => curr + acc)
    }
}

class Triangle extends Polygon {
    get isValid (){
        const sortSidesByLength = this.sideslength.sort((a, b) => a - b)
        return sortSidesByLength[2] < sortSidesByLength[1] + sortSidesByLength[0]
    }
}

class Square extends Polygon {
    get isValid (){
        return this.sideslength[0] === this.sideslength[1] && this.sideslength[2] === this.sideslength[3] && this.sideslength[1] == this.sideslength[2] 
    }

    get area (){
        return parseInt(this.sideslength)**2
    }
}