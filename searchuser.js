async function fetchUsers(userName) {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    // console.log(data);
    let search = data.filter((user) => user.name == userName);
    if (search.length == 0) {
      console.log("User not found");
    } else {
      console.log(search);
    }
  } catch (err) {
    console.log("Error occurred", err);
  }
}

// fetchUsers("Clementina DuBuque");
fetchUsers("girija");
