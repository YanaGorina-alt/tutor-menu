import sendRequest from './send-request';

  const BASE_URL = '/api/orders';

  // Retrieve an unpaid order for the logged in user
  export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
  }

  // Add an tutor to the cart
  export function addTutorToCart(tutorId) {
    // Just send tutorId for best security (no pricing)
    return sendRequest(`${BASE_URL}/cart/tutors/${tutorId}`, 'POST');
  }

  // Update the tutor's  hours qty in the cart
  // Will add the tutor to the order if not currently in the cart
  // Sending info via the data payload instead of a long URL
  export function setHoursQtyInCart(tutorId, newQty) {
    return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { tutorId, newQty });
  }

  // Updates the order's (cart's) isPaid property to true
  export function checkout() {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
  }

  // Return all paid orders for the logged in user
  export function getOrderHistory() {
    return sendRequest(`${BASE_URL}/history`);
  }