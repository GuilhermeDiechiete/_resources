

class Table{
    constructor(arr){
        this.header = arr[0]
        arr.shift()
        this.rows = arr
    }
    get RowCount(){ // transforma para um atributo ( ele precisa retornar algo sempre )
        return this.rows.length
    }
    get ColumnCount(){
        return this.header.length
    }
}

module.exports = Table