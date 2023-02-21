var itemClickable = false;
var itemArray = [0,0,0,0];
var toy = "";


let stableNames = ["none", "alligator", "bingus", "bondagefish", "book", "dumbell", "laptop", "monster", "tea"];

function updateToy(numItem: Number){
  var num = numItem.valueOf()
  var updateStr = 'Assets/toys/' + stableNames[num] + '.png'
  return updateStr;
}


function updateToys(num: Number, current : HTMLElement){
  var str = updateToy(num);
  console.log(current.id);
  current.setAttribute('src', str);
  if(current.id == "itemOne"){
    itemArray[0] = Number(num);
    current.classList.add("itemOne");
  }
  if(current.id == "itemTwo"){
    itemArray[1] = Number(num);
    current.classList.add("itemTwo");
  }
  if(current.id == "itemThree"){
    itemArray[2] = Number(num);
    current.classList.add("itemThree");
  }
  if(current.id == "itemFour"){
    itemArray[3] = Number(num);
    current.classList.add("itemFour");
  }
  localStorage.array = JSON.stringify(itemArray);
}

function loadOldItems(){
  if(localStorage.array){
    itemArray = JSON.parse(localStorage.array);
    updateToys(itemArray[0], document.getElementById("itemOne")!);
    updateToys(itemArray[1], document.getElementById("itemTwo")!);
    updateToys(itemArray[2], document.getElementById("itemThree")!);
    updateToys(itemArray[3], document.getElementById("itemFour")!);
    return itemArray;
  }
}

export{loadOldItems}