<script>
    import Scenery from '$lib/assets/about-us-scenery.jpg'
    import Skyline from '$lib/assets/backdrop-skyline.png'
    import InfiniteCarrousel from '../organisms/InfiniteCarrousel.svelte'
    import Title from '../atoms/Title.svelte'
    import Bubblegum from '../organisms/Bubblegum.svelte'

    export let items
    let content = items[3].componentsCollection.items
</script>

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
  <img src={Skyline} alt="Cartoony skyline">
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

<Bubblegum />

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
      color: var(--txt-secondary-clr);
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
      margin: var(--margin);

      & p {
        max-width: 36ch;
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
</style>
