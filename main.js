function myFunction() {
    var x = document.getElementById("minmenu");

        x.style.display = "block";

  }
//   let elem=[];
//   document.getElementById("buy-1").onclick = function(){elem[0]={'name':'flower kimono','material':'silk','cost':450};
//     localStorage.setItem(elem[0],JSON.stringify(elem[0]));

//   };
//   function getall(){
//     var retrievedObject=JSON.parse(localStorage.getItem(elem))
//     console.log(elem);
//   }

// document.getElementById("buy-1").setAttribute('onclick', setElem);

function setElem(){ alert(1);
    let elem={name:'flower kimono',material:'silk',cost:450, amount:1};
  window.localStorage.setItem("elem",elem);
  console.log(elem);

};
function getall(){
  console.log(window.localStorage.getItem("elem"));
  alert(elem.amount);
  
}