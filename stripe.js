var stripe = Stripe('pk_test_51JFOAlASkWSxItGJzaVNXYe0ARSfj6Q68XlShodjanhEcRSlxMMRP6yS5HE7CuV1qS1jJS3ie8jc47MUj9d6hqxF00JpzE3ONL');

// Call your backend to create the Checkout Session
fetch('/create-checkout-session', {
  method: 'POST',
})
.then(function(response) {
  return response.json();
})
.then(function(session) {
  return stripe.redirectToCheckout({ sessionId: session.id });
})
.then(function(result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, you should display the localized error message to your
  // customer using `error.message`.
  if (result.error) {
    alert(result.error.message);
  }
});
