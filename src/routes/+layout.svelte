<script>
  import { Header, Footer } from "$lib/index";
  export let data;

  import { onNavigate } from "$app/navigation";

  onNavigate(async (navigation) => {
    if (!document.startViewTransition) {
      await delayNavigation();
      return;
    }

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        await delayNavigation();
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Header navigation={data.navigation} />

<main id="content">
  <slot />
</main>

<Footer footerItems={data.footer} />

<style>
</style>
