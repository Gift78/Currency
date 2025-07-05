const getUsers = async () => {
  try {
    const res = await fetch("http://localhost:5000/users");

    if (res.ok) {
      const users = await res.json();
      return users;
    } else {
      throw new Error("cannot read data");
    }
  } catch (err) {
    alert(`ERROR: cannot read data, ${err}`);
     return []; //
  }
};

export { getUsers };
