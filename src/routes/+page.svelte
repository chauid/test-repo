<script lang="ts">
  let stateValue: number = 0;
  function addState() {
    stateValue++;
    console.log(window.location.href);
    // history.pushState({ page_id: 1, data: 'tt' }, '', '/s');
  }
</script>

<svelte:head>
  <title>Intro</title>
</svelte:head>

<p>home</p>
<p>
  <span>Visit</span>
  <a class="rounded-lg bg-slate-400 p-1" href="https://kit.svelte.dev">kit.svelte.dev</a>
  <span>to read the documentation</span>
  <button class="m-1 rounded-md bg-green-200 p-1" on:click={addState}>{stateValue}</button>
</p>
