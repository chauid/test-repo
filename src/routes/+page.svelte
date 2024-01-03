<script lang="ts">
  import NavBar from '$lib/components/layouts/NavBar.svelte';
  import { page } from '$app/stores';
  import type { ProductType } from '$lib/server/modules/products';
  import type { ActionData, PageServerData } from './$types';
  import { onMount } from 'svelte';

  export let data: PageServerData;
  export let form: ActionData;
  const pprops: ProductType = data.page_server.props;

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
<NavBar />
<h1 class="text-5xl">Welcome to SvelteKit</h1>
<ul>
  <!-- <li>{data.layout.a}</li>
	<li>{data.layout.b}</li> -->
  <li>{data.page_server.a}</li>
  <li>{data.page_server.b}</li>
  {#each pprops as pp}
    <li>{pp.id}</li>
    <li>{pp.admin_name}</li>
    <li>{pp.created_at}</li>
  {/each}
</ul>
<br />
<form method="POST" action="/?/login">
  <label>
    Email
    <input name="id" type="text" />
  </label>
  <label>
    Password
    <input name="password" type="password" />
  </label>
  <button>Log in</button>
</form>
<br />
<p>
  form status:
  {#if form?.success}
    qwe
  {:else}
    false
  {/if}
</p>

<p>
  <span>Visit</span>
  <a class="rounded-lg bg-slate-400 p-1" href="https://kit.svelte.dev">kit.svelte.dev</a>
  <span>to read the documentation</span>
  <button class="m-1 rounded-md bg-green-200 p-1" on:click={addState}>{stateValue}</button>
</p>
