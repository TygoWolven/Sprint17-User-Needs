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
    bottom: 0;
    left: -2.5rem;
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
  
  .upperarm {
    width: 15%;
    height: 40%;
    background: var(--shirt);
    top: 77%;
    left: 81.1%;
    transform: translate(-50%, 0);
    z-index: 120;
    rotate: -10deg;
  }

  .upperarm::after {
    content:"";
    background: var(--secondary);
    position: absolute;
    bottom: 25%;
    left: 0;
    height: 50%;
    width: 2px;
}

.upperarm + .upperarm {
  transform: scaleX(-1);
  rotate: 10deg;
  left: 11%;
}

.forearm {
    width: 15%;
    height: 40%;
    background: var(--shirt);
    top: 70%;
    left: 95%;
    transform: translate(-50%, 0);
    z-index: 120;
    rotate: 10deg;
  }

  .hand {
    width: 17%;
    height: 17%;
    background: var(--skin);
    border-radius: 50%;
    top: 61%;
    left: 101%;
    transform: translate(-55%, -40%);
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
    height: 40%;
    background: var(--shirt);
    top: 61%;
    left: 50%;
    transform: translate(-50%, 0);
    clip-path: polygon(0% 40%, 40% 10%, 40% 0%, 60% 0%, 60% 10%, 100% 40%, 100% 100%, 0% 100%)
  }
</style>