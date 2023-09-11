// var basketModule = (function () {
//     var basket = [];
//     return {
//         addItem: function (values) {
//             basket.push(values);
//         },
//         getItemCount: function () {
//             return basket.length;
//         },
//         getTotal: function () {
//             var q = this.getItemCount(), p = 0;
//             while (q--) {
//                 p += basket[q].price;
//             }
//             return p;
//         }
//     }
// }()

// );
// basketModule.addItem({item:'bread', price:0.5});
// basketModule.addItem({item:'butter', price:0.3});
// console.log(basketModule.getItemCount());
// console.log(basketModule.getTotal());
// console.log(basketModule.basket);

// var myModule = {
//     myProperty: 'someValue',
//     myConfig: {
//     useCaching: true,
//     language: 'en'
//     },
//     myMethod: function() {
//     console.log('I can haz functionality?');
//     },
//     myMethod2: function() {
//     console.log('Caching is: ' + ((this.myConfig.useCaching) ? 'enabled' : 'disabled'));
//     },
//     myMethod3: function(newConfig) {
//     if (typeof newConfig == 'object') {
//     this.myConfig = newConfig;
//     console.log(this.myConfig.language);
//     }
//     }
//     };
//     myModule.myMethod(); 
//     myModule.myMethod2();
//     console.log(myModule.myConfig);
//     myModule.myMethod3({language:'fr',useCaching:false});
//     myModule.myMethod();
//     myModule.myMethod2();
//     console.log(myModule.myConfig);
//     console.log(myModule)


