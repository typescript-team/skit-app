<script>
  export let data;
  const { users, key } = data;
</script>

<h1>KEY :: {key}</h1>
{#each users as user}
  <h2>{user.firstName}</h2>
  <p>{user.age}</p>
{/each}
