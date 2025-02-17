const grid=document.querySelector(".grid");
const btn= document.querySelector("btn")
let numcount=document.getElementById("numcount");
let count=0;
const symbols=["🍇","🍉","🍓","🫐"];
const cards=[...symbols,...symbols];
let cardsflipped=[];
let matchingpair=0;

function shuffle(array){
    for(let i=array.length-1;i>=0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }
}
shuffle(cards);
cards.forEach((symbols)=>{
    const card=document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol=symbols;
    card.addEventListener("click",flipcard);
    grid.appendChild(card);
})
function flipcard() {
    if (cardsflipped.length < 2 && !this.classList.contains("flipped")) {
        this.textContent = this.dataset.symbol;
        this.classList.add("flipped");
        cardsflipped.push(this);
        increment();
        if (cardsflipped.length == 2) {
            setTimeout(checkmatch, 800);
        }
    }
}
function checkmatch(){
    const [card1,card2]=cardsflipped;
    if (card1.dataset.symbol===card2.dataset.symbol){
        matchingpair++;
        if(matchingpair===symbols.length){
            alert("🎉you win!!🎉");
        }
    }else{
        card1.textContent="";
        card2.textContent="";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");

    }
    cardsflipped=[];
}
function reset(){
    
    cardsflipped=[];
    matchingpair=0;
    const allcards=document.querySelectorAll(".card");
    allcards.forEach(cards => {
        cards.textContent="";
        cards.classList.remove("flipped");
    });
    count=0;
    numcount.textContent = count
    
    
    shuffle(cards);
    grid.innerHTML="";
    cards.forEach((symbols)=>{
    const card=document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol=symbols;
    card.addEventListener("click",flipcard)
    grid.appendChild(card)
  
})
}
function increment(){
    count++;
    numcount.textContent=count;
}
