const PersonData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=10');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Read response body as text
      const responseText = await response.text();
  
    //   console.log("API Response Text:", responseText);
      // Parse the text to JSON
      const data = JSON.parse(responseText);
  
      return data.results.map(user => ({
        name: `${user.name.first} ${user.name.last}`,
        imageUrl: user.picture.thumbnail,
      }));
     

    } catch (error) {
      console.error("Failed to fetch person data:", error);
      return []; 
    }
  };
  export {PersonData};
  /*since PersonData is a function that 
  performs an asynchronous operation (fetching data from an API), 
  it's not typical to bundle it 
  with static assets or import or reexport. 
  Functions like this are usually 
  imported directly where they are needed, rather 
   than through an assets file. */