<script lang="ts">
	import type { PageData } from '../$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>정무카페</title>
</svelte:head>

<h1>카페 홈</h1>
<div>
	<ul>
		<li>{data.layout_server.a}</li>
		<li>{data.layout_server.b}</li>
		<li>{data.page.a}</li>
		<li>{data.page.b}</li>
	</ul>
</div>
