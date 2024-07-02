axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data); // handle the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the GET request:', error);
  });


  axios.post('https://api.example.com/data', {
    key1: 'value1',
    key2: 'value2'
  })
  .then(response => {
    console.log(response.data); // handle the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the POST request:', error);
  });


  axios.put('https://api.example.com/data/1', {
    key1: 'updatedValue1',
    key2: 'updatedValue2'
  })
  .then(response => {
    console.log(response.data); // handle the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the PUT request:', error);
  });


  axios.delete('https://api.example.com/data/1')
  .then(response => {
    console.log('Deleted successfully');
  })
  .catch(error => {
    console.error('There was a problem with the DELETE request:', error);
  });


  axios.patch('https://api.example.com/data/1', {
    key1: 'patchedValue1'
  })
  .then(response => {
    console.log(response.data); // handle the JSON data
  })
  .catch(error => {
    console.error('There was a problem with the PATCH request:', error);
  });


  axios.head('https://api.example.com/data')
  .then(response => {
    console.log(response.headers); // handle the headers
  })
  .catch(error => {
    console.error('There was a problem with the HEAD request:', error);
  });


// .....................   Using async await    ..................

async function getData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data); // handle the JSON data
  } catch (error) {
    console.error('There was a problem with the GET request:', error);
  }
}

getData();


async function postData() {
    try {
      const response = await axios.post('https://api.example.com/data', {
        key1: 'value1',
        key2: 'value2'
      });
      console.log(response.data); // handle the JSON data
    } catch (error) {
      console.error('There was a problem with the POST request:', error);
    }
  }
  
  postData();

  async function putData() {
    try {
      const response = await axios.put('https://api.example.com/data/1', {
        key1: 'updatedValue1',
        key2: 'updatedValue2'
      });
      console.log(response.data); // handle the JSON data
    } catch (error) {
      console.error('There was a problem with the PUT request:', error);
    }
  }
  
  putData();

  async function deleteData() {
    try {
      await axios.delete('https://api.example.com/data/1');
      console.log('Deleted successfully');
    } catch (error) {
      console.error('There was a problem with the DELETE request:', error);
    }
  }
  
  deleteData();

  
  async function patchData() {
    try {
      const response = await axios.patch('https://api.example.com/data/1', {
        key1: 'patchedValue1'
      });
      console.log(response.data); // handle the JSON data
    } catch (error) {
      console.error('There was a problem with the PATCH request:', error);
    }
  }
  
  patchData();

  
  async function headRequest() {
    try {
      const response = await axios.head('https://api.example.com/data');
      console.log(response.headers); // handle the headers
    } catch (error) {
      console.error('There was a problem with the HEAD request:', error);
    }
  }
  
  headRequest();
  