<div class="explosion">
  <div class="pop">POP!</div>
  <div class="foreground"></div>
  <div class="background"></div>
  <div class="background"></div>
</div>

<style>
  @font-face {
    font-family: 'Chewy';
    src: url('fonts/Chewy.ttf') format('truetype');
  }

  .explosion {
    animation: popBubblegum ease-in forwards;
    animation-timeline: scroll(y);
    font-family: Chewy;
  }

  @keyframes popBubblegum {
    0%, 80% {
      visibility: hidden;
    }
    82% {
      visibility: visible;
    }
  }

  .pop {
    color: var(--primary);
    position: fixed;

    text-shadow: 6px 0 0 black, 6px 6px 0 black;
    transform: translateY(-0.5rem) rotate(5deg);
    letter-spacing: -5px;
    font-weight: 900;
    font-size: 8rem;

    bottom: 2.5rem;
    left: 11rem;
    z-index: 200;
  }

  .foreground {
    background: rgb(250, 250, 250);
    width: 12rem;
    height: 12rem;
    position: fixed;

    clip-path: polygon(63% 21%, 53% 9%, 44% 21%, 32% 14%, 26% 27%, 11% 23%, 
                       13% 37%, 0 47%, 13% 55%, 14% 70%, 28% 66%, 36% 77%, 
                       48% 66%, 59% 79%, 68% 65%, 83% 72%, 84% 57%, 97% 52%, 
                       89% 39%, 94% 25%, 79% 27%, 76% 14%);    
    justify-content: center;
    align-items: center;
    display: flex;

    bottom: 1.5rem;
    left: 11.5rem;
    z-index: 100;

  }

  .background {
    background: var(--secondary);
    width: 16rem;
    height: 16rem;
    position: fixed;

    clip-path: polygon(63% 21%, 53% 9%, 44% 21%, 32% 14%, 26% 27%, 11% 23%, 
                       13% 37%, 0 47%, 13% 55%, 14% 70%, 28% 66%, 36% 77%, 
                       48% 66%, 59% 79%, 68% 65%, 83% 72%, 84% 57%, 97% 52%, 
                       89% 39%, 94% 25%, 79% 27%, 76% 14%);
    bottom: -0.5rem;
    left: 9.5rem;
    z-index: 75;
  }

  .background + .background {
    background: var(--tertiary);
    width: 17.5rem;
    height: 17.5rem;

    bottom: -1.5rem;
    left: 8.75rem;
    z-index: 50;
  }
</style>