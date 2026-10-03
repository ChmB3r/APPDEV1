// 1. Callback
function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "JR", age: 20 });
  }, 1000);
}
fetchUserMock((user) => {
  console.log("Callback got user:", user);
});

// 2. Promise + async/await
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "JR", age: 20 }), 1500);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Async/await got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}
showUser();

// 3. Real API with async/await
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return await response.json();
}

async function fetchTodo() {
  try {
    const todo = await getTodo();
    console.log("Todo:", todo);
  } catch (error) {
    console.error("Could not fetch todo (offline?):", error.message);
  }
}
fetchTodo();

// 4. Sync vs async order
console.log("Sync line 1");
setTimeout(() => console.log("Async line (after 2s)"), 2000);
console.log("Sync line 2");
