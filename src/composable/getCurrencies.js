const getCurrencies = async () => {
  try {
    //for mac
    // const res = await fetch("http://localhost:8001/currencies");
    //for window
    const res = await fetch("http://localhost:5000/currencies");

    //เป็น Defualt Method รู้กันอยู่แล้วว่าคือ GET เลยไม่ต้องระบุ
    // if (res.status === 200) return questions;
    //OR
    if (res.ok) {
      const currencies = await res.json();
      return currencies;
    } else {
      throw new Error("cannot read data");
    }
  } catch (err) {
    alert(`ERROR: cannot read data, ${err}`);
  }
};

export { getCurrencies };
