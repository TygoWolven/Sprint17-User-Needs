<script>
  // export let items
  import { TextInput, TextareaInput, DatePicker, TimePicker, IconPhoneThin, IconMailThin } from '$lib/index'
  import logo from '$lib/assets/logo.webp'

  let isLoading = false;
  let isSuccess = false;

  function handleSubmit(event) {
    event.preventDefault();

    isLoading = true;
    
    // Simuleer een formulierverwerking of API-aanroep
    setTimeout(() => {
      isLoading = false;
      isSuccess = true;
    }, 2000); // Pas de tijd aan naar wens
  }
</script>

<section>
  <form on:submit={handleSubmit} method="post" action="/group-bookings">
    <h1 class="animated-text">Boeken🎄</h1>
    <TextInput id="first-name" name="first-name" required>🎅 Voornaam:</TextInput>
    <TextInput id="last-name" name="last-name" required>🧑‍🎄 Achternaam:</TextInput>
    <TextInput id="email" name="email" type="email" required>📧 Email:</TextInput>
    <TextInput id="phone" name="phone" type="tel" required>📞 Telefoonnummer:</TextInput>
    <TextInput id="persons" name="persons" required>👨‍👩‍👧‍👦 Hoeveel personen?</TextInput>
    <TextareaInput id="request" name="story" placeholder="Typ hier uw bericht...">📝 Aanvraag:</TextareaInput>
    <DatePicker id="date" name="date" required>📅 Datum:</DatePicker>
    <TimePicker id="time" name="time" value="14:30" min="09:00" max="22:00" required>🕒 Kies een tijdstip:</TimePicker>

    {#if isLoading}
      <article class="loading-state">
        <div class="spinner"></div>
        <h2>Even Geduld</h2>
        <p>Boeking verwerken...</p>
      </article>
    {/if}

    {#if isSuccess}
      <article class="success-state">
        <svg fill="#41a146" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="-30.5 -30.5 366.00 366.00" xml:space="preserve" stroke="#41a146">
          <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(44.22529,44.22529), scale(0.71)">
          <rect x="-30.5" y="-30.5" width="366.00" height="366.00" rx="183" fill="#ffffff" strokewidth="0"/>
          </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M152.502,0.001C68.412,0.001,0,68.412,0,152.501s68.412,152.5,152.502,152.5c84.089,0,152.5-68.411,152.5-152.5 S236.591,0.001,152.502,0.001z M152.502,280.001C82.197,280.001,25,222.806,25,152.501c0-70.304,57.197-127.5,127.502-127.5 c70.304,0,127.5,57.196,127.5,127.5C280.002,222.806,222.806,280.001,152.502,280.001z"/> <path d="M218.473,93.97l-90.546,90.547l-41.398-41.398c-4.882-4.881-12.796-4.881-17.678,0c-4.881,4.882-4.881,12.796,0,17.678 l50.237,50.237c2.441,2.44,5.64,3.661,8.839,3.661c3.199,0,6.398-1.221,8.839-3.661l99.385-99.385 c4.881-4.882,4.881-12.796,0-17.678C231.269,89.089,223.354,89.089,218.473,93.97z"/> </g> </g> </g>
        </svg>
        <h2>Bedankt!</h2>
        <p>Je boeking is voltooid.</p>
      </article>
      {/if}

    <button type="submit">🎁 Verstuur</button>
  </form>

  <article>
    <div>
      <img src={logo} height="150" width="150" alt="Wogo Logo" />
    </div>
    <div>
      <p><IconPhoneThin width="30" height="30" fill="white" />+31 641054495</p>
      <p><IconMailThin width="30" height="30" fill="white" />info@wogoamsterdam</p>
    </div>
    <ul class="social-media-list" role="list" aria-label="Social links">
      <li>
        <a href="/">
          <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6634 0C5.23174 0 0 5.23659 0 11.6699V28.3366C0 34.7683 5.23659 40 11.6699 40H28.3366C34.7683 40 40 34.7634 40 28.3301V11.6634C40 5.23174 34.7634 0 28.3301 0H11.6634ZM31.6667 6.66667C32.5867 6.66667 33.3333 7.41333 33.3333 8.33333C33.3333 9.25333 32.5867 10 31.6667 10C30.7467 10 30 9.25333 30 8.33333C30 7.41333 30.7467 6.66667 31.6667 6.66667ZM20 10C25.515 10 30 14.485 30 20C30 25.515 25.515 30 20 30C14.485 30 10 25.515 10 20C10 14.485 14.485 10 20 10ZM20 13.3333C18.2319 13.3333 16.5362 14.0357 15.286 15.286C14.0357 16.5362 13.3333 18.2319 13.3333 20C13.3333 21.7681 14.0357 23.4638 15.286 24.714C16.5362 25.9643 18.2319 26.6667 20 26.6667C21.7681 26.6667 23.4638 25.9643 24.714 24.714C25.9643 23.4638 26.6667 21.7681 26.6667 20C26.6667 18.2319 25.9643 16.5362 24.714 15.286C23.4638 14.0357 21.7681 13.3333 20 13.3333Z" fill="#FFAA81"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="/">
          <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.3636 0H3.63636C1.62727 0 0 1.62727 0 3.63636V36.3636C0 38.3727 1.62727 40 3.63636 40H21.8182V23.6364H16.3636V18.1818H21.8182V15.2527C21.8182 9.70727 24.52 7.27273 29.1291 7.27273C31.3364 7.27273 32.5036 7.43636 33.0564 7.51091V12.7273H29.9127C27.9564 12.7273 27.2727 13.76 27.2727 15.8509V18.1818H33.0073L32.2291 23.6364H27.2727V40H36.3636C38.3727 40 40 38.3727 40 36.3636V3.63636C40 1.62727 38.3709 0 36.3636 0Z" fill="#FFAA81"/>
          </svg>            
        </a>
      </li>
      <li>
        <a href="/">
          <svg width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.3636 0H3.63636C1.62727 0 0 1.62727 0 3.63636V36.3636C0 38.3727 1.62727 40 3.63636 40H36.3636C38.3727 40 40 38.3727 40 36.3636V3.63636C40 1.62727 38.3727 0 36.3636 0ZM12.6436 32.7273H7.28V15.4691H12.6436V32.7273ZM9.90727 13.0018C8.17818 13.0018 6.78 11.6 6.78 9.87455C6.78 8.14909 8.18 6.74909 9.90727 6.74909C11.6309 6.74909 13.0327 8.15091 13.0327 9.87455C13.0327 11.6 11.6309 13.0018 9.90727 13.0018ZM32.7345 32.7273H27.3745V24.3345C27.3745 22.3327 27.3382 19.7582 24.5873 19.7582C21.7964 19.7582 21.3673 21.9382 21.3673 24.1891V32.7273H16.0073V15.4691H21.1527V17.8273H21.2255C21.9418 16.4709 23.6909 15.04 26.3 15.04C31.7309 15.04 32.7345 18.6145 32.7345 23.2618V32.7273Z" fill="#FFAA81"/>
          </svg> 
        </a>
      </li>
    </ul>
  </article>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 3em;
    padding-block: 4em;
    max-width: 90em;
    margin: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    position: relative;
    padding: 2em;
  }

  form::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #145A32;
    border-radius: 8px;
    z-index: -1;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  }

  form > h1 {
    font-size: var(--fs-2xl);
    color: white;
  }

  form > article > svg {
    margin-bottom: 1em;
  }

  .loading-state, .success-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #145A32;
    color: white;
    border-radius: 8px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .loading-state, .success-state, h2 {
    font-size: var(--fs-2xl);
  }
  .loading-state, .success-state, p {
    font-size: var(--fs-md);
  }

  .spinner {
    border: 16px solid #f3f3f3;
    border-top: 16px solid var(--accent2-primary);
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
    margin-bottom: 2em;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  button {
    background-color: var(--btn-primary-bg);
    border: none;
    color: black;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    font-size: 1.3em;
    padding: 0.7em;
  }

  section > article > div {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  section > article:nth-of-type(1) {
    display: flex;
    flex-direction: column-reverse;
    gap: 1em;
  }

  article > div,
  article > ul > li {
    background-color: #145A32;
    border-radius: 8px;
    box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.25);
  }

  section > article > div:nth-of-type(1) {
    align-items: center;
    padding: 3em;
  }

  section > article > div:nth-of-type(2) {
    padding: 1em;
  }

  section > article > div:nth-of-type(2) > p {
    display: flex;
    gap: 0.5em;
    align-items: center;
    color: white;
    font-weight: 600;
  }

  article > ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    gap: 0.5em;
  }

  article > ul > li {
    background-color: #145A32;
    border-radius: 8px;
  }

  article > ul > li > a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 1em;
  }

  @media (min-width: 30em) {}

  @media (min-width: 44em) {
    section {
      flex-direction: row;
      justify-content: space-between;
      padding-inline: 2em;
    }
    form {
      width: 50%;
      max-width: 50%;
    }
    section > article:nth-of-type(1) {
      flex-direction: column;
    }
  }

  @media (min-width: 55em) {
    section {
      padding-inline: 8em;
    }
  }
</style>
