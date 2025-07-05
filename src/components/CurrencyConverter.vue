<script setup>
import { ref, computed, onMounted } from "vue";

import ShowLocalStorages from "./ShowLocalStorages.vue";
import CurrencyManagement from "./CurrencyManagement.vue";
import LoginManagement from "./LoginManagement.vue";
import { getCurrencies } from "../composable/getCurrencies";

import {
  getLocalStorageContent,
  removeLocalStorageContent,
  saveLocalStorageContent,
} from "../composable/localStorageManagement";

const arrayOfCurrencies = ref([]);

onMounted(async () => {
  arrayOfCurrencies.value = await getCurrencies();
});

const srcOption = ref("THB"); //default source Option
const destOption = ref("USD"); //default destination Option

const inputValue = ref("");
const sumOfCurrency = ref("0.00"); // default sum of currency after convert
const storeOption = ref(""); // to store old source Option in "switchOption"

// store to show selected option
const selectedOption = computed(() => {
  if (srcOption.value === destOption.value) {
    alert("กรุณาใส่สกุลเงินที่ต้องการแปลงให้ต่างกัน!!!");
    return (selectedOption.value = "-");
  }
  return srcOption.value + `to` + destOption.value;
});

const showLocal = ref(getLocalStorageContent());

const removeLocal = () => {
  removeLocalStorageContent();
  showLocal.value = getLocalStorageContent();
};

const saveLocal = () => {
  saveLocalStorageContent(
    selectedOption.value,
    inputValue.value,
    sumOfCurrency.value
  );
  showLocal.value = getLocalStorageContent();
};

const getConvertRate = () => {
  const fromRate = arrayOfCurrencies.value.find(
    (currency) => currency.type === srcOption.value
  );
  const toRate = arrayOfCurrencies.value.find(
    (currency) => currency.type === destOption.value
  );
  return fromRate.rate / toRate.rate;
};

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

const switchOption = () => {
  storeOption.value = srcOption.value;
  srcOption.value = destOption.value;
  destOption.value = storeOption.value;
};

const currencyManageStatus = ref(false);

const showStatus = (status) => {
  currencyManageStatus.value = status;
};

const updateCurrencies = (newCurr) => {
  arrayOfCurrencies.value = newCurr;
  destOption.value = arrayOfCurrencies.value[1].type;
  srcOption.value = arrayOfCurrencies.value[0].type;
};

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
</script>

<template>
  <div
    class="w-full h-screen flex flex-col"
    :class="whiteTheme ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <br />
    <div class="text-left">
      &nbsp &nbsp
      <label for="toggle-2" class="toggle-2">
        <input
          type="checkbox"
          name="toggle-2"
          id="toggle-2"
          class="toggle-2__input"
          v-model="whiteTheme"
        />
        <span class="toggle-2__button">
          <img
            src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/moon.png"
            alt="moon"
            class="toggle-2__button--icon"
          />
          <img
            src="https://raw.githubusercontent.com/nueymoo/toggle-switch-css/master/sun.png"
            alt="sun"
            class="toggle-2__button--icon"
          />
        </span>
      </label>
    </div>
    <div
      class="flex justify-end"
      :class="whiteTheme ? 'bg-black text-white' : 'bg-white text-black'"
    >
      <div class="w-full flex justify-end space-x-2 p-2">
        <div class="flex-auto">
          <LoginManagement
            @showCurrencyManage="showStatus"
            :whitemode="whiteTheme"
          />
          <div class="text-center">
            <h1 class="text-7xl font-extrabold font-sty uppercase">
              currency exchange
            </h1>
            <br />
            <input
              type="text"
              placeholder="Please input currency value"
              v-model="inputValue"
              class="input input-bordered input-accent w-full max-w-xs m-2"
              :class="buttonfn()"
            />
            &nbsp
            <button
              @click="isNumberAndIsPositive"
              class="btn"
              :class="themeStatus"
            >
              Convert
            </button>
            &nbsp
            <button class="btn" @click="switchOption()" :class="themeStatus">
              Switch
            </button>
            <div class="flex justify-center">
              <select
                id="sourceConverters"
                class="m-5 select select-bordered w-full max-w-xs"
                v-model="srcOption"
                :class="themeStatus"
              >
                <option
                  v-for="currency in arrayOfCurrencies"
                  :key="currency.id"
                  :value="currency.type"
                  :class="themeStatus"
                >
                  {{ currency.type }}
                </option>
              </select>

              <span
                class="m-10 items-center badge badge-lg text-xl"
                :class="themeStatus"
                >To</span
              >
              <select
                id="destinationConverter"
                class="m-5 select select-bordered w-full max-w-xs"
                v-model="destOption"
                :class="themeStatus"
              >
                <option
                  v-for="currency in arrayOfCurrencies"
                  :key="currency.id"
                  :value="currency.type"
                  :class="themeStatus"
                >
                  {{ currency.type }}
                </option>
              </select>
            </div>
            <div class="badge badge-ghost" :class="themeStatus">
              selected : {{ selectedOption }}
            </div>
            <br />
            <br />
            <div class="text-3xl b font-bold btn" :class="themeStatus">
              Summary : {{ sumOfCurrency }}
            </div>
            <div>
              <br />
              <button @click="saveLocal" class="btn" :class="themeStatus">
                save
              </button>
              &nbsp&nbsp
              <label for="my-modal-3" class="btn" :class="themeStatus">
                History</label
              >
            </div>
            <br />
            <button @click="removeLocal" class="btn" :class="themeStatus">
              remove history
            </button>
            <br />
            <br />
            <CurrencyManagement
              :showStatus="currencyManageStatus"
              @updatecurrencies="updateCurrencies"
              :whitemode="whiteTheme"
            />
            <!-- #1 showLocal รับค่าจาก ref ชื่อ showLocal แล้วส่งไปให้ prop ใน component -->
            <ShowLocalStorages :historyOfConverts="showLocal" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle-2 {
  display: inline-block;
  vertical-align: top;
  margin: 0 15px 0 0;
}

.toggle-2__input {
  display: none;
}

.toggle-2__button {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  line-height: 20px;
  text-transform: uppercase;
  color: white;
  background-color: #000000;
  border: solid 1px #d2d2d2;
  border-radius: 20px;

  width: 85px;
  height: 40px;
  cursor: pointer;
  transition: all 0.3 ease;
}

.toggle-2__button--icon {
  height: 16px;
  width: auto;
  padding: 0 12px;
}

.toggle-2__button::before {
  position: absolute;
  top: -1px;
  left: -5px;
  content: "";

  display: inline-block;
  height: 43px;
  width: 43px;

  background: #d0d0d0;
  border-radius: 100%;

  transition: all 0.3s ease;
}

.toggle-2__input:checked + .toggle-2__button {
  background: #fff;
  border: solid 1px #fff;
}
.toggle-2__input:checked + .toggle-2__button::before {
  content: "";
  left: 45px;
  background-color: #181818;
}
</style>
