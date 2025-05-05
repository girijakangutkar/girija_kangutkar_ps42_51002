async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    // console.log(data);
    let count = 0;
    let char = data
      .filter((char) => {
        if (char.website.includes(".")) {
          count++;
        }
      })
      .map((user, count) => {
        if (count > 2) {
          console.log(user.website);
        }
      });
    console.log(char);
  } catch (err) {
    console.log("Error occurred", err);
  }
}

fetchUsers();
