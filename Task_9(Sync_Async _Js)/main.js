// sync js
// console.log("My")
// console.log("name")
// console.log("is")
// console.log("Saba")
// console.log("Zahid")

//async js
// console.log("My")
// console.log("name")
// setTimeout(()=>{
// console.log("is")
// },2000)
// console.log("Saba")
// console.log("Zahid")

// callback : passing one function inside another as an argument

// function first(call_second){
//     console.log("Saba")
//     call_second()
// }

// function second(){
//     console.log("Zahid")
// }

// first(second)

// Example1: making ice cream

// let order = (call_production) => {
//     console.log("Order placed! Please start production");
//     call_production();
//  }
// let production = () => {
//     console.log("Order received! Starting production");
//  }

// order(production);
      
// lets extend example 1 by adding some other stages in process in async way

// let Stocks = {
//     Fruits : ["mango","grapes","bnana","blueberry","strawberry"],
//     Liquid : ["water", "ice"],
//     Holder : ["cone","stick","cup"],
//     Topping : ["chocolcate","waffers","peanut"]
// };

// let order = (fruit,call_production) => {
//     setTimeout(()=>{
//         console.log(`${Stocks.Fruits[fruit]} is selected`);
//         },2000);
         
//         call_production();
//      };
// let production = () => {
//         setTimeout(()=>{
//             console.log("Order received!Starting production");
//             setTimeout(()=>{
//                 console.log("Fruits has been chopped");
//                 setTimeout(()=>{
//                     console.log(`${Stocks.Liquid[0]} and ${Stocks.Liquid[1]} were added`);
//                     setTimeout(()=>{
//                         console.log("Machine has started");
//                         setTimeout(()=>{
//                             console.log(`The ice cream was placed in ${Stocks.Holder[0]}`); 
//                             setTimeout(()=>{
//                                 console.log(`The icecream was garnished with ${Stocks.Topping[0]}`); 
//                                 setTimeout(()=>{
//                                     console.log(`The ice cream was served`);  
//                                 },3000);
//                             },3000);
//                         },2000);
//                     },1000);
//                  },1000);
//             },2000);
//         },0000);
//   }
    
//     order(3,production);

// Example : Promise Order

// let Stocks = {
//     Fruits : ["mango","grapes","bnana","blueberry","strawberry"],
//     Liquid : ["water", "ice"],
//     Holder : ["cone","stick","cup"],
//     Topping : ["chocolcate","waffers","peanut"]
// };

// let shop_open = true;
// let order = (time,work)=>{
        
//     return new Promise((resolve,reject)=>{
//         if(shop_open){
//             setTimeout(()=>{
//             resolve(work())
//             } ,time)
//         }
//         else{
//             reject(console.log("Shop is closed"))
//         }

//     })
// };
// order(2000, ()=>console.log(`${Stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order(0000, ()=>console.log(`production has started`))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`The fruit was chopped`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`${Stocks.Liquid[0]} and ${Stocks.Liquid[1]} was added`))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`Machine has started`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`Ice cream was placed in ${Stocks.Holder[0]}`))
// })
// .then(()=>{
//     return order(2000, ()=>console.log(`Ice cream was garnished with ${Stocks.Topping[1]}`))
// })
// .then(()=>{
//     return order(1000, ()=>console.log(`Ice cream was served`))
// })
// .catch(()=>{
//      console.log(`Customer left`);
// })
// .finally(()=>{
//     console.log(`Day ended! Shop closed`);
// });

// Async function order

// async function order(){
//     try{
//         await names; 
//     }
//     catch(error){
//         console.log(`names function does not exist`);
//     }
//     finally{
//         console.log(`Code runs anyways.`);
//     }
// }
// order().then(()=>{
//     console.log(`Day ended!`);
// })

// Now making ice cream with async await .In this example we.are mving outside the kirtchen function to 
// ask something from customer.
let Stocks = {
        Fruits : ["mango","grapes","bnana","blueberry","strawberry"],
        Liquid : ["water", "ice"],
        Holder : ["cone","stick","cup"],
        Topping : ["chocolcate","waffers","peanut"]
    };
    
    let shop_open = true;
    function time(ms){

        return new Promise((resolve,reject)=>{
            if(shop_open){
                setTimeout(resolve,ms);
            }
            else{
                reject(console.log("Shop is closed"))
            }
    
        });
    }

    async function kitchen(){
        try{
            await time(2000)
            console.log(`${Stocks.Fruits[0]} was selected`);

            await time(0000)
            console.log(`Start the process`);

            await time(2000)
            console.log(`Cut the fruits`);

            await time(2000)
            console.log(`${Stocks.Liquid[0]} and ${Stocks.Liquid[1]} was added`);

            await time(2000)
            console.log(`machine has started`);

            await time(2000)
            console.log(`Ice cream was placed on ${Stocks.Holder[1]}`);

            await time(2000)
            console.log(`Ice cream was garnished with ${Stocks.Topping[1]}`);

            await time(2000)
            console.log(`Ice cream was served `);
        }
        catch(error){
            console.log(`Customer left`,error);
        }
        finally{
            console.log(`Day ended! Shop closed`);
        } 
    }

    kitchen();