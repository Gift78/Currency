# PROJECT1-SEC-2-Lamalila
## สมาชิกภายในกลุ่ม หน้าที่ความรับผิดชอบ และสัดส่วนในการทำงานที่เกิดขึ้นจริง

### 64130500070 รัชพล สวงนวงษ์  21%
  * หน้าที่ :
    * วางโครงหลักในการแยก Component ใน App.vue ว่าควรแยกอะไรบ้าง
    * ออกแบบการทำ VueRouter ว่าควรมี Page อะไรบ้าง
    * เป็นโครงหลักในการเขียนโค้ดเพื่อนำขึ้น Git และให้เพื่อนนำไปศึกษาต่อ
    * ตามความคืบหน้าเพื่อนๆ และอัพเดตงานอาจารย์
    * ช่วยเพื่อนๆ ปรับและแก้ไข Code ให้เหมาะสมกับ Application ของ Project
    * เขียนแผนภาพ Component Design และ UI Design
    * เขียนการบันทึกการเรียนรู้นอกห้องเรียนเพิ่มเติม
### 64130500076 วริษฐา จันทร์วันเพ็ญ 20%
  * หน้าที่ :
    * อัพส่วนของ FetchAPI (add,edit) ขึ้น git และ ลบ Component ของ Option ย้าย Option กลับมาไว้ใน Parent 
    * ลองใช้งานแอปว่ามีส่วนไหนที่ยังทำ Test Case ยังไม่ครอบคลุม
    * อัดคลิปนำเสนอวิธีการใช้งานแอปพลิเคชั่น
    * ฝึกแยก Component ของฟังก์ชั่นที่เกี่ยวกับการแสดงประวัติการแปลงค่าเงินใน LocalStorage และฟังก์ชั่น Option 
    * ฝึกทำ Component ที่เกี่ยวข้องกับ FetchAPI: get, delete, edit, create เพื่อจัดการข้อมูล
    * ฝึกทำ VueRouter
### 64130500078 วิมลศิริ วงษ์ชุน 19.5%
  * หน้าที่ :
    * จัด Layout Div ต่างๆให้มีความเหมาะสมกับการแสดงผล
    * เรียนรู้ในส่วนของ Tailwind เพิ่มเติม
    * ลองไปศึกษา Component, การส่งค่า emit และ การทำ FetchAPI: get, delete, edit, create ให้มีความรู้เพียงพอต่อ Project
    * ตกแต่งหน้าเว็บด้วย CSS เพิ่มเติม
    * จดบันทึกการเข้าประชุมในแต่ละสัปดาห์
    * ปรับธีมสีของ Application ใหม่ทั้งหมด
### 64130500089 อัญชลี ศรีปาน 19.5%
  * หน้าที่ :
    * ทำปุ่ม whiteTheme ใหม่และไปเรียนรู้การทำ Component เพื่อเชื่อมกับ whiteTheme ในแต่ละ Component
    * ไปศึกษาในส่วนของ Tailwind เพิ่มเติม
    * ลองไปศึกษา Component, การส่งค่า emit และ การทำ FetchAPI: get, delete, edit, create ให้มีความรู้เพียงพอต่อ Project
    * ตกแต่งหน้าเว็บด้วย CSS เพิ่มเติม
    * ปรับหน้าเว็บให้พอดีแก้ไขเพิ่มเติมจัดสัดส่วนให้พอดี
    * ปรับธีมสีของ Application ใหม่ทั้งหมด
### 64130500097 เจษฎา โชตินันทน์ 20%
  * หน้าที่ : 
    * อัพส่วนของ VueRouter และโฟล์เดอร์ของ Views ขึ้น Git
    * เป็นคนหลักในการเขียนการบันทึกการเรียนรู้นอกห้องเรียน
    * ฝึกแยก Component ของฟังก์ชั่นที่เกี่ยวกับการแสดงประวัติการแปลงค่าเงินใน LocalStorage และฟังก์ชั่น Option 
    * ฝึกทำ Component ที่เกี่ยวข้องกับ FetchAPI: get, delete, edit, create เพื่อจัดการข้อมูล
    * ฝึกทำ VueRouter

## รายการฟีเจอร์ความสามารถของ Application และคำอธิบาย
### 1)Feature: การรับค่าเงิน เช็คค่าเงินที่รับค่าเงินเข้า  และคำนวณค่าเงินเป็นค่าเงินปลายทางที่ต้องการ
#### การรับค่าเงิน เช็คค่าเงินที่รับค่าเงินเข้า และ คำนวณค่าเงินเป็นค่าเงินปลายทางที่ต้องการ
```javaScript
const isNumberAndIsPositive = () => {
  if (isNaN(inputValue.value)) {
    return alert("กรุณาใส่ค่าที่เป็นตัวเลข !!!");
  } else if (inputValue.value <= 0) {
    return alert("กรุณาใส่ค่าที่มากกว่า 0 !!!");
  } else if (
    selectedOption.value === null ||
    selectedOption.value === undefined
  ) {
    return alert("กรุณาเลือกโหมดที่ต้องการแปลงค่าเงินก่อน !!!");
  }

  const convertRate = getConvertRate();
  sumOfCurrency.value =
    Number((inputValue.value * convertRate).toFixed(2)).toLocaleString() +
    " " +
    destOption.value;
  return sumOfCurrency.value;
};
```
* คำอธิบาย : เป็น Feature ที่รับค่าเงินที่ต้องการคำนวณมาจากกล่อง Input และทำการเช็คว่าค่า Input ที่รับเข้าผ่านเงื่อนไขหรือไม่ ถ้าไม่ผ่านให้ทำการ Alert สิ่งที่ไม่ผ่าน และถ้าผ่านเงื่อนไขทุกอย่าง จะทำการไปเรียก Feature หา Rate ของระหว่างทั้ง 2 ค่าสกุลเงิน จากนั้นทำการเข้าสูตรคำนวณหาค่าเงินปลายทางเพื่อหาผลลัพธ์

#### การหา Rate การแปลงสกุลเงินระหว่างค่าเงินทั้งสองค่า 
```javaScript
const arrayOfCurrencies = ref([]);
onMounted(async () => {
  arrayOfCurrencies.value = await getCurrencies();
});

const getConvertRate = () => {
  const fromRate = arrayOfCurrencies.value.find(
    (currency) => currency.type === srcOption.value
  );
  const toRate = arrayOfCurrencies.value.find(
    (currency) => currency.type === destOption.value
  );
  return fromRate.rate / toRate.rate;
};
```
* คำอธิบาย : เป็น Feature ที่จะทำการหาค่า "Rate เทียบต่อ 1 USD,United States Dollar" ที่เก็บไว้ใน Object ภายใน arrayOfCurrencies ผ่าน .find() หากมีสกุลเงินตรงกัน แล้วจะได้ Rate ของ Object นั้นๆมาเก็บไว้ในต้นทางfromRateและปลายทางtoRate จากนั้นทำการเข้าสูตร "fromRate / toRate" จะได้ Rate ของระหว่างทั้ง 2 ค่าเงินแล้วนำไปใช้ใน isNumberAndIsPositive ต่อไป
----
### 2)Feature: การสลับค่าเงินต้นทางและปลายทาง
```javaScript
const switchOption = () => {
  storeOption.value = srcOption.value;
  srcOption.value = destOption.value;
  destOption.value = storeOption.value;
};
```
* คำอธิบาย : เป็น Feature ที่จะสลับ Option ค่าของหน่วยเงินที่ต้องการคำนวณต้นทาง กับ Option ของค่าของหน่วยเงินเงินที่จะต้องการคำนวณปลายทาง
----
### 3)Feature: การแสดงข้อมูลประวัติของการคำนวณที่ Save เข้ามาอยู่ใน Local Storage
```javaScript
const getLocalStorageContent = () => {
  return JSON.parse(localStorage.getItem("arrayOfCoverteds") || "[]");
};
```
* คำอธิบาย : เป็น Feature ที่จะขอค่า Value ของ Key ที่ชื่อว่า "arrayOfCoverteds" หากมีค่าจะ return ค่านั้นกลับมา แต่ถ้าหากไม่มีจะสร้าง Empty Array มาแทน และส่งค่านั้นออกไป
----
### 4)Feature: การลบข้อมูลประวัติของการคำนวณเงินที่อยู่ใน Local Storage
```javaScript
const removeLocalStorageContent = () => {
  localStorage.removeItem("arrayOfCoverteds");
};
```
* คำอธิบาย : เป็น Feature ที่ Key ที่ชื่อว่า "arrayOfCoverteds" ใน Local Storage และทำการลบ(remove) ค่า Value ของ Key นั้น
----
### 5)Feature: การ Save ประวัติการคำนวณค่าเงินที่ต้องการลง Local Storage
```javaScript
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
```
* คำอธิบาย : เป็น Feature ที่จะขอค่า Value ของ Key ที่ชื่อว่า "arrayOfCoverteds" ใน Local Storage (ถ้า Value นั้นมีค่าอยู่จะคืนค่าที่มีอยู่กลับมา, ถ้าไม่มีค่าอยู่ในสร้าง Empty Array) เมื่อได้ค่ามาแล้วให้เก็บไว้ใน Array ชื่อ arrayOfCoverteds และทำการตรวจสอบเงื่อนไขของ Input, Mode และ Summary ที่รับเข้ามาหากไม่ผ่านจะทำการ Alert กรณีที่ไม่ผ่าน ถ้าหากผ่านทุกเงื่อนไข จะไปใช้ .push() เพื่อเพิ่มประวัติอันใหม่เข้าไป และใช้ .setItem()เพื่อส่ง Array ที่เพิ่มค่าใหม่กลับไปให้ Local Storage ของ Key ที่ชื่อว่า "arrayOfCoverteds"
----
### 6)Feature: การเปลี่ยนเป็นธีมมืดและธีมสว่าง
```javaScript
const whiteTheme = ref(true);
const themeStatus = ref("");

const buttonfn = () => {
  if (whiteTheme.value === true) {
    themeStatus.value = "bg-white text-black";
    return themeStatus.value;
  } else {
    themeStatus.value = "bg-black text-white";
    return themeStatus.value;
  }
};
```
* คำอธิบาย : เป็น Feature ที่จะเกิด Event ที่ปุ่ม Toggle ที่ถ้าเป็น True จะใช้เป็นธีมสว่าง(พื้นหลังสีขาว, อักษรสีดำ), ถ้าเป็น Flase จะใช้เป็นธีมมืด(พื้นหลังสีดำ, อักษรสีขาว)
----
### 7)Feature: จัดการการแสดงหน้าของ Currency Management และAdd/Edit Currency
```javaScript
const currentComponent = ref("currencyManage");
const setCurrenComponent = (curr) => {
  currentComponent.value = curr;
  return currentComponent.value;
};
```
* คำอธิบาย : เป็น Feature ที่จะรับชื่อของแต่ละหน้าเข้ามาและทำการ Set เข้าไปใน currentComponent เพื่อเลือกแสดงผลเฉพาะหน้านั้นๆ(ระหว่าง CurrencyManagement และ AddEditCurrency)
----
### 8)Feature: การจัดการฐานข้อมูลเพื่อแสดง, เพิ่มข้อมูล, ลบข้อมูล, แก้ไขข้อมูลเดิมของสกุลเงิน [View, Create, Delete, Edit ]
#### การขอค่าข้อมูลจากฐานข้อมูลเพื่อนำมาแสดงผล (View)
```javaScript
const getCurrencies = async () => {
  try {
    const res = await fetch("http://localhost:5000/currencies");
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
```
* คำอธิบาย: เป็น Feature ที่จะขอค่าของข้อมูลสกุลเงินทั้งหมดที่มีผ่าน Fetch API โดยใช้ Method “GET” ผ่าน URL “http://localhost:5000/currencies” และหากได้ Response ที่เป็น Status “OK” นำค่า Response ที่ได้มาแปลงจาก JSON Format เป็น JavaScript Object และมาเก็บไว้ที่ currencies และ Return ค่านั้นออกและหากได้ Status อื่นๆ จะส่งError เป็น “cannot read data” และหากได้ Response จาก Server ของฐานข้อมูลเป็น Error จะ Alert Error นั้นๆ

#### การรับค่าข้อมูลใหม่ที่ผ่านการ(Create, Edit, Delete) มาอัพเดทค่าของ Option ของสกุลเงินต้นทางและปลายทาง
```javaScript
const updateCurrencies = (newCurr) => {
  arrayOfCurrencies.value = newCurr;
  destOption.value = arrayOfCurrencies.value[1].type;
  srcOption.value = arrayOfCurrencies.value[0].type;
};
```
* คำอธิบาย: เป็น Function ที่จะรับค่าข้อมูลทั้งหมดที่ผ่านการ(Create, Edit, Delete)มาแล้วมาเก็บไว้ที่ arrayOfCurrencies เพื่อทำการ Update ข้อมูลใน Application และทำการ Set ค่า Default ของต้นทางและปลายทางใหม่ในกรณีที่ค่า Default ก่อนหน้าถูกลบ

#### การเพิ่มข้อมูลใหม่ลงในฐานข้อมูล (Create)
```javaScript
const addNewCurrency = async (newCurrency) => {
  if (newCurrency.type === "") {
    alert("กรุณากรอกหน่วยของสกุลเงินที่ต้องการเพิ่ม!!!");
  } else if (
    currencies.value.find((currency) => currency.type === newCurrency.type)
  ) {
    alert("สกุลเงินนี้มีอยู่แล้วในฐานข้อมูล !!!");
  } else if (newCurrency.rate === undefined) {
    alert("กรุณาใส่ค่าเปรียบเทียบค่าเงินต่อ 1 หน่วย USD !!!");
  } else if (isNaN(newCurrency.rate)) {
    alert("กรุณาใส่ค่าเปรียบเทียบค่าเงินต่อ 1 หน่วย USD ที่เป็นตัวเลข!!!");
  } else if (newCurrency.rate < 0) {
    alert("กรุณาใส่ค่าเปรียบเทียบค่าเงินต่อ 1 หน่วย USD ที่มากกว่า 0!!!");
  } else {
    try {
      const res = await fetch("http://localhost:5000/currencies", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCurrency),
      });
      if (res.status === 201) {
        const addedCurrency = await res.json();
        currencies.value.push(addedCurrency);
        emit("updatecurrencies", currencies.value);
        setCurrenComponent("currencyManage");
      } else {
        throw new Error("Fail to add!!!");
      }
    } catch (err) {
      alert(`ERROR: ${err}`);
    }
  }
};
```
* คำอธิบาย: เป็น Feature ที่จะทำการรับ Object ของสกุลเงินที่ถูกสร้างขึ้นมาใหม่และทำการตรวจสอบเงื่อนไขต่างๆ หากไม่ผ่านจะทำการ Alert เงื่อนไขที่ไม่ผ่านพร้อมทั้งแนะนำแนวการแก้ไข ถ้าหากผ่านทุกเงื่อนไขส่ง Request ไปที่ JSON Server ผ่าน Method “POST” ในส่วนของ Body และใช้ JSON.stringify() เพื่อแปลงเป็น JSON Format เพื่อติดต่อกับ Server หากเพิ่มค่าใหม่ลงฐานข้อมูลได้สำเร็จจะResponse กลับเป็น 201 และนำค่าที่ตอบกลับ(เป็น Object ของข้อมูลที่เพิ่มเข้าไป) มาใช้ .push() เพื่อทำการ Update ข้อมูลใน Application ให้ตรงกลับในฐานข้อมูลและส่ง Emit กลับไปที่ updatecurrencies เพื่อทำการ Update Array ของ Option ที่ให้ User ได้เลือกสกุลเงินเมื่อเสร็จทุกขั้นตอนจะให้กลับไปที่หน้า Currency Management ผ่าน setCurrenComponent() และหาก Response อันอื่นที่ไม่ใช่ Status 201 ให้ส่ง Error เป็น “Fail to add!!!” และหากได้ Response จาก Server ของฐานข้อมูลเป็น Error จะ Alert Error นั้นๆ

#### การลบข้อมูลที่มีอยู่ในฐานข้อมูล (Delete)
```javaScript
const deleteCurrency = async (currencyId) => {
  try {
    const res = await fetch(`http://localhost:5000/currencies/${currencyId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert(`Delete successfully`);
      // reload
      currencies.value = await getCurrencies();
      emit("updatecurrencies", currencies.value);
    } else {
      throw new Error("Cannot delete data!!!");
    }
  } catch (err) {
    alert(`ERROR: ${err}`);
  }
};
```
* คำอธิบาย: เป็น Feature ที่จะรับ Id ของสกุลเงินนั้นๆมาและทำการส่ง Request ไปที่ JSON Server โดยแนบ Path Variable เป็น Id ไปด้วยและใช้ Method “DELETE” และถ้าหากทำการลบสำเร็จให้ currencies ทำการ getCurrencies() ใหม่เพื่อทำการUpdate ข้อมูลใน Application ให้ตรงกลับในฐานข้อมูลและส่ง Emit กลับไปที่ updatecurrencies เพื่อทำการ Update Array ของ Option ที่ให้ User ได้เลือกสกุลเงิน หาก Response อันอื่นที่ไม่ใช่ Status “OK” ให้ส่ง Error เป็น “Cannot delete data!!!” และหากได้ Response จาก Server ของฐานข้อมูลเป็น Error จะ Alert Error นั้นๆ

#### การแก้ไขข้อมูลที่มีอยู่ในฐานข้อมูล (Edit)
```javaScript
const modifyCurrency = async (updatedCurrency) => {
  if (updatedCurrency.type === "") {
    alert("กรุณากรอกหน่วยของสกุลเงินที่ต้องการเพิ่ม!!!");
  } else if (
    currencies.value.find((currency) => currency.type === updatedCurrency.type)
  ) {
    setCurrenComponent("addEditCurrency");
    alert(
      "สกุลเงินนี้มีอยู่แล้วในฐานข้อมูล กรุณากด Cancle เพื่อคืนค่าสกุลเงินเดิม!!!"
    );
  } else if (
    updatedCurrency.rate === undefined ||
    updatedCurrency.rate === null
  ) {
    alert("กรุณาใส่ค่าเปรียบเทียบค่าเงินต่อ 1 หน่วย USD !!!");
  } else if (isNaN(updatedCurrency.rate)) {
    alert("กรุณาใส่ค่าเปรียบเทียบค่าเงินต่อ 1 หน่วย USD ที่เป็นตัวเลข!!!");
  } else if (updatedCurrency.rate < 0) {
    alert("กรุณาใส่ค่าเปรียบเทียบค่าเงินต่อ 1 หน่วย USD ที่มากกว่า 0!!!");
  } else {
    try {
      const res = await fetch(
        `http://localhost:5000/currencies/${updatedCurrency.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCurrency),
        }
      );

      if (res.status === 200) {
        const modifyCurrency = await res.json();
        currencies.value.map((currency) => {
          if (currency.id === modifyCurrency.id) {
            currency.type = modifyCurrency.type;
            currency.rate = modifyCurrency.rate;
          }
          return currency;
        });
        editCurrency.value = undefined;
        emit("updatecurrencies", currencies.value);
        setCurrenComponent("currencyManage");
      } else {
        throw new Error("Can not edit !!!");
      }
    } catch (err) {
      alert(`ERROR: ${err}`);
    }
  }
};
```
* คำอธิบาย: เป็น Feature ที่ถ้าหาก User ต้องการแก้ไขข้อมูลของสกุลเงินที่มีอยู่เมื่อกดที่ปุ่ม Edit จะทำการไปเรียก setEditMode() ที่จะรับค่า Object ของสกุลเงินนั้นๆ และไปยังหน้า Add/Edit Currency ผ่าน setCurrenComponent("addEditCurrency") เพื่อให้ User ได้ทำการแก้ไขข้อมูล และเมื่อแก้ไขเสร็จและบันทึกการแก้ไขแล้วจะทำการไปเรียก modifyCurrency() ที่จะรับ Object ของสกุลเงินนั้นๆ ที่ทำการแก้ไขแล้ว จากนั้นจะทำการตรวสอบเงื่อนไขต่างๆ หากไม่ผ่านจะทำการ Alert เงื่อนไขที่ไม่ผ่านพร้อมทั้งแนะนำแนวการแก้ไข หากผ่านทุกเงื่อนไข จะส่ง Request ไปที่ JSON Server โดยแนบ Path Variable เป็น updatedCurrency.id ไปด้วยผ่าน Method “PUT” และในส่วนของ Body และใช้ JSON.stringify() เพื่อแปลงเป็น JSON Format เพื่อติดต่อกับ Server หากทำการแก้ไขค่าสำเร็จ จะResponse กลับเป็น “200” และนำค่าที่ตอบกลับ(เป็น Object ของข้อมูลที่แก้ไข)และทำการนำ Object นั้นไป Map กับ Object ที่มีอยู่ใน currencies เพื่อทำการเทียบค่าและแก้ไขข้อมูลที่อยู่ใน Application ให้ตรงกับฐานข้อมูลที่ทำการแก้ไขไป จากนั้นส่ง Emit กลับไปที่ updatecurrencies เพื่อทำการ Update Array ของ Option ที่ให้ User ได้เลือกสกุลเงิน หาก Response อันอื่นที่ไม่ใช่ Status “200” ให้ส่ง Error เป็น “Can not edit !!!” และหากได้ Response จาก Server ของฐานข้อมูลเป็น Error จะ Alert Error นั้นๆ

#### ยกเลิกการแก้ไขข้อมูล(Cancle edit)
```javaScript
const cancleAddEdit = async (cancle) => {
  editCurrency.value = undefined;
  currencies.value = await getCurrencies();
  setCurrenComponent(cancle);
};
```
* คำอธิบาย: หาก User กดปุ่ม Cancle จะทำการยกเลิกแล้ว Reset ค่าของ editCurrency กลับเป็น undefined  เพื่อรอรับค่าแก้ไขใหม่ และกลับไปหน้าที่ต้องการต้องการต่อไป
----
### 9)Feature: การเข้าสู่ระบบเพื่อเข้าจัดการข้อมูลของสกุลเงินที่บันทึกอยู่บนฐานข้อมูล
#### การขอค่าข้อมูลของ User จากฐานข้อมูลเพื่อนำมาใช้ยืนยันตัวตน
```javaScript
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
  }
};

export { getUsers };
```
* คำอธิบาย: เป็น Feature ที่จะขอค่าของข้อมูลของ User ทั้งหมดที่มีผ่าน Fetch API โดยใช้ Method “GET” ผ่าน URL “http://localhost:5000/currencies” และหากได้ Response ที่เป็น Status “OK” นำค่า Response ที่ได้มาแปลงจาก JSON Format เป็น JavaScript Object และมาเก็บไว้ที่ users และ Return ค่านั้นออกและหากได้ Status อื่นๆ จะส่งError เป็น “cannot read data” และหากได้ Response จาก Server ของฐานข้อมูลเป็น Error จะ Alert Error นั้นๆ

#### การ Reset ค่า Input ที่ทำการกรอกในหน้า Login
```javaScript
const resetInput = () => {
  inputUser.value = "";
  inputPass.value = "";
};
```
* คำอธิบาย: เป็น Function ที่จะถูกนำไปรวมกับระบบ Login, เมื่อเรียกใช้ Function นี้จะทำการ Set ค่า Username และ Password ในหน้า Login กลับไปเป็น Empty String

#### การ Login เข้าสู่ระบบเพื่อเข้าจัดการข้อมูลของสกุลเงิน
```javaScript
const login = () => {
  if (
    inputUser.value !== null &&
    inputUser.value !== undefined &&
    inputUser.value.length !== 0
  ) {
    if (
      inputPass.value !== null &&
      inputPass.value !== undefined &&
      inputPass.value.length !== 0
    ) {
      filterUser();
      if (filteredUser.value.length !== 0) {
        filteredUser.value.forEach((user) => {
          if (user.password === inputPass.value) {
            if (user.role === "admin") {
              currencyManageStatus.value = true;
              currentUser.value = inputUser.value;
              // sent emit via function
              emit("showCurrencyManage", currencyManageStatus.value);
              closeCheckbox.value = false;
              // alert("login successful");
              alert("เข้าสู่ระบบสำเร็จ !!!");
              resetInput();
            } else {
              // alert("Not permission");
              alert("ผู้ใช้งานนี้ไม่มีสิทธิการเข้าถึงการจัดการ !!!");
            }
          } else {
            // alert("Password mismatch");
            alert("รหัสผ่านไม่ถูกต้อง !!!");
          }
        });
      } else {
        // alert("User not found");
        alert("ไม่พบผู้ใช้งานในระบบฐานข้อมูล !!!");
      }
    } else {
      // alert("Password not input");
      alert("กรุณากรอกรหัสผ่านในช่อง Input");
    }
  } else {
    // alert("Username not input");
    alert("กรุณากรอกชื่อผู้ใช้งานในช่อง Input");
  }
};
```
* คำอธิบาย: เป็น Feature ของระบบ Login ที่จะทำการตรวจสอบผู้ใช้งานที่เข้ามาซึ่งใน Application นี้ระบบ Login ถูกนำมาใช้เพื่อตรวจสอบผู้ใช้งานที่มีสิทธิการเข้าจัดการฐานข้อมูลของสกุลเงินต่างๆ ซึ่งผู้ใช้งานที่มีสิทธิจัดการต้องมี Role เป็น  “admin” และจะทำการตรวจสอบ Username และ Password ของผู้ใช้งานว่าตรงกับที่มีอยู่ในฐานข้อมูลหรือไม่และทำการตรวจสอบเงื่อนไขต่างๆ หากไม่ผ่านเงื่อนไขใดๆ ให้ Alert เงื่อนไขนั้นกลับไปให้ผู้ใช้งานและหาก Login สำเร็จให้ Alert(”เข้าสู่ระบบสำเร็จ !!!”)  กลับไปให้ผู้ใช้งานได้ทราบจากนั้นจะลงค่า showCurrencyManage กลับไปเป็น “True” เพื่อแสดงหน้าการจัดการข้อมูลออกมาให้ผู้ใช้งานได้เห็น

#### การ Logout ออกจากระบบ
```javaScript
const logout = () => {
  currencyManageStatus.value = false;
  emit("showCurrencyManage", currencyManageStatus.value);
  resetInput();
};
```
คำอธิบาย: เป็น Feature ที่เมื่อใช้จะทำการออกจากระบบและ Reset ค่าของ Username กลับสู่ Default และทำการส่ง showCurrencyManage ไปเป็น “False” เพื่อทำการถอด Component นั้นออกให้ผู้ใช้งานที่ไม่มีส่วนเกี่ยวข้องได้เห็น


## LINK คลิปวีดีโอที่บันทึกฟีเจอร์ของแอปพลิเคชันทั้งหมด
[Video บันทึกฟีเจอร์ของแอปพลิเคชันทั้งหมด คลิ๊กที่นี่](https://drive.google.com/file/d/1HZBUcWVsLBLzKuyKpwilwt4gw-nteVUH/view?pli=1)

## แหล่งข้อมูลอ้างอิง/แรงบันดาลใจในการพัฒนา Application
  - แหล่งอ้างอิง
    - Feature Save, Remove, Show Local Storage Content ได้แรงบันดาลใจมาจาก: https://www.nightprogrammer.com/vue-js/how-to-use-local-storage-in-vue-3-composition-api-example/
    - โครงสร้างการวางปุ่ม และการวางองค์ประกอบต่างๆ ได้แรงบันดาลใจมาจาก: https://www.xe.com/currencyconverter/
    - ค่าสกุลเงินต่อ 1 หน่วยเทียบกับค่าสกุลเงินอื่นๆ อ้างอิงมาจาก : https://www.google.com/finance/quote/THB-USD?sa=X&ved=2ahUKEwigu4fDkqn9AhUsTmwGHU6ECYQQmY0JegQIDBAd
    - การสร้างปุ่ม Button ต่างๆ, สร้างปุ่มกด, สร้างกรอบข้อความ, สร้างปุ่มตัวเลือกและปุ่มกดเปลี่ยนbackground อ้างอิงมาจาก Daisy UI : https://daisyui.com/components/button/
    - การปรับขนาดหน้าจอให้ย่อลงได้เล็กน้อย อ้างอิงมาจาก : https://tailwindcss.com/docs/responsive-design
    - สูตรการหา Rate ระหว่างสกุลเงินต้นทางเทียบต่อสกุลเงินปลายทาง : https://www.clearcurrency.co.uk/stories/how-to-calculate-an-exchange-rate

