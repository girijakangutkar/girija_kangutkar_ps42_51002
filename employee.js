async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    // console.log(data);
    // let employee = data
    //   .map((comp) => comp.company.name)
    //   .reduce((acc, curr) => {
    //     if (acc[curr]) {
    //       acc[curr]++;
    //     } else {
    //       acc[curr] = 1;
    //     }
    //   }, {});
    let employee = data.map((comp) => comp.company.name);
    console.log(employee.length);
    // console.log(employee);
  } catch (err) {
    console.log("Error occurred", err);
  }
}

fetchUsers();
