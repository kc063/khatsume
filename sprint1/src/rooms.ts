//rooms.js -- used specifically for loading rooms


// The window.onload callback is invoked when the window is first loaded by the browser
import{prepareClick, prepareSpan} from "../src/modal.js"
import{loadOldItems} from "../src/toys.js"
let dictionaryCats = new Map <String, Boolean>();
let itemArray = [0,0,0,0];

window.onload = function () {
    prepareClick();
    prepareSpan();
    itemArray = loadOldItems() || [0,0,0,0]
    onAreaLoad();
};

function replacer(key : any, value : any) {
    if(value instanceof Map) {
      return {
        dataType: 'Map',
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }

  function reviver(key : any, value: any) {
    if(typeof value === 'object' && value !== null) {
      if (value.dataType === 'Map') {
        return new Map(value.value);
      }
    }
    return value;
  }


let areaOne = [0, 0, 0, 0, 0, 5, 1, 1, 1, 2, 13, 2, 3, 3, 3];
let areaTwo = [0, 12, 0, 0, 0, 4, 4, 4, 9, 5, 5, 6];
let areaThree = [0, 11, 0, 0, 0, 7, 1, 7, 4, 8, 8, 9, 9];
let areaFour = [0, 1, 10, 11, 12, 13, 14];
let alligatorArea = [0, 0, 5, 11, 3, 10, 7];
let bingusArea = [0, 6, 10, 4, 7];
let bondagefishArea = [0, 1, 2, 13, 5, 4];
let bookArea = [0, 1, 2, 6, 11, 8, 9];
let dumbellArea = [0, 1, 2, 3];
let laptopArea = [0, 2, 12, 9];
let monsterArea = [0, 14, 14, 14, 3, 12];
let teaArea = [0, 13, 8, 9, 7];
let areas = [[], alligatorArea, bingusArea, bondagefishArea, bookArea, dumbellArea, laptopArea, monsterArea, teaArea];
let slashes = ["bingus", "alligator", "bingus", "bondagefish", "book", "dumbell", "laptop", "monster", "tea"];
//"the bingus exception"
let catNames = new Map<Number,String>();

//loading catNames (can be moved as desired, written as map for code modularity)
catNames.set(0, "none");
catNames.set(1, "Catherine");
catNames.set(2, "Catptain Jack");
catNames.set(3, "Kitlyn");
catNames.set(4, "Rrrachel");
catNames.set(5, "F-El-ine");
catNames.set(6, "Celia (Celia)");
catNames.set(7, "Remew");
catNames.set(8, "Liznya");
catNames.set(9, "Noah");
catNames.set(10, "Nickitty");
catNames.set(11, "Gabby Tabby");
catNames.set(12, "Ameh");
catNames.set(13, "Emmau");
catNames.set(14, "Cleocatra");

function establishDict(){
    if(localStorage.dc){
        const newValue = JSON.parse(localStorage.dc, reviver);
        if(newValue instanceof Map){
            newValue.forEach((k, v) =>{
                dictionaryCats.set(v,k); //only god knows why these are reversed 
            });        }
        else{
            console.log("Wrong type error");
        }

    }
    else{
        dictionaryCats.set("Catherine", false);
        dictionaryCats.set("Catptain Jack", false);
        dictionaryCats.set("Kitlyn", false);
        dictionaryCats.set("Rrrachel", false);
        dictionaryCats.set("El", false);
        dictionaryCats.set("Celia", false);
        dictionaryCats.set("Remew", false);
        dictionaryCats.set("Liza", false);
        dictionaryCats.set("Noah", false);
        dictionaryCats.set("Nickitty", false);
        dictionaryCats.set("Gabby Tabby", false);
        dictionaryCats.set("Amy", false);
        dictionaryCats.set("Emmau", false);
        dictionaryCats.set("Cleocatra", false);
        console.log("ping not loading");
    }
}

let currentLoadedCats = new Map<String, Boolean>();



function onAreaLoad(){
    establishDict();
    if(itemArray != undefined){

    }
    individualLoad(areaOne, 'kittyOne', 'itemOne', 0);
    individualLoad(areaTwo, 'kittyTwo', 'itemTwo', 1);
    individualLoad(areaThree, 'kittyThree', 'itemThree', 2);
    individualLoad(areaFour, 'kittyFour', 'itemFour', 3);
    updateDictionary();
}

function individualLoad(someArray: string | any[] | null, someName: string, someItem : string, num : number){
    if(someArray == null) {
        console.log("Couldn't find array element")
    } else if(!(someArray instanceof Array)) {
        console.log(`Found element ${someArray}, but it wasn't an array`)
    } else {
        if(document.getElementById(someName) == null){
            console.log("Couldn't find document...")
        }
        else{
            let a = document.getElementById(someName)
            if(a instanceof HTMLElement) {
                if(itemArray[num] == 0){
                    const r = Math.floor(Math.random() * someArray.length);
                    const dec = someArray[r];
                    //logic for dictionary logging
                    var name = catNames.get(dec);
                    if(name == undefined){
                        console.log("This is not a cat's name.");
                    } else {
                        dictionaryCats.set(name, true);
                        if(currentLoadedCats.get(name)){
                            name = "none";
                        }
                        currentLoadedCats.set(name, true);
                        const wah = 'Assets/kitties/' + name + '.png'
                        a.setAttribute('src', wah);
                    }
                }
                else{
                    let b = document.getElementById(someItem)
                    if(b instanceof HTMLElement) {
                        someArray = areas[itemArray[num]]
                        if(someArray != null){
                            const r = Math.floor(Math.random() * someArray.length);
                            const dec = someArray[r];
                            var name = catNames.get(dec);
                            var toy = slashes[itemArray[num]];
                            if(name == undefined){
                                console.log("This is not a cat's name.");
                            }
                            else {
                                dictionaryCats.set(name, true);
                                if(currentLoadedCats.get(name)){
                                    name = "none";
                                }
                                const wah = 'Assets/toys/'+toy+'/'+name+'.png'
                                const weh = 'Assets/kitties/'+name+'.png'
                                b.setAttribute('src', wah);
                                a.setAttribute('src', weh);
                            }
                        } 
                    }
                }
            }
        }
    }
}  


function updateDictionary(){
    for(var i = 1; i <= dictionaryCats.size; i++){
        var name = catNames.get(i);
        if(name == undefined){
            console.log("Name not avaliable:", name)
        }
        else{
            if(dictionaryCats.get(name)){
                const cat = name + "Dict";
                let a = document.getElementById(cat);
                console.log(name, " ", "in dict");
                if(a instanceof HTMLElement){
                    const wah = 'Assets/kitties/' + name + '.png'
                    a.setAttribute('src', wah);
                }
            }
        }
    }
    const dc = JSON.stringify(dictionaryCats, replacer);
    localStorage.dc = dc;
}




// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export { onAreaLoad, individualLoad};