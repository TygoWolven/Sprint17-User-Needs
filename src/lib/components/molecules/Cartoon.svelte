<script>
    import Explosion from "../atoms/Explosion.svelte";
    import Bubblegum from "../atoms/Bubblegum.svelte";
    import Cocktail from "../atoms/Cocktail.svelte";
</script>

<Explosion />
<Bubblegum />
<Cocktail />

<div class="cartoon">
  <div class="upperarm"></div>
  <div class="upperarm"></div>
  <div class="forearm"></div>
  <div class="hand"></div>
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
  .cartoon {
    position: fixed;
    width: 15rem;
    height: 15rem;

    bottom: 0;
    left: -2.5rem;
    z-index: 100;
  }

  .cartoon div {
    position: absolute;
    box-sizing: border-box;
  }

  .hair-back {
    background: conic-gradient(
      var(--primary),
      var(--tertiary)
    );
    width: 50%;
    height: 60%;

    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 100% 100% / 80% 80% 10% 10%;
    box-shadow: inset 0 0 0 10vmin rgba(0,0,0,0.075)
  }

  .face {
    background: var(--skin);
    width: 36%;
    height: 40%;

    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100% 100% / 20% 20% 120% 120%;
  }

  .ear {
    background: var(--skin);
    width: 6%;
    height: 15%;

    top: 28%;
    left: 29%;
    transform: rotate(-10deg);
    border-radius: 90% 100% 70% 100% / 70% 100%;
    box-shadow: inset -9vmin 0 0 -7vmin var(--line);
  }

  .ear::before {
    width: 60%;
    height: 80%;

    top: 15%;
    left: 4%;
    border-radius: 100% 50% 0 0;
    border-left-color: transparent;
    border-bottom-color: transparent;
    border: 0.25vmin solid var(--line);
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);
  }

  .ear::after {
    width: 2vmin;
    height: 2vmin;

    top: 50%;
    right: 8%;
    border-radius: 50%;
    border: 0.25vmin solid var(--line);
  }

  .ear + .ear {
    left: auto;
    right: 29%;
    transform: scaleX(-1) 
               rotate(-10deg);
  }

  .earring::after {
    content: "";
    display: block;
    position: absolute;
  }

  .eye {
    background: white;
    overflow: hidden;
    width: 35%;
    height: 16%;

    top: 28%;
    right: 7%;
    box-shadow: 0 -0.5vmin var(--line);
    border-radius:  80% 100% 40% 40% / 80% 100% 80% 100%;
  }

  .eye + .eye {
    transform: scaleX(-1);
    right: auto;
    left: 7%;
  }

  .pupil {
    background: #222;
    width: 35%;
    height: 80%;

    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-55%, -40%);
    box-shadow: 0 0 0 0.6vmin var(--iris);
  }

  .eyebrow {
    width: 40%;
    height: 20%;

    top: 20%;
    right: 4%;
    transform: rotate(4deg);
    border-radius:  100% 90% 100% 40% / 70% 100% 90% 100%;
    box-shadow: -0.25vmin -1.5vmin 0 -0.25vmin rgba(0,0,0,0.1), 
                -0.25vmin -1.5vmin 0 -0.25vmin var(--hair);
  }

  .eyebrow + .eyebrow {
    left: 4%;
    right: auto;
    transform: scaleX(-1) 
               rotate(4deg);
  }

  .nose {
    background: var(--line);
    width: 16%;
    height: 30%;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    clip-path: polygon(50% 0%, 60% 88%, 0% 85%, 55% 100%, 100% 88%);
  }

  .cheek {
    background: #f002;
    width: 80%;
    height: 10%;

    top: 50%;
    left: 50%;
    filter: blur(1vmin);
    transform: translate(-50%, -50%);
    border-radius: 20% 20% 100% 100%;
  }

  .mouth {
    background: linear-gradient(
      to bottom,
      darkred 50%,
      red 50%
    );
    width: 40%;
    height: 8%;

    bottom: 17%;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 100% / 70% 70% 100% 100%;
  }

  .neck {
    background: var(--skin);
    width: 15%;
    height: 25%;

    top: 46%;
    left: 50%;
    border-radius: 8vmin;
    transform: translate(-50%, 0);
    box-shadow: inset 0 25.5vmin 0 -15vmin var(--line), 
                inset 0 -3vmin 0 -1vmin rgba(0,0,0,0.2), 
                inset 0 -3vmin 0 -1vmin var(--shirt);
  }

  .shoulders {
    background: var(--shirt);
    width: 70%;
    height: 40%;

    top: 61%;
    left: 50%;
    transform: translate(-50%, 0);
    clip-path: polygon(0% 40%, 40% 10%, 40% 0%, 60% 0%, 60% 10%, 100% 40%, 100% 100%, 0% 100%)
  }

  .upperarm {
    background: var(--shirt);
    width: 15%;
    height: 40%;

    top: 77%;
    left: 81.1%;
    z-index: 120;
    rotate: -10deg;
    transform: translate(-50%, 0);
  }

  .upperarm::after {
    position: absolute;
    content:"";

    background: var(--primary);
    width: 2px;
    height: 50%;

    bottom: 25%;
    left: 0;
  }

  .upperarm + .upperarm {
    transform: scaleX(-1);
    rotate: 10deg;
    left: 11%;
  }

  .forearm {
    background: var(--shirt);
    width: 15%;
    height: 40%;

    top: 70%;
    left: 95%;
    z-index: 120;
    rotate: 10deg;
    transform: translate(-50%, 0);
  }

  .hand {
    background: var(--skin);
    width: 17%;
    height: 17%;

    top: 61%;
    left: 101%;
    border-radius: 50%;
    transform: translate(-55%, -40%);
  }
</style>