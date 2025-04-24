//1 Delivery-schedule
function getDeliverySchedule(days) {
    days.forEach(day => {
        switch (day) {
            case 'Mon':
                console.log('Monday: No Deliveries');
                break;
            case 'Tue':
                console.log('Tuesday: Standard Delivery ');
                break;
            case 'Wed':
                console.log('Wednesday:Express Delivery ');
                break;
            case 'Thu':
                console.log('Thursday: Standard Delivery');
                break;
            case 'Fri':
                console.log('Friday: Same Day Delivery');
                break;
            case 'Sat':
                console.log('Saturday: Weekend Delivery');
                break;
            case 'Sun':
                console.log('Sunday: No Deliveries');
                break;
            default:
                console.log("Invalid day");
        }
    });
  }
  const deliveryDays = ['Mon', 'Wed', 'Fri', 'Sun'];
  getDeliverySchedule(deliveryDays);

  //2 Book Status
  function checkBookStatus(statuses) {
    statuses.forEach(status => {
        if (status === "available") {
            console.log("Ready to lend");
        } else if (status === "borrowed") {
            console.log("Checked out");
        } else {
            console.log("Unknown status ");
        }
    });
  }
  const bookStatuses = ['available', 'borrowed', 'available', 'borrowed', 'lost'];
  checkBookStatus(bookStatuses);

  //3 Customer age
  function checkCustomerAges(ages) {
    ages.forEach(age => {
      if (age >= 18) {
          console.log("Adult");
      } else {
          console.log("Minor");
      }
  });
  }
  const customerAges = [17, 22, 15, 30, 18, 12, 45];
  checkCustomerAges(customerAges);

   //4
  function countdownLives() {
    let lives = 5;
    while (lives >= 0) {
        console.log(`You have ${lives} lives left`);
        lives--;
    }
  }
  countdownLives();

  //5 Feedback
  function printFeedback(feedbackArray) {
  
    do {
  
        if (feedbackArray.length > 0) {
  
            console.log(feedbackArray[0]); 
            feedbackArray.shift(); 
  
        }
  
    } while (feedbackArray.length > 0);
  
  }
  
  const userFeedback = ["Great service!", "Will come again.", "Not satisfied with the product."]; 
  printFeedback(userFeedback);

  //6 Login-status
  function processLoginStatuses(loginStatuses) {
    for (let i = 0; i < loginStatuses.length; i++) {
      if (loginStatuses[i] === "logged in") {
        console.log("Welcome back!");
      } else {
        console.log("Please log in");
      }
    }
  }
  
  const userStatuses = ["logged in", "not logged in", "logged in", "not logged in"];
  processLoginStatuses(userStatuses); 
  
  //7 Ticket-priorities
  function processTicketPriorities(priorities) {
  
    priorities.forEach(priority => {
  
        switch (priority) {
  
            case 'low':
  
                console.log(`Priority: ${priority} - Address within 3 days.`);
  
                break;
  
            case 'medium':
  
                console.log(`Priority: ${priority} - Address within 1 day.`);
  
                break;
  
            case 'high':
  
                console.log(`Priority: ${priority} - Immediate attention required!`);
  
                break;
  
            default:
  
                console.log(`Priority: ${priority} - Unknown priority level.`);
  
        }
  
    });
  
  }
  const ticketPriorities = ['low', 'medium', 'high', 'urgent'];
   processTicketPriorities(ticketPriorities);
  
  //8 Time left
  function countdown() {
  
    let timeLeft = 10;
  
    while (timeLeft >= 0) {
        console.log(timeLeft); 
        timeLeft--; 
    }
  }
  countdown();
  
  
  
  
  
  
  