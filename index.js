
// async await//
async function iterateWithAsyncAwait(values) {
    for (let value of values) {
      console.log(value); // Log the current value
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
  }
  
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values); // Call the function

  //   Awaiting a Call//
  async function awaitCall() {
    try {
      // Simulate an API call using a promise
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve("API data fetched successfully!"), 2000);
      });
      console.log(response); // Log the response
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }
  
  awaitCall(); 

// Handling Errors with Async/Await//
  async function awaitCall() {
    try {
      // Simulate a failed API call
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => reject("Failed to fetch data!"), 2000); // Simulate error
      });
      console.log(response); // Log the response
    } catch (error) {
      console.log("Something went wrong: " + error); // Log a user-friendly error message
    }
  }
  
  awaitCall(); // Call the function to simulate API fetch with error

  