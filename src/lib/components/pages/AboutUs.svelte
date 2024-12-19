<script>
    import Scenery from '$lib/assets/about-us-scenery.jpg'
    import Skyline from '$lib/assets/backdrop-skyline.png'
    import Song from '$lib/assets/christmas-playlist.mp3'
    import InfiniteCarrousel from '../organisms/InfiniteCarrousel.svelte'
    import Mascotte from '../organisms/Mascotte.svelte';
    import Canvas from '../organisms/Canvas.svelte';
    import Title from '../atoms/Title.svelte'
    
    export let items
    let content = items[3].componentsCollection.items

    import { onMount } from 'svelte';
    onMount(() => {
      const button = document.getElementById("christmas-toggle"),
            text = document.getElementById('sign'),
            santa = document.querySelector('.sleigh-santa'),
            song = document.querySelector('audio'),
            logos = document.querySelectorAll('.color-logo'),
            titles = document.querySelectorAll('.christmas-title'),
            root = document.querySelector(':root');
      
      button.addEventListener("click", function() {
          root.classList.toggle("christmas-theme");
          if (text.innerHTML === 'Enter') {
            text.innerHTML = "Leave";
            santa.style.display = "block"
            logos.forEach((logo) => {
              logo.style.filter = "brightness(100)"
            })
            titles.forEach((title) => {
              title.style.fontFamily = "WonderfulChristmas"
              title.style.textTransform = "capitalize"
            })
            song.play()
          } else {
            text.innerHTML = "Enter";
            santa.style.display = "none"
            logos.forEach((logo) => {
              logo.style.filter = "unset"
            })
            titles.forEach((title) => {
              title.style.fontFamily = "Epilogue"
              title.style.textTransform = "uppercase"
            })
            song.pause()
          }
        });
      });
</script>

<audio src={Song}></audio>

<svelte:head>
  <title>WoGo | Over ons</title>
</svelte:head>

<section id="about">
  <article>
    <Title 
      headertype='h1'
      content='{items[0].title}' 
      color='light' />
    <blockquote class="initial">{items[0].textParagraph}</blockquote>
  </article>
  <div>
    <img src={Scenery} alt="Two people toasting">
  </div>
</section>

<section id="mission">
  <Title 
    headertype='h2'
    content='{items[1].title}' 
    color='light' />
  <p class="initial">{items[1].textParagraph}</p>
</section>

<section id="partners">
  <Title 
    headertype='h2'
    content='{items[2].title}' 
    color='dark' />
  <InfiniteCarrousel />
</section>

<section id="getuigenissen">
  <Title 
    headertype='h2'
    content='{content[0].title}' 
    color='light' />
  <p>{content[0].textParagraph}</p>
  <span>{content[1].textParagraph}</span>
  <!-- <img src={Skyline} alt="Cartoony skyline"> -->
  <Canvas />
</section>

<section id="information">
    {#each items[4].componentsCollection.items as item}
      <article>
        <Title 
          headertype='h3'
          content='{item.title}' 
          color='dark' />
        <p class="initial">{item.textParagraph}</p>
      </article>
    {/each}
</section>

<div class="snowflakes">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
</div>

<!-- <Mascotte /> -->

<style>
  /* Global Styling */
  * {
    line-height: 1.4;
    text-transform: uppercase;
  }
  .initial {
    text-transform: initial;
  }
  section {
    width: 100vw;
    height: 100vh;
		display: flex;
    position: relative;
		align-items: center;
		flex-direction: column;
		justify-content: center;
  }
  p:not(#information p),
  blockquote {
    font-size: 1.1em;
    font-weight: 600;
    color: var(--txt-quaternary-clr);
    max-width: 72ch;
  }
  blockquote {
    font-style: italic;
  }

  /* 'Over ons' section */
  #about {
    flex-direction: row;

    & div, article {
      width: 50%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    & div {
      & img {
        max-width: 60%;
        aspect-ratio: 1;
        object-fit: cover;
      }
    }
  }

  /* 'Onze missie' section */
  #mission {
    background: var(--accent1-tertiary);

    & p {
      font-weight: 400 !important;
      margin: 0 var(--margin);
    }
  }

  /* 'Partners' section */
  #partners {
    text-align: center;
    height: fit-content;
    align-items: inherit;
    background: var(--accent2-primary);

    & h2 {
      margin: var(--margin) 0;
    }
  }

  /* 'Getuigenissen' section */
  #getuigenissen {
    text-align: center;
    font-weight: bold;
    overflow: hidden;

    & p {
      margin: 0 var(--margin);
    }

    & span {
      margin: var(--margin);
      color: var(--title-primary);
    }
    & img {
      position: absolute;
      bottom: 0;
    }
  }

  /* 'Informatie' section */
  #information {
    background: var(--accent2-primary);
    min-height: fit-content;
    flex-direction: row;
    flex-wrap: wrap;

    & article {
      margin: 0 calc(var(--margin) * 2);
      height: fit-content;

      & p {
        max-width: 36ch;
        color: var(--btn-primary-text-clr);
      }
    }
  }
  
  /* Media Query for small-screens */
  @media (max-width: 768px) {
    #about {
      flex-direction: column;
    }
    #about div {
      width: 100%;
      margin: var(--margin) 0;
    }
  }

  /* Snowstorm */
.snowflakes {
	width: 100%; 
  height: 1200px;
	position: fixed; 
  top: -90px; 
  left: 0;
  pointer-events: none;
}

i, i:after, i:before { 
  background: var(--snowflake); 
}
i {
	display: inline-block;
	animation: snowflakes 3s linear 2s 20;
	position: relative;
}
i:after, i:before {
	height: 100%;
	width: 100%;
	content: ".";
	position: absolute;
	top: 0px;
	left: 0px;
	transform: rotate(120deg);
}
i:before { transform: rotate(240deg); }

@keyframes snowflakes {
	0% {
		transform: translate3d(0,0,0) rotate(0deg) scale(0.6);
	}
	100% {
		transform: translate3d(15px, 1200px, 0px) rotate(360deg) scale(0.6);
	}
}

.snowflakes i:nth-child(3n) {
	width: 16px; height: 4px;
	animation-duration: 4s;
	animation-iteration-count: 30;
	transform-origin: right -45px;
}

.snowflakes i:nth-child(3n+1) {
	width: 24px; height: 6px;
	animation-duration: 6s;
	animation-iteration-count: 45;
	transform-origin: right -30px;
}

.snowflakes i:nth-child(3n+2) {
	width: 32px; height: 8px;
	animation-duration: 8s;
	animation-iteration-count: 60;
	transform-origin: right -15px;
}
	
.snowflakes i:nth-child(7n) {
  opacity:.3;
  animation-delay: 0s;
  animation-timing-function:ease-in;
}
.snowflakes i:nth-child(7n+1) {
  opacity:.4;
  animation-delay: 1s;
  animation-timing-function:ease-out;
}
.snowflakes i:nth-child(7n+2) {
  opacity:.5;
  animation-delay: 1.5s;
  animation-timing-function:linear;
}
.snowflakes i:nth-child(7n+3) {
  opacity:.6;
  animation-delay: 2s;
  animation-timing-function:ease-in;
}
.snowflakes i:nth-child(7n+4) {
  opacity:.7;
  animation-delay: 2.5s;
  animation-timing-function:linear;
}
.snowflakes i:nth-child(7n+5) {
  opacity:.8;
  animation-delay: 3s;
  animation-timing-function:ease-out;
}
.snowflakes i:nth-child(7n+6) {
  opacity:.9;
  animation-delay: 3.5s;
  animation-timing-function:ease-in;
}
</style>