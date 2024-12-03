<div class="bubble">
    <div class="shadow"></div>
    <div class="glimp"></div>
</div>

<div class="cartoon">
    <div class="shoulders"></div>
    <div class="hair-back"></div>
    <div class="neck"></div>
    <div class="ear earring"></div>
    <div class="ear earring"></div>
    <div class="face">
      <div class="cheek"></div>
      <div class="nose"></div>
      <div class="mouth"></div>
      <div class="eye">
        <div class="pupil"></div>
      </div>
      <div class="eye">
        <div class="pupil"></div>
      </div>
      <div class="eyebrow"></div>
      <div class="eyebrow"></div>
    </div>
  </div>

<style>
  :root {
      /* Colors */
      --primary: #FFC2EC;
      --secondary: #F79EDB;
      --tertiary: #C581B0;
  } 
  .bubble {
      position: sticky;
      bottom: 2.6rem;
      z-index: 100;
      left: 7.5rem;
      overflow: hidden;
      width: 10rem;
      aspect-ratio: 1;
      border-radius: 100%;
      background: var(--primary);   
      border: 0.25rem solid var(--tertiary);
      animation: grow-progress linear forwards;
      animation-timeline: scroll(y);
      transform-origin: left;
      z-index: 200;
  }
  .shadow {
      position: absolute;
      top: 0;
      width: 100%;
      aspect-ratio: 1;
      background: radial-gradient(
          at 25% 25%,
          var(--primary) 40%,
          var(--secondary) 60%
      );
  }
  .glimp {
      position: absolute;
      top: 20%;
      left: 20%;
      width: 15%;
      height: 15%;
      background: white;
      border-radius: 75% 40% 75% 40%;
  }
  @keyframes grow-progress {
      0% {
          scale: 0;
      }
      80% {
          scale: 1;
          visibility: hidden;
      }
      100% {
        scale: 1;
        visibility: hidden;
      }
  }  

  .cartoon {
    position: sticky;
    bottom: 0;
    left: 0;
    width: 15rem;
    height: 15rem;
    z-index: 100;
  }

  .cartoon div {
    position: absolute;
    box-sizing: border-box;
  }

  .earring::after {
    content: "";
    display: block;
    position: absolute;
  }

  /****/
  .cartoon {
    --skin: #fca; 
    --iris: var(--primary);
    --hair: var(--secondary);
    --shirt: var(--tertiary);
    --line: rgba(80,0,0,0.15);
  }

  .face {
    width: 36%;
    height: 45%;
    background: var(--skin);
    border-radius: 100% 100% / 20% 20% 120% 120%;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .neck {
    width: 15%;
    height: 25%;
    background: var(--skin);
    top: 46%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 8vmin;
    box-shadow: inset 0 25.5vmin 0 -15vmin var(--line), inset 0 -3vmin 0 -1vmin rgba(0,0,0,0.2), inset 0 -3vmin 0 -1vmin var(--shirt);
  }

  .mouth {
    width: 40%;
    height: 3%;
    border: 0.25vmin solid rgba(0,0,0,0.2);
    border-top-color: transparent;
    border-radius: 100% / 100% 100% 40% 50%;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 0) rotate(2deg);
  }

  .nose {
    width: 16%;
    height: 30%;
    background: var(--line);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    clip-path: polygon(50% 0%, 60% 88%, 0% 85%, 55% 100%, 100% 88%);
  }

  .ear {
    width: 6%;
    height: 15%;
    border-radius: 90% 100% 70% 100% / 70% 100%;
    background: var(--skin);
    box-shadow: inset -9vmin 0 0 -7vmin var(--line);
    transform: rotate(-10deg);
    top: 28%;
    left: 29%;
  }

  .ear::before {
    width: 60%;
    height: 80%;
    border-radius: 100% 50% 0 0;
    border: 0.25vmin solid var(--line);
    border-left-color: transparent;
    border-bottom-color: transparent;
    top: 15%;
    left: 4%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
  }

  .ear::after {
    width: 2vmin;
    height: 2vmin;
    border: 0.25vmin solid var(--line);
    border-radius: 50%;
    top: 50%;
    right: 8%;
  }

  .ear + .ear {
    transform: scaleX(-1) rotate(-10deg);
    left: auto;
    right: 29%;
  }

  .eye {
    width: 35%;
    height: 13%;
    background: white;
    border-radius:  80% 90% 30% 40% / 70% 100% 90% 100%;
    top: 28%;
    right: 7%;
    box-shadow: 0 -0.5vmin var(--line);
    overflow: hidden;
  }

  .eye + .eye {
    transform: scaleX(-1);
    right: auto;
    left: 7%;
  }

  .pupil {
    width: 25%;
    height: 50%;
    background: #222;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    box-shadow: 0 0 0 0.6vmin var(--iris);
  }

  .cheek {
    width: 80%;
    height: 10%;
    background: #f002;
    border-radius: 20% 20% 100% 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(1vmin)
  }

  .eyebrow {
    width: 40%;
    height: 20%;
    top: 15%;
    right: 4%;
    border-radius:  100% 90% 100% 40% / 70% 100% 90% 100%;
    box-shadow: -0.25vmin -1.5vmin 0 -0.25vmin rgba(0,0,0,0.1), -0.25vmin -1.5vmin 0 -0.25vmin var(--hair);
    transform: rotate(8deg);
  }

  .eyebrow + .eyebrow {

    transform: scaleX(-1) rotate(12deg);
    left: 4%;
    right: auto;
  }

  .hair-back {
    width: 50%;
    height: 60%;
    background: conic-gradient(
      var(--primary),
      var(--tertiary)
    );
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 100% 100% / 80% 80% 10% 10%;
    box-shadow: inset 0 0 0 10vmin rgba(0,0,0,0.075)
  }

  .shoulders {
    width: 70%;
    height: 30%;
    background: var(--shirt);
    border-radius: 50%;
    top: 61%;
    left: 50%;
    transform: translate(-50%, 0);
    clip-path: polygon(0% 40%, 40% 10%, 40% 0%, 60% 0%, 60% 10%, 100% 40%, 100% 100%, 0% 100%)
  }
</style>