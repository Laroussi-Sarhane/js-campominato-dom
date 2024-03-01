const gridContainer = document.querySelector('.my_container');
 

//  const btn_genera = document.getElementById('btn_genera');

// btn_genera.addEventListener('click' reset);


reset();

for(let i = 1; i <= 100; i++){
  const square = getsquare(i);
  
  gridContainer.append(square);
}











// function

function reset(){
  gridContainer.innerHTML = '';
}

function getsquare(numero){
  const sq = document.createElement('div');
  sq.className = 'square';
  sq._sqId = numero ;
   //(this in questo caso è il mio quadrato è il mio elemento che clicco ricrda che sta dentro a click! NB)
  sq.addEventListener('click', function(){
    console.log(this._sqId)
    
    if(this.innerHTML === ''){
      this.innerHTML = this._sqId;
    }else{
      this.innerHTML = '';
    }

    this.classList.toggle('clicked');
    this.classList.toggle(getOddEventClass(numero))
  })


  return sq;
}

function getOddEventClass(n){
  if(n % 2 === 0){
    return'event'
  }
  return 'odd'
}

function bombeGenera(){
let arrayBombe = [];

for(let i =0; i<16; i++){
let bomba = Math.floor(Math.random() * 100) +1;
arrayBombe.push(bomba);

}
return arrayBombe;


}