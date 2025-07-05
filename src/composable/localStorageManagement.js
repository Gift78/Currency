const getLocalStorageContent = () => {
  return JSON.parse(localStorage.getItem("arrayOfCoverteds") || "[]");
};

const removeLocalStorageContent = () => {
  localStorage.removeItem("arrayOfCoverteds");
};

const saveLocalStorageContent = (mode, input, summary) => {
  let arrayOfCoverteds = getLocalStorageContent();
  if (input.length === 0 || input <= 0) {
    return alert(
      "กรุณากรอกค่าเงินที่ต้องการคำนวณให้ถูกต้องและทำการคำนวณใหม่อีกครั้งก่อนทำการบันทึก !!!"
    );
  }
  if (mode === "-") {
    return alert(
      "กรุณาการเลือกโหมดการคำนวณให้ถูกต้องและทำการคำนวณใหม่อีกครั้งก่อนการบันทึก !!!!"
    );
  }
  if (summary === undefined) {
    return alert("กรุณาหาค่าผลลัพธ์ก่อนการบันทึก !!!");
  }

  arrayOfCoverteds.push({
    convertMode: `${mode}`,
    inputValue: `${Number(input).toLocaleString()}`,
    summary: `${summary}`,
  });

  localStorage.setItem("arrayOfCoverteds", JSON.stringify(arrayOfCoverteds));
};

export {
  getLocalStorageContent,
  removeLocalStorageContent,
  saveLocalStorageContent,
};
