const gridContainer = document.querySelector('.my_container');
 
let arrayBombe = [];
//  const btn_genera = document.getElementById('btn_genera');

//  btn_genera.addEventListener('click' reset);


reset();

for(let i = 1; i <= 100; i++){
  const square = getsquare(i);
  bombeGenera();

  
  gridContainer.append(square);
  let bombs = bombeGenera()
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
    bombeGenera();
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

while (arrayBombe.length < 16){

  const numeroRandom = Math.floor(Math.random() * 100) +1;

  
  if (! arrayBombe.includes(numeroRandom)){
    arrayBombe.push(numeroRandom);
  }
  
  numeroRandom.className ='bomba';

}

return arrayBombe;
}


/////////////


