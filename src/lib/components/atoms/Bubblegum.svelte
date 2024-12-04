<div class="bubble">
  <div class="shadow"></div>
</div>

<style>
  .bubble {
    background: var(--primary);   
    width: 10rem;
    height: 10rem;
    position: fixed;
    overflow: hidden;

    border-radius: 100%;
    border: 0.25rem solid var(--tertiary);
    animation: growBubblegum ease-in forwards;
    animation-timeline: scroll(y);
    transform-origin: left;

    bottom: 3rem;
    left: 5rem;
    z-index: 200;
  }
  
  .shadow {
    background: radial-gradient(
        at 25% 25%,
        var(--primary) 40%,
        var(--secondary) 60%
    );
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @keyframes growBubblegum {
    0% {
        scale: 0;
    }
    72% {
        scale: 2;
    }
    82%, 100% {
      scale: 6;
      visibility: hidden;
    }
  }  
</style>