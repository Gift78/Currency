<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  currency: {
    type: Object,
  },
  whitemode: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["add", "edit", "cancle"]);

const updateCurrency = ref({});
onMounted(() => {
  if (props.currency === undefined) {
    updateCurrency.value = {
      type: "",
      rate: undefined,
    };
  } else {
    updateCurrency.value = props.currency;
  }
});

const returnToManage = ref("currencyManage");
</script>
<template>
  <div class="text-center">
    <div class="border border-gray-500 rounded-md p-2">
      <button
        class="btn bg-red-500 float-right"
        @click="$emit('cancle', returnToManage)"
      >
        Cancle
      </button>
      <h1 class="text-2xl font-bold mb-4">=== Add/Edit Currencies ===</h1>
      <h2 class="text-1xl font-bold mb-4 text-red-700">
        ** Hint: กรุณาใส่ Rate ของค่าเงินที่เทียบต่อ 1 USD
        และกรุณาใส่ค่าสกุลเงินเป็นตัวพิมพ์ใหญ่ **
      </h2>
      <div>
        <div class="my-2">
          <label class="mr-2 font-bold">Currency Unit:</label>
          <input
            v-model="updateCurrency.type"
            type="text"
            class="px-2 py-1 rounded-md btn bg-white text-black"
          />
        </div>

        <div class="my-2">
          <label class="mr-2 font-bold">Rate:</label>
          <input
            v-model="updateCurrency.rate"
            type="number"
            class="px-2 py-1 rounded-md btn bg-white text-black"
          />
        </div>
      </div>
      <button
        v-if="updateCurrency.id"
        @click="$emit('edit', updateCurrency)"
        class="btn rounded-md bg-green-500 text-white my-2 mx-4"
      >
        Edit
      </button>
      <button
        v-else
        @click="$emit('add', updateCurrency)"
        class="btn rounded-md bg-green-500 text-white my-2 mx-4"
      >
        Add
      </button>
    </div>
  </div>
</template>

<style scoped></style>
