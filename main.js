const divcont = document.querySelector("div#content"); 

//1
let h2 = document.createElement("h2"); 
h2.innerHTML="Part 6 - exo 1!"; 
divcont.append(h2);

// 2 
let par = document.createElement("p"); 
par.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatum?";
divcont.appendChild(par);

//3 
let h1 = document.createElement("h1"); 
h1.innerHTML="Le dom - creation de html ! "; 
divcont.insertBefore(h1, h2);

// 4 

let content = divcont.innerHTML; 

let sec = document.querySelector("div#secondaire"); 

sec.innerHTML = content; 

sec.children[1].innerHTML=sec.children[1].innerHTML.replace("1","2");



// 5 
const divMat = document.createElement("div"); 
divMat.setAttribute("id", "matiere"); 
const ul = document.createElement("ul"); 
const li1 = document.createElement("li"); 
const li2 = document.createElement("li"); 
const li3 = document.createElement("li"); 

li1.innerHTML= "Créé un nouveau element";
li2.innerHTML= "ajouter un texte dans cet nouveau element"; 
li3.innerHTML= "ajouter un enfant pour cet nouveau element"; 
ul.append(li1,li2,li3);
Array.from(ul).forEach((e) => {
    console.log(e.innerHTML);
    divMat.innerHTML+= e.innerHTML;
}); 
divMat.append(ul); 
document.body.insertBefore(divMat, sec.nextElementSibling);