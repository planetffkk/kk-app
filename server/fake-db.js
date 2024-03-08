const Product = require('./model/product')

class FakeDb {
    constructor(){
        this.products = [
            {
                image:'./assets/img/bg_namikimichi1_sakura.jpg',
                id: 1,
                name: '奈良の桜並木其の壱',
                price: '交通費 800円',
                description: '超景色いいです!是非お越し下さいｗ',
                Heading1: '奈良の桜並木',
                Heading2: '奈良の桜並木',
                Heading3: '奈良の桜並木',
                text1: '超綺麗です、一度お越し下さい！',
                text2: '超綺麗です、一度お越し下さい！',
                text3: '超綺麗です、一度お越し下さい！',
                listtext: '自分が春に訪れた桜で一番好きな場所です'
              },
              {
                image:'./assets/img/bg_namikimichi1_sakura.jpg',
                id: 2,
                name: '奈良の桜並木其の弍',
                price: '交通費 800円',
                description: '超景色いいです!是非お越し下さいｗ',
                Heading1: '奈良の桜並木',
                Heading2: '奈良の桜並木',
                Heading3: '奈良の桜並木',
                text1: '超綺麗です、一度お越し下さい！',
                text2: '超綺麗です、一度お越し下さい！',
                text3: '超綺麗です、一度お越し下さい！',
                listtext: '自分が春に訪れた桜で一番好きな場所です'
              },
              {
                image:'./assets/img/bg_namikimichi1_sakura.jpg',
                id: 3,
                name: '奈良の桜並木其の参',
                price: '交通費 800円',
                description: '超景色いいです!是非お越し下さいｗ',
                Heading1: '奈良の桜並木',
                Heading2: '奈良の桜並木',
                Heading3: '奈良の桜並木',
                text1: '超綺麗です、一度お越し下さい！',
                text2: '超綺麗です、一度お越し下さい！',
                text3: '超綺麗です、一度お越し下さい！',
                listtext: '自分が春に訪れた桜で一番好きな場所です'
              },
              {
                image:'./assets/img/bg_namikimichi1_sakura.jpg',
                id: 4,
                name: '奈良の桜並木其の四',
                price: '交通費 800円',
                description: '超景色いいです!是非お越し下さいｗ',
                Heading1: '奈良の桜並木',
                Heading2: '奈良の桜並木',
                Heading3: '奈良の桜並木',
                text1: '超綺麗です、一度お越し下さい！',
                text2: '超綺麗です、一度お越し下さい！',
                text3: '超綺麗です、一度お越し下さい！',
                listtext: '自分が春に訪れた桜で一番好きな場所です'
              }
          
        ]
    }

    async initDb() {
      await this.cleanDb()
      this.pushProductToDb()
    }

    async cleanDb(){
      await Product.deleteMany({})
    }

    pushProductToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }
    seeDb() {
        this.pushProductToDb()
    }
}

module.exports = FakeDb