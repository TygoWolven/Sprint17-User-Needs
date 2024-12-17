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
