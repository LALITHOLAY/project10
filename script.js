function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuContainer = document.getElementById('menu-container');
        data.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.textContent = `${item.name} - $${item.price}`;
          menuContainer.appendChild(menuItem);
        });
      })
      .catch(error => console.error('Error fetching menu:', error));
  }
  
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Burger A', 'Burger B', 'Burger C'];
        const order = {
          burgers: burgers
        };
        resolve(order);
      }, 2500);
    });
  }
  
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          order_status: true,
          paid: false
        });
      }, 1500);
    });
  }
  
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          order_status: true,
          paid: true
        });
      }, 1000);
    });
  }
  
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  async function restaurantProcess() {
    try {
      getMenu();
      const order = await takeOrder();
      console.log('Order taken:', order);
      
      const prepStatus = await orderPrep();
      console.log('Order prepared:', prepStatus);
      
      const paymentStatus = await payOrder();
      console.log('Payment:', paymentStatus);
      
      thankyouFnc();
    } catch (error) {
      console.error('Error in restaurant process:', error);
    }
  }
  
  document.getElementById('order-btn').addEventListener('click', restaurantProcess);
  