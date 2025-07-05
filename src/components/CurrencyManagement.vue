<script setup>
import { ref, onMounted } from "vue";
import { getCurrencies } from "../composable/getCurrencies";
import AddEditCurrency from "../components/AddEditCurrency.vue";
const props = defineProps({
  showStatus: {
    type: Boolean,
    default: false,
  },
  whitemode: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(["updatecurrencies"]);

const currencies = ref([]);

onMounted(async () => {
  currencies.value = await getCurrencies();
});

const deleteCurrency = async (currencyId) => {
  try {
    const res = await fetch(`http://localhost:5000/currencies/${currencyId}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert(`Delete successfully`);
      // #1 reload
      currencies.value = await getCurrencies();
      emit("updatecurrencies", currencies.value);
      // #2 reload
      // currencies.value = currencies.value.filter(
      //   (currency) => currency.type !== currencyType
      // );
    } else {
      throw new Error("Cannot delete data!!!");
    }
  } catch (err) {
    alert(`ERROR: ${err}`);
  }
};

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

const currentComponent = ref("currencyManage");
const setCurrenComponent = (curr) => {
  currentComponent.value = curr;
  return currentComponent.value;
};

const editCurrency = ref(undefined);
const setEditMode = (currency) => {
  setCurrenComponent("addEditCurrency");
  editCurrency.value = currency;
};

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

const cancleAddEdit = async (cancle) => {
  editCurrency.value = undefined;
  currencies.value = await getCurrencies();
  setCurrenComponent(cancle);
};
</script>
<template>
  <div class="w-full">
    <div v-if="showStatus === true">
      <div
        class="border p-2"
        :class="whitemode ? ' border-white' : ' border-black'"
      >
        <h1
          class="text-xl font-bold"
          :class="whitemode ? ' text-white' : ' text-black'"
        >
          === Currencies Management ===
        </h1>

        <br />
        <button
          @click="setCurrenComponent('currencyManage')"
          class="btn"
          :class="whitemode ? 'bg-white  text-black' : 'bg-black text-white'"
        >
          Currency Management
        </button>
        &nbsp
        <button
          @click="setCurrenComponent('addEditCurrency')"
          class="btn"
          :class="whitemode ? 'bg-white  text-black' : 'bg-black text-white'"
        >
          Add New Currency
        </button>
        <br />
        <br />
        <AddEditCurrency
          v-if="currentComponent === 'addEditCurrency'"
          @add="addNewCurrency"
          @edit="modifyCurrency"
          @cancle="cancleAddEdit"
          :currency="editCurrency"
          :whitemode="whitemode"
        />
        <div v-else-if="currentComponent == 'currencyManage'">
          <div>
            <div
              class="rounded-md p-4 w-full"
              :class="whitemode ? ' text-white' : '  text-black'"
            >
              <div
                v-for="currency in currencies"
                :key="currency.id"
                class="text-left"
              >
                <div
                  class="border p-2 mx-12"
                  :class="
                    whitemode
                      ? 'bg-black  text-white  border-white'
                      : 'bg-white text-black border-black'
                  "
                >
                  <div>
                    <h1 class="text-lg font-bold">
                      {{ currency.id }}. Currency: {{ currency.type }}
                    </h1>
                  </div>
                  <div>
                    <h1>Rate Per USD: {{ currency.rate }}</h1>
                  </div>
                  <button
                    class="btn btn-error"
                    @click="deleteCurrency(currency.id)"
                  >
                    Delete
                  </button>
                  &nbsp
                  <button
                    class="btn bg-green-500 text-black"
                    @click="setEditMode(currency)"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
