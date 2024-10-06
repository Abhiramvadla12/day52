
// function userName(callback){
//     var a =prompt("enter your name here:" );
//     callback(a,prompt('enter your preference of greeting like casual or formal for casual enter 0 ,for formal 1: '));
// }
// userName((x,greet)=>{
//     if(greet==1){
//         console.log(`Konnichiwa ${x} `);
//     }
//     else{
//         console.log(yahhoo);
//     }
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`2)`);
// function operations(array){
//     array(prompt('enter your array with spaces: ').split(' '));
// }
// operations((arr)=>{
//     let double = arr.map((element)=>{
//         return 2*(element);
//     })
//     let square = arr.map((element)=>{
//         return Math.pow(element,2);
//     })
//     console.log(`array after doubling is: ${double}`);
//     console.log(`array after squaring is: ${square}`);
// });
// console.log(`-----------------------------------------------------------------`)
// console.log(`3)`);
// function message(callback){
//     setTimeout(()=>{
//         console.log(`“Ohayo gozaimasu”`);
//     },10000);
//     callback();
        
// }
// message(()=>{
//     console.log('wait message is coming.............')})
// console.log(`-----------------------------------------------------------------`)
// console.log(`5)`);
// function check(callback){
//     callback(prompt("enter a array that you wanted: ").split(' '));
// }
// let oddRes = '';let evenRes = '';
// check((arr)=>{
//     let even = arr.filter((element)=>{
//         if(element%2==0){
//             evenRes += element+' ';
//         }
//         else{
//             oddRes += element+' ';
//         }
//     })
//     console.log(`even numbers in the given array are ${evenRes}`);
//     console.log(`odd numbers in the given array are ${oddRes}`);
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`7)`);
// function reverse(callback){
//     callback(prompt('enter any string: '));
// }
// res = '';
// reverse((str)=>{
//     for(i of str){
//         res = i+res;
//     }
//     console.log(res);
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`9)`);
// function change(callback){
//     callback("   abhiram  ");
// }
// change((str)=>{
//     res = str.toUpperCase();
//     res = res.trim();
//     console.log(`string after removing spaces and converting uppercase is ${res}`);
// });
// console.log(`-----------------------------------------------------------------`)
// console.log(`10)`);
// function operation(callback){
//     callback(prompt('enter first number: '),prompt('enter second number: '));
// }
// operation((a,b)=>{
//     let res = prompt('enter 0 for addition and 1 for substraction: ');
//     if(res==0){
//         console.log(a+b);
//     }
//     else{
//         console.log(a-b);
//     }
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`12)`);
// function action(callback){
//     callback();
// }
// action(()=>{
//     let task = prompt(`enter 1 if task is completed and 0 if not : `);
//     if(task==0){
//         console.log('please complete the task in time');
//     }
//     else{
//         console.log(`great !, well done. `)
//     }
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`14)`);
// function operation(callback){
//     callback(prompt('enter a nubmer here : '));
// }
// operation((n)=>{
//    if(n>0){
//        console.log(`cube of that number is : ${Math.pow(n,3)}`);
//    } 
//    else{
//        console.log(`enter a valid number`);
//    }
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`15)`);
// function sort(callback){
//     callback([{
//         'name':"Vadla abhiram",
//         'age':23
//     },{
//         'name':"Reddy malla saidulu",
//         'age':23
//     },{
//         'name':"Merugu saikiran",
//         'age':23
//     },{
//         'name':"Yechuri sumanth",
//         'age':22
//     }])
// }
// sort((arr)=>{
//     res = [];res1=[]
//     arr.forEach((element,index)=>{
//         if(index == arr.length-1){
//             res.push(element['name']);
//         }
//         else{
//             res.push(element['name']);
//         }
//     })
//     console.log(`sort array of objects based on name is:-
//     ${res.sort()}`);
//     arr.forEach((element,index)=>{
//         if(index == arr.length-1){
//             res1.push(element['age']);
//         }
//         else{
//             res1.push(element['age']);
//         }
//     })
//     console.log(`sort array of objects based on name is:-
//     ${res1.sort()}`);
// })
// console.log(`-----------------------------------------------------------------`)
// console.log(`16)`);
// function steps(callback){
//     const arr = ['step1','step2','step3','step4','step5','step6','step7','step8'];
//     arr.forEach((element,index)=>{
//         console.log(element);
//         callback(index);
//     })
// }
// steps((index)=>{
    
//     console.log(`step${index+1} compeleted `);
  
// })
console.log(`-----------------------------------------------------------------`)
console.log(`6)`);
function timer(callback){
    j=0;
        setTimeout(function (){
            console.log(`timer: ${j}`);
            document.write(`timer: ${j} `)
            j++
        },1000)
        setTimeout(function (){
            console.log(`timer: ${j}`);
            document.write(`timer: ${j} `)
            j++
        },2000)
        setTimeout(function (){
            console.log(`timer: ${j}`);
            document.write(`timer: ${j} `)
            j++
        },3000)
        setTimeout(function (){
            console.log(`timer: ${j}`);
            document.write(`timer: ${j} `)
            j++
        },4000)
        setTimeout(function (){
            console.log(`timer: ${j}`);
            document.write(`timer: ${j} `)
            j++
        },5000)
    setTimeout(()=>{
        callback();
    },6000)
    
}
timer(()=>{
    console.log(`times up!`);
    document.write(`timer up! `)
})
// console.log(`-----------------------------------------------------------------`)
// console.log(`8)`);
// function operations(callback1,callback2){
//     let n1 = +prompt('enter first number: ');
//     let n2 = +prompt('enter second number: ');
//     // sum = n1+n2;
//     // res = Math.pow(sum,2);
//         try{
//             res = n1/n2;
//             console.log(res);
//             if(res === Infinity || isNaN(res) ){
//                 callback2();
//             }
            
//             else{
//                 callback1();
//             }
//         }
//         catch{
//             res = n2/n1;
//              callback1();
//         }
// }
// operations(()=> console.log(`successfully performed operation `) ,()=> console.log(`failed`));