// Get 

async function getData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data); // handle the JSON data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  getData();

  
  //Post

  async function postData() {
    try {
      const response = await fetch('https://api.example.com/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'value1',
          key2: 'value2'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data); // handle the JSON data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  postData();

  // Put

  async function putData() {
    try {
      const response = await fetch('https://api.example.com/data/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'updatedValue1',
          key2: 'updatedValue2'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data); // handle the JSON data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  putData();

  
  // Delete 

  async function deleteData() {
    try {
      const response = await fetch('https://api.example.com/data/1', {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      console.log('Deleted successfully');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  deleteData();
  