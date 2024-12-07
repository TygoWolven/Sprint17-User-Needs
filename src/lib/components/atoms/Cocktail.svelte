<div class="martini">
  <div class="glass"></div>
  <div class="olives"></div>
</div>  

<style>
  .martini {
    position: fixed;
    width:0;
    height:0;
    scale: 0.75;

    border-bottom: 25px solid var(--glass);
    border-right: 35px solid transparent;
    border-left: 35px solid transparent;

    animation: flyingGlass ease-in forwards;
    animation-timeline: scroll(y);
    transition: .3s ease;

    bottom: 5.5rem;
    left: 10.5rem;
    z-index: 150;
  }

  .martini:after {
    background-color: var(--glass);
    position: absolute;
    content:"";
    width:4px;
    height:40px;

    top:-35px;
    left:-2px;
  }
  
  @keyframes flyingGlass {
    0%, 80% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(50vw) 
                 translateY(-150vh) 
                 rotate(360deg) 
                 scale(6);
    }
  }
  
  .glass {
    position: absolute;
    width:0;
    height:0;

    border-top:50px solid var(--glass);
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;

    top:-83px;
    left:-50px;
  }
  
  .glass:before {
    position: absolute;
    content:"";
    width:0;
    height:0;

    border-top:40px solid var(--primary);
    border-right:40px solid transparent;
    border-left:40px solid transparent;

    top:-46px;
    left:-40px;
  }
  
  .glass:after {
    position: absolute;
    content:"";
    width:0;
    height:0;

    border-top:30px solid var(--secondary);
    border-right: 30px solid transparent;
    border-left: 30px solid transparent;

    top:-36px;
    left:-30px;
  }
  
  .olives {
    background-color: olive;
    position: absolute;
    width:13px;
    height:13px;

    left:25px;
    top:-100px;
    border-radius:50%;
  }
  
  .olives:before {
    background-color: black;
    position: absolute;
    content:"";
    width:4px;
    height:60px;

    top:-10px;
    left:-4px;
    z-index: -50;
    border-radius:10px;
    transform: rotate(35deg);
  }
  
  .olives:after {
    position: absolute;
    content:"";
    width:5px;
    height: 5px;

    top:43px;
    left:-23.5px;
    border-radius:50%;
    background-color: var(--glass);
    box-shadow:-5px -10px var(--glass),
               -10px 0 var(--glass), 
               10px -10px var(--glass),
               -20px -10px var(--glass);
    animation: cocktailBubbles 2s infinite;
  }
  
  @keyframes cocktailBubbles {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>