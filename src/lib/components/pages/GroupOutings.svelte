<script>
  import { Hero2, BookingsForm } from '$lib/index';
</script>

<svelte:head>
  <title>Groepsboekingen</title>
</svelte:head>

<div class="page-wrapper">
  <div class="animation-layer">
    <Hero2 />
    <BookingsForm />
  </div>
</div>

<style>
  .page-wrapper {
    position: relative;
    overflow: hidden;
    background: linear-gradient(180deg, rgb(255, 255, 255), rgba(221, 174, 144, 0.2), rgba(32, 22, 17, 0.6));
    background-size: 100% 100%;
    background-attachment: fixed;
    background-position: center calc(var(--scroll-y, 0px) * -0.5px);
  }
  .page-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Let clicks go through */
    background-image: 
      radial-gradient(4px 4px at 20% 20%, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(3px 3px at 50% 50%, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(5px 5px at 70% 80%, rgba(255, 255, 255, 0.8), transparent);
    background-size: 200px 200px;
    animation: snowFall 10s linear infinite;
  }
  @keyframes snowFall {
    0% {
      background-position: 0 0, 0 0, 0 0;
    }
    100% {
      background-position: 0 100%, 0 100%, 0 100%;
    }
  }
  .animation-layer {
    position: relative;
    animation: glitchEffect 3s ease-out forwards;
  }
  @keyframes glitchEffect {
    0% {
      filter: blur(60px);
    }
    25% {
      filter: blur(40px);
    }
    50% {
      filter: blur(20px);
    }
    75% {
      filter: blur(10px);
    }
    100% {
      filter: blur(0);
    }
  }
</style>
