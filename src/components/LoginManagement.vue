<script setup>
import { ref, onMounted } from "vue";
import { getUsers } from "../composable/getUsers";
const emit = defineEmits(["showCurrencyManage"]);
const props = defineProps({
  whitemode: {
    type: Boolean,
    required: true,
  },
});

const inputUser = ref("");
const inputPass = ref("");
const currentUser = ref("");
const currencyManageStatus = ref(false);

const arrayOfUsers = ref([]);

onMounted(async () => {
  arrayOfUsers.value = await getUsers();
});

const filteredUser = ref([]);
const filterUser = () => {
  //ภายใต้เงื่อนไขว่า User แต่ละคนชื่อไม่ซำ้กันทำให้ filter จะออกมาแค่ 1 คน
  filteredUser.value = arrayOfUsers.value.filter(
    (user) => user.username === inputUser.value
  );
  return filteredUser.value;
};
const resetInput = () => {
  inputUser.value = "";
  inputPass.value = "";
};

const closeCheckbox = ref(false);
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

const logout = () => {
  currencyManageStatus.value = false;
  emit("showCurrencyManage", currencyManageStatus.value);
  resetInput();
};
</script>
<template>
  <div v-show="currencyManageStatus" class="text-right">
    <h2 class="text-red-500 text-xl font-bold">Hello: {{ currentUser }}</h2>
  </div>
  <div class="text-right">
    <label
      for="my-modal-2"
      class="btn btn-sm"
      :class="whitemode ? 'bg-white  text-black' : 'bg-black text-white'"
    >
      Login To Management Currency</label
    >
    &nbsp
    <button
      class="btn btn-sm"
      @click="logout"
      :class="whitemode ? 'bg-white  text-black' : 'bg-black text-white'"
    >
      ( X ) Logout
    </button>
  </div>

  <input
    type="checkbox"
    id="my-modal-2"
    class="modal-toggle"
    v-model="closeCheckbox"
  />
  <div class="modal">
    <div
      class="modal-box relative w-11/12 max-w-2xl"
      :class="whitemode ? 'bg-black  text-white' : 'bg-white text-black'"
    >
      <label
        for="my-modal-2"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div>
        <h3>Login To Management Currency</h3>
        <div class="p-5">
          Username:
          <input
            type="text"
            class="input input-bordered input-accent w-full max-w-xs m-2"
            v-model="inputUser"
            :class="whitemode ? 'bg-white text-black' : 'bg-white text-black'"
          />
        </div>
        <div>
          Password:
          <input
            type="password"
            class="input input-bordered input-accent w-full max-w-xs m-2"
            v-model="inputPass"
            :class="whitemode ? 'bg-white text-black' : 'bg-white text-black'"
          />
        </div>
        <button class="btn" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
