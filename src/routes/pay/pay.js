import Razorpay from 'razorpay';

export async function post({request}) {

  const body = await request.json();

  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

      const sub = await instance.subscriptions.create({
        plan_id: body.planId,
        quantity: 5,
        total_count: 6,
        })
      var options = {
        "key": process.env.RAZORPAY_KEY,
        "subscription_id": sub.id,
        "name": "My Billing Label",
        "description": "Auth txn for sub_J3KyNnNaQ9Szns",
        "handler": function (response){
          alert(response.razorpay_payment_id);
        }
      };
      // var options = {
      //   "key": "rzp_test_vUtuaqM3CAB323", // Enter the Key ID generated from the Dashboard
      //   "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      //   "currency": "INR",
      //   "name": "Tanmay Sharma",
      //   "order_id": order.id,
      //   "prefill": {
      //       "name": "Gaurav Kumar",
      //       "email": "gaurav.kumar@example.com",
      //       "contact": "9999999999"
      //   },
      //   "notes": {
      //       "address": "Razorpay Corporate Office"
      //   },
      //   "theme": {
      //       "color": "#3399cc"
      //   }
      // };
    } catch (error) {
      console.error(error);
  }
    
  return {body: options, status: 200}
}