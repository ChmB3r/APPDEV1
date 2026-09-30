// Truthy / falsy
const values = [0, "", "hello", null, undefined, [], {}, NaN, "0"];
values.forEach((val) => {
  console.log(val, val ? "-> real" : "-> Cap");
});

// && : both required
const email = "jrbalmaceda@gmail.com";
const pin = "1234";
const canLogIn = email !== "" && pin !== "";
console.log("canLogIn:", canLogIn);

// || : either is enough
const isMember = false;
const hasDayPass = true;
const canEnterGym = isMember || hasDayPass;
console.log("canEnterGym:", canEnterGym);

// Short-circuit returns
console.log("" || "Guest");          // "Guest"
console.log(email && "Welcome back!"); // "Welcome back!"
console.log(!canLogIn);              // false
