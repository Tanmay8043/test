import Razorpay from 'razorpay';

export async function post({request}) {
  var res
  const body = await request.json();

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    // const ops = {
    //   amount: 50000,
    //   currency: 'INR',
    //   receipt: 'receipt_order_74394',
    // };

    //   const order = await instance.orders.create(ops);
    //   var options = {
    //     "key": "rzp_test_vUtuaqM3CAB323", // Enter the Key ID generated from the Dashboard
    //     "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    //     "currency": "INR",
    //     "name": "Tanmay Sharma",
    //     "order_id": "order_J2DxLnjJONy9Oo", 
    //     handler: async function (response) {
    //       console.log('response from razorpay', response);
    //       const data = {
    //         clientId,
    //         razorpayPaymentId: response.razorpay_payment_id,
    //         subscriptionId: response.razorpay_subscription_id,
    //         razorpaySignature: response.razorpay_signature,
    //       }},
    //     "prefill": {
    //         "name": "Gaurav Kumar",
    //         "email": "gaurav.kumar@example.com",
    //         "contact": "9999999999"
    //     },
    //     "notes": {
    //         "address": "Razorpay Corporate Office"
    //     },
    //     "theme": {
    //         "color": "#3399cc"
    //     }
    // };
    // var rzp1 = new Razorpay(options);
    // rzp1.open();
//       rzp1.on('payment.failed', function (response){
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
// });
    
const response = await instance.subscriptions.create({
  plan_id: body.planId,
    total_count: 1,
}, function(err, order) {
  res=order
});
    } catch (error) {
      console.error(error);

  }

 

  // const options = {
  //   amount: 50000,
  //   currency: 'INR',
  //   receipt: 'receipt_order_74394',
  // };

  // const order = await instance.orders.create(options,function(err, order) {
  //   console.log(order);
  // });
  return {body: res.short_url, status: 200}
}