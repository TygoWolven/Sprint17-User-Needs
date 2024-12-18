<script>
  import { Button, IconCocktailThin, IconCalendarThin, IconClockThin, IconLocationThin, IconTourcardThin, IconGroupThin, IconBrushThin, IconCutleryThin } from '$lib/index'
  // export let items
  import image from "../../assets/kerstcocktail1.png"

  // Notes and durations for "Jingle Bells"
  const notes = [
    { freq: 659.25, duration: 400 }, // E
    { freq: 659.25, duration: 400 }, // E
    { freq: 659.25, duration: 800 }, // E (hold)
    { freq: 659.25, duration: 400 }, // E
    { freq: 659.25, duration: 400 }, // E
    { freq: 659.25, duration: 800 }, // E
    { freq: 659.25, duration: 400 }, // E
    { freq: 784, duration: 400 },    // G
    { freq: 523.25, duration: 400 }, // C
    { freq: 587.33, duration: 400 }, // D
    { freq: 659.25, duration: 1200 },// E (hold)
  ];

  // Function to play notes using Web Audio API
  function playJingleBells() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    let startTime = audioContext.currentTime;

    // Function to play a single note
    function playNote(freq, duration, time) {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.type = "sine"; // Sine wave for a smooth tone
      oscillator.frequency.value = freq;

      gainNode.gain.setValueAtTime(0.1, time); // Volume

      oscillator.start(time);
      oscillator.stop(time + duration / 1000); // Convert ms to seconds
    }

    // Schedule each note
    notes.forEach(({ freq, duration }) => {
      playNote(freq, duration, startTime);
      startTime += duration / 1000; // Move to the next note
    });
  }
</script>

<section>
  <video
    autoplay
    loop
    muted
    width="1280"
    height="1000"
    aria-label=""
    aria-hidden="true"
    poster="/hero-image-background.webp"
  >
    <!-- <source src="" type="video/webm" />
    <source src="" type="video/webm" />
    <source src="path/to/video-480p.mp4" type="video/mp4" media="(min-width: 480px)" />
    <source src="path/to/video-360p.mp4" type="video/mp4" media="(max-width: 1280px)" /> -->
  </video>
  <div class="overlay"></div>
  <article class="hero-content">
    <h1>
      GROEPSBOEKING
    </h1>
    <div class="hero-description">
      <p>Bedrijfsuitje, vrijgezellenfeest of vriendenactiviteit? De Cocktail Walk past perfect bij jou.</p>
      <Button
        variant="primary"
        title="Boek nu 🎁"
        iconColor="var(--btn-primary-text-clr)"
        size="lg"
      />
    </div>
  </article>
  <button on:click={playJingleBells}>
    <img src={image} alt="">
  </button>
</section>
<section>
  <div>
    <article>
      <p><IconLocationThin width="30" height="30" fill="white" />Amsterdam & Rotterdam</p>
      <p><IconCocktailThin width="30" height="30" fill="white" />3 Cocktails</p>
      <p><IconCalendarThin width="30" height="30" fill="white" />3 Barreseveringen</p>
      <p><IconClockThin width="30" height="30" fill="white" />7 Dagen per week</p>
    </article>
    <article>
      <p><IconTourcardThin width="30" height="30" fill="white" />Zelfgeleide tour van 3-4 uur</p>
      <p><IconGroupThin width="30" height="30" fill="white" />Groepsgroottes 6-30 personen</p>
      <p><IconBrushThin width="30" height="30" fill="white" />Gepersonaliseerde kaart & routes mogelijk</p>
      <p><IconCutleryThin width="30" height="30" fill="white" />Snacks mogelijk</p>
    </article>
  </div>
</section>

<style>
  section {
    padding-inline: 2em;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.6); /* Snowy glow */
    container: cocktail / inline-size;
  }

  section:nth-of-type(1) {
    display: grid;
    position: relative;
    height: 55vh;
    overflow: hidden;
    align-items: center;
  }
  section:nth-of-type(1) > article {
    max-width: 90em;
    margin: auto;
    width: 100%;
  }
  section:nth-of-type(1) > button {
    position: absolute;
    bottom: -10%;
    right: 5%;
    z-index: 1;
    height: 45%;
    background: none;
    border: none;
    cursor: pointer;
    animation: shake 2s ease infinite;
  }

  section:nth-of-type(1) > button > img {
    height: 100%;
    width: 100%;
  }

  section:nth-of-type(2) {
    background-color: var(--accent1-secondary);
    padding-block: 2em;
  }

  section:nth-of-type(2) > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 90em;
    margin: auto;
    gap: 2em;
  }

  section:nth-of-type(2) > div > article {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  section:nth-of-type(2) > div > article::before {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 4px;
    background-color: #FFAA81;
    border-radius: 4px;
    margin-bottom: 4px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
    animation: none;
  }
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  .hero-content {
    font-weight: 700;
    color: #fff;
    z-index: 1;
  }

  .hero-description > p {
    padding: 0.5em;
  }

  
  article > p {
    color: white;
    font-weight: 600;
  }
  
  article > p {
    display: flex;
    gap: 0.5em;
    align-items: flex-end;
  }

  h1, p {
    animation: none;
  }

  h1 {
    position: relative;
    display: inline-block;
    text-align: center;
    width: 100%;
    margin-bottom: 2em;
    font-weight: 700;
    font-size: clamp(2.648rem, 6vw, 4.241rem);
    letter-spacing: -1px;
    filter: drop-shadow(0 0 0.4rem #000);
  }
  @keyframes heading {
    0% {
      top: -200px;
    }
    100% {
      top: -2px;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
    position: relative;
  }

  @keyframes content {
    0% {
      left: -1000px;
    }
    100% {
      left: 0px;
    }
  }

  @keyframes shake {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(5deg); }
    20% { transform: rotate(0eg); }
    30% { transform: rotate(-5deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
  }

  @media (prefers-reduced-motion: no-preference) {
    h1 {
      animation: heading 3s forwards;
    }

    p {
      animation: content 3s forwards;
    }
    section:nth-of-type(2) > div > article::before {
      animation: content 3s forwards;
    }
  }

  @media (min-width: 30em) {
    section:nth-of-type(1) {
      height: 70vh;
    }

    .hero-description {
      max-width: 45rem;
    }
    .hero-description > p {
      max-width: 75%;
    }
  }
  @media (min-width: 44em) {
    section:nth-of-type(2) > div {
      flex-direction: row;
    }
    p {
      font-size: 1.1em;
    }
    section:nth-of-type(2) > div:first-of-type {
    margin-bottom: 0;
    }
  }

  @media (min-width: 55em) {
    section {
      padding-inline: 8em;
    }
    p {
      font-size: 1.5em;
    } 
  }

  @container cocktail (min-width: 44em) {
    section:nth-of-type(1)  button {
      bottom: -5%;
      right: 10%;
    }
  }

  @container cocktail (min-width: 55em) {
    section:nth-of-type(1)  button {
      right: 15%;
      height: 65%;
    }
  }
</style>
