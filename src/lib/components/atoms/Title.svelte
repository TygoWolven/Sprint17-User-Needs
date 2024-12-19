<script>
  export let headertype = ''
  export let content = ''
  export let color = ''
</script>

{#if headertype === 'h1' }
  <h1 class="title-{color} christmas-title">
    {content}
  </h1>
{:else if headertype === 'h2' }
  <h2 class="title-{color} christmas-title">
    {content}
  </h2>
{:else if headertype === 'h3' }
  <h3 class="title-{color} christmas-title">
    {content}
  </h3>
{/if}

<style>
  h1, h2, h3 {
    margin-bottom: calc(var(--margin) / 3);
  }
  h1 {
    font-size: var(--fs-2xl) !important;
  }
  h2 {
    font-size: var(--fs-xl) !important;
  }
  h3 {
    font-size: var(--fs-lg) !important;
  }

  .title-light {
    color: var(--accent2-primary);
    color: var(--title-primary);
  }
  .title-dark {
    color: var(--txt-dark-clr);
    color: var(--title-secondary);
  }
</style>
