{
  // Solution 6
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  type PropertyItem = { name: string } | { age: number } | { email: string };

  const updateProfile = (info: Profile, prop: PropertyItem): Profile => {
    Object.keys(prop).forEach((key) => (info[key] = prop[key]));
    return info;
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26, name: "Alice2" }));
}
