//rooms.js -- used specifically for loading rooms


// The window.onload callback is invoked when the window is first loaded by the browser
import{prepareClick, prepareSpan} from "../src/modal.js"
window.onload = function () {
    onAreaLoad();
    prepareClick();
    prepareSpan();
};


let areaOne = [0,0,0,0,0,1,1,1,1,2,2,2,3,3,3];
let areaTwo = [0,0,0,0,0,1,1,1,1,2,2,2,3,3,3];
let areaThree = [0,0,0,0,0,1,1,1,1,2,2,2,3,3,3];
let areaFour = [0,0,0,0,0,1,1,1,1,2,2,2,3,3,3];
let catNames = new Map<Number,String>();

//loading catNames (can be moved as desired, written as map for code modularity)
catNames.set(0, "none");
catNames.set(1, "Catherine");
catNames.set(2, "Catptain Jack");
catNames.set(3, "Kitlyn");
catNames.set(4, "Rrrachel");
catNames.set(5, "El");
catNames.set(6, "Celia");
catNames.set(7, "Remeow");
catNames.set(8, "Liza");
catNames.set(9, "Noah");
catNames.set(10, "Nickitty");
catNames.set(11, "Gabby Tabby");
catNames.set(12, "Amy");
catNames.set(13, "Emmau");
catNames.set(14, "Cleocatra");

let currentLoadedCats = new Map<String, Boolean>();
let dictionaryCats = new Map <String, Boolean>();
dictionaryCats.set("Catherine", false);
dictionaryCats.set("Catptain Jack", false);
dictionaryCats.set("Kitlyn", false);
dictionaryCats.set("Rrrachel", false);
dictionaryCats.set("El", false);
dictionaryCats.set("Celia", false);
dictionaryCats.set("Remeow", false);
dictionaryCats.set("Liza", false);
dictionaryCats.set("Noah", false);
dictionaryCats.set("Nickitty", false);
dictionaryCats.set("Gabby Tabby", false);
dictionaryCats.set("Amy", false);
dictionaryCats.set("Emmau", false);
dictionaryCats.set("Cleocatra", false);


function onAreaLoad(){
    individualLoad(areaOne, 'kittyOne');
    individualLoad(areaTwo, 'kittyTwo');
    individualLoad(areaThree, 'kittyThree');
    individualLoad(areaFour, 'kittyFour');
    updateDictionary();
}

function individualLoad(someArray: string | any[] | null, someName: string){
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
                        console.log("Repeater!");
                    }
                    currentLoadedCats.set(name, true);
                    const wah = 'Assets/kitties/' + name + '.png'
                    console.log("Here's the filepath: ", wah, " and here's the someName " + someName);
                    a.setAttribute('src', wah);
                }
            }

        }
    }
}

function updateDictionary(){
    for(var i = 1; i <= dictionaryCats.size; i++){
        var name = catNames.get(i);
        if(name == undefined){
            console.log("Name not avaliable.")
        }
        else{
            if(dictionaryCats.get(name)){
                const cat = name + "Dict";
                let a = document.getElementById(cat);
                if(a instanceof HTMLElement){
                    const wah = 'Assets/kitties/' + name + '.png'
                    a.setAttribute('src', wah);
                }
            }
        }
    }
}




// Provide this to other modules (e.g., for testing!)
// The configuration in this project will require /something/ to be exported.
export { onAreaLoad, individualLoad};
