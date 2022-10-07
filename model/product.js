const path = require('path')
const fs = require('fs')

module.exports = class Product{

    static async find(){
        return new Promise((resolve, reject)=>{
            fs.readFile(path.join(__dirname, '..','data', 'products.json'),(err,data)=>{
                if(err){
                    reject(err);
                }

                resolve(JSON.parse(data))
            })
        })
    }

    static async save(body){
        const data = await this.find()

        body.id = data.length + 1
        
        data.push(body);
        
        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..', 'data', 'products.json'), 
            JSON.stringify(data),
            (err)=>{
                if(err){
                    reject(err)
                }

                resolve()
            })
        })
    }

    static async findById(id){
        const products = await this.find()
        return products.find(product => +product.id === +id)
    }

    static async updateById(id,namee,pricee){
        const prodc = await this.find()
        const idx = prodc.findIndex(product => product.id === id)
        
        if(idx < 0){
            console.log('there are not product with id: ' + idx)
        }else{
            prodc[idx].name = namee
            prodc[idx].price = pricee
        }

        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..','data', 'card.json'), 
            JSON.stringify(prodc),
            (err)=>{
                if(err){
                    reject(err);
                }

                resolve()
            })
        })
    }

    static async deleteById(id){
        const prodc = await this.find()
        const idx = prodc.findIndex(product => product.id === id)
        
        if(idx < 0){
            console.log('there are not category with id: ' + idx)
        }else{
            prodc.splice(idx,1)
        }

        return new Promise((resolve, reject)=>{
            fs.writeFile(path.join(__dirname, '..','data', 'card.json'), 
            JSON.stringify(prodc),
            (err)=>{
                if(err){
                    reject(err);
                }

                resolve()
            })
        })
    }
}