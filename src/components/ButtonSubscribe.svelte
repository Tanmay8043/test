<script>
  export let planId
  const addSubscription = () =>{
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({planId})
    };
    fetch('/pay/pay', options)
      .then(res => res.json())
      .then(data =>{
        const opts= {...data, 
          "handler": function (response){
             alert(response.razorpay_payment_id);
           }} 
        var rzp1 = new Razorpay(opts);
        rzp1.open();
        
        rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
      })
      .catch(error => console.error(error))
  }
</script>
<button on:click|preventDefault={addSubscription}><slot /></button>