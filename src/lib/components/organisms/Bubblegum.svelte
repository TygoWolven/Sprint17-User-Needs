<script>
  import Crack from '$lib/assets/crack.png'
</script>

<div class="explosion">
  <div class="foreground">
    <span>PANG!</span>
  </div>
  <div class="background"></div>
  <div class="background"></div>
</div>

<div class="bubble">
  <div class="shadow"></div>
  <div class="glimp"></div>
</div>

<img src={Crack} alt="crack" class="screencrack">

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
  .screencrack {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.25;
    animation: show ease-in forwards;
    animation-timeline: scroll(y);
  }
  .explosion {
    animation: pop ease-in forwards;
    animation-timeline: scroll(y);
  }
  @keyframes pop {
    0% {
      visibility: hidden;
    }
    81% {
      visibility: hidden;
    }
    82% {
      visibility: visible;
    }
    93% {
      visibility: visible;
    }
    94% {
      visibility: hidden;
    }
    100% {
      visibility: hidden;
    }
  }
  @keyframes show {
    0% {
      visibility: hidden;
    }
    81% {
      visibility: hidden;
    }
    82% {
      visibility: visible;
    }
    93% {
      visibility: visible;
    }
  }
  .foreground {
    clip-path: polygon(63% 21%, 53% 9%, 44% 21%, 32% 14%, 26% 27%, 11% 23%, 13% 37%, 0 47%, 13% 55%, 14% 70%, 28% 66%, 36% 77%, 48% 66%, 59% 79%, 68% 65%, 83% 72%, 84% 57%, 97% 52%, 89% 39%, 94% 25%, 79% 27%, 76% 14%);    
    background: white;
    position: fixed;
    bottom: 1rem;
    left: 11rem;
    width: 13rem;
    height: 13rem;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      font-size: 3rem;
      color: rgb(200, 0, 0);
      font-weight: 900;
      text-shadow: 3px 0 0 black, 3px 3px 0 black;
      transform: translateY(-0.5rem);
    }
  }
  .background {
    clip-path: polygon(63% 21%, 53% 9%, 44% 21%, 32% 14%, 26% 27%, 11% 23%, 13% 37%, 0 47%, 13% 55%, 14% 70%, 28% 66%, 36% 77%, 48% 66%, 59% 79%, 68% 65%, 83% 72%, 84% 57%, 97% 52%, 89% 39%, 94% 25%, 79% 27%, 76% 14%);    background: yellow;
    background: rgb(255, 200, 0);
    position: fixed;
    bottom: 0;
    left: 10rem;
    width: 15rem;
    height: 15rem;
    z-index: 75;
  }
  .background + .background {
    width: 17rem;
    height: 17rem;
    background: rgb(200, 0, 0);
    bottom: -1rem;
    left: 9rem;
    z-index: 50;
  }
  .bubble {
      position: fixed;
      bottom: 3rem;
      z-index: 100;
      left: 7.5rem;
      overflow: hidden;
      width: 10rem;
      aspect-ratio: 1;
      border-radius: 100%;
      background: var(--primary);   
      border: 0.25rem solid var(--tertiary);
      animation: grow-progress ease-in forwards;
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
      }
      82% {
        scale: 5;
        visibility: hidden;

      }
      100% {
        scale: 1;
        visibility: hidden;
      }
  }  

  .cartoon {
    position: fixed;
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
    height: 40%;
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
    height: 8%;
    background: linear-gradient(
      to bottom,
      darkred 50%,
      red 50%
    );
    border-radius: 100% / 70% 70% 100% 100%;
    bottom: 17%;
    left: 50%;
    transform: translate(-50%, 0);
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
    height: 16%;
    background: white;
    border-radius:  80% 100% 40% 40% / 80% 100% 80% 100%;
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
    width: 35%;
    height: 80%;
    background: #222;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-55%, -40%);
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
    top: 20%;
    right: 4%;
    border-radius:  100% 90% 100% 40% / 70% 100% 90% 100%;
    box-shadow: -0.25vmin -1.5vmin 0 -0.25vmin rgba(0,0,0,0.1), -0.25vmin -1.5vmin 0 -0.25vmin var(--hair);
    transform: rotate(4deg);
  }

  .eyebrow + .eyebrow {
    transform: scaleX(-1) rotate(4deg);
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