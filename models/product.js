const fs = require('fs');
const path = require('path');
const getPrpoductsFromFile = (cb)=>{
    const p = path.join(path.dirname(process.mainModule.filename), 
        'data',
        'products.json');

      fs.readFile(p, (error,fileContent) =>{
        if(error){
            cb([]);
        }
        else{
        cb(JSON.parse(fileContent));
        }
      })
     
}

module.exports = class Product{
    constructor(t){
      this.tittle = t;
    }
    save(){
        // const p = path.join(path.dirname(process.mainModule.filename), 
        // 'data',
        // 'products.json');
        getPrpoductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products),(error)=>{
                console.log(error);
            });
        })
        
        fs.readFile(p, (error, fileContent ) => {})

        }

     static fetchAll(cb)
     {
        getPrpoductsFromFile(cb);
     }
}