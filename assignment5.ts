{
  // Solution 5
  const getProperty = <X, Y extends keyof X>(param: X, key: Y) => {
    return param[key];
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "age")); //output : 30
}
