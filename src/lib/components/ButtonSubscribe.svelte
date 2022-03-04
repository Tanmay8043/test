<script>
  export let planId
  const addSubscription = () =>{
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({planId})
    };
    fetch('/pay/pay', options)
      .then(res => res.text())
      .then(data =>window.open(data))
      .catch(error => console.error(error))
  }
</script>
<button on:click|preventDefault={addSubscription}><slot /></button>