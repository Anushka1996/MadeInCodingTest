// Exercise #3: Array / Object Manipulation
// Assume a large array of objects representing cookware products, with each object in the following shape:

const products = [
    {name: "Stainless 10\"", weight: 1.5, price: 65, size: 10, id: 12},
    {name: "Stainless 12\"", weight: 1.8, price: 85, size: 12, id: 13},
    {name: "Carbon Steel 10\"", weight: 1.5, price: 75, size: 10, id: 23},
    {name: "Carbon Steel 12\"", weight: 1.95, price: 75, size: 12, id: 24},
    {name: "Nonstick 10\"", weight: 2.0, price: 70, size: 10, id: 3},
    {name: "Nonstick 12\"", weight: 2.0, price: 70, size: 12, id: 4}
  ]
  
  // This is a three-part challenge – write a separate function or expression that does each of the following. These should all be in the same gist or snippet, and labeled / named appropriately:
  // Return an array of only the products that are priced greater than or equal to 75.
  // Return an array of only the products that are heavier than 1.8.
  // Transform the array into an object, where the keys are IDs and the values are the remaining object properties (example ⬇)
  // {
  //   "12": { name: "Stainless 10\"", weight: 1.5, price: 65, size: 10 },
  //   "13": {name: "Stainless 12\"", weight: 1.8, price: 85, size: 12}
  // }
  
  function productsMoreThan75OrEqual(products){
  
    let array = [];
    
    products.forEach((product) => {
     if (product.price >= 75){
       array.push(product);
     }
    })
  
    return array;
  }
  
  productsMoreThan75OrEqual(products)
  
  
  function heavierThan(arr){
    let heavierThan18 = [];
    
    products.forEach((product) => {
     if (product.weight > 1.8){
       heavierThan18.push(product);
     }
    })
  
    return heavierThan18;
  }
  
  heavierThan(products);
  
  
  function transformProductArray(arr){
  
    let productObj = {};
  
    // using the forEach loop we want to iterate over the array
  
    products.forEach((product) => {
      // This step is for ensuring there are no duplicate product ids
      if(!productObj[product.id]){
        // set the new id to this id 
       productObj[product.id] = product.id;
      // setting the value of newly created id 
       productObj[product.id] = product;
       delete product.id;
      }
    });
  
    return productObj;
  }
  
  transformProductArray(products)