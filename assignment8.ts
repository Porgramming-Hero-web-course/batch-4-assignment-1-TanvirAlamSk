{
  // Solution 8
  const validateKeys = <T>(obj: T, keys: string[]): boolean => {
    const allkey = Object.keys(obj);
    let validate: boolean = true;
    keys.forEach((key) => {
      if (allkey.indexOf(key) == -1) {
        validate = false;
      }
    });
    return validate;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
}
