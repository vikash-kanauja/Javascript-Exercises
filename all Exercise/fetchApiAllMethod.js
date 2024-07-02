//  Get method using fetch

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // parses JSON response into native JavaScript objects
  })
  .then((data) => {
    console.log(data.length); // handle the JSON data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//Post method

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userId: 10,
    id: 101,
    title: "quas fugiat ut perspiciatis vero provident",
    body:
      "eum non blanditiis soluta porro quibusdam voluptas\n" +
      "vel voluptatem qui placeat dolores qui velit aut\n" +
      "vel inventore aut cumque culpa explicabo aliquid at\n" +
      "perspiciatis est et voluptatem dignissimos dolor itaque sit nam",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // handle the JSON data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// PUT method

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    key1: "updatedValue1",
    key2: "updatedValue2",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // handle the JSON data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// Delete method

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text(); // usually, DELETE requests return an empty response
  })
  .then((data) => {
    console.log("Deleted successfully");
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

//Patch method

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    key1: "patchedValue1",
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // handle the JSON data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
