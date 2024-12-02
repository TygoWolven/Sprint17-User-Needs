<script>
  // Adjustable source and alt-tag
  export let source = ''
  export let alt = ''
</script>

<li>
  <img src={source} alt={alt}>
</li>

<style>
  li {
    display: inline-block;
  }
  img {
    /* Responsive values for all screen-sizes */
    height: clamp(2rem, 3vw, 4rem);
    margin: 0 calc(0.5rem + 1.75vw);    
  }

  /* Media Query for users with reduced-motion enabled */
  /* (Didnt use the 'no-preference' for a reason) */
  @media (prefers-reduced-motion) {
    li {
      display: flex;
    }
    img {
      margin: 0.5rem 0;
    }
  }
</style>