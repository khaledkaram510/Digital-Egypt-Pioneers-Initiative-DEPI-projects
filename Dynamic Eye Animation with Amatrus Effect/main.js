

// let prss = new Promise((res,reg)=>{
//     let req =  new XMLHttpRequest();
//     // console.log(req);
//     req.onload=()=>{
//         // console.log(req)
//         if(req.readyState === 4 ){
//             if(req.status === 200){
//                 res(JSON.parse(req.responseText));
//             }else{
//                 reg("error in requist");
//             }
//             // console.log(JSON.parse(req.responseText));
//         }else{
//             reg("error in requist");
//         }
//     }
//     // req.open("GET", "https://dummyjson.com/products",true);
//     req.open("GET", "https://reqres.in/api/users?page=2",true);
//     // req.open("GET", "https://reqres.in/api/unknown/23",true);
//     req.send();

// });
// prss.then((res)=>{
//     let newr;
//     res.data.forEach(element => {
//     //    console.log(element.email) 
//     document.write(`<h3>${element.first_name} ${element.first_name}</h3>`);
//     document.write(`<h5>${element.email}</h5>`);
    
//     });
//     newr = res.data.map(ele=>{
//         return ele.id;
//     })
//     newr.forEach((e)=>{
//         console.log(e);
//     });
// },(reg)=>{
//     console.log(reg);
// }
// ).catch((reg)=>{
//     console.log(reg)
// })



// async function ffn(){
//     let res = await fetch("https://reqres.in/api/users?page=2");
//     let data  = await res.json();
//     return data.data;
// }
// ffn().then((res)=>{
//     console.log(res);
//     res.forEach(element => {
//         console.log(element.first_name)
//     });
// }).catch((reg)=>{
//     // console.log("khaled");
// });
// $()
// console.log($("h1"))
// $.ajax({
//     type: "GET",
//     url: "https://reqres.in/api/users?page=2",
//     success: function (response) {
//         console.log(response);
//     }
// });
// $(selector).data({
//     key: value
    
// });
// $("p").attr("class", function (index, attr) { 
//      console.log(attr);
//      console.log(index);
// });

// ##### copy button #####
// let button =document.querySelector("button");

// console.log(document.querySelector("P"));
// button.onclick = ()=>{
//     navigator.clipboard.writeText(document.querySelector("P").innerHTML);
//     alert("text copyied");
//     // console.log(document.querySelector("P").innerHTML);
// };