<script setup>
import { ref, computed } from "vue";
// #2 showLocal รับค่า Array มาจาก App.vue ที่ bind ไว้ และลงทะเบียน prop
const props = defineProps({
  historyOfConverts: {
    type: Array,
    default: [],
  },
});

// #3 เตรียม Array ไว้เก็บที่ filter มาเฉพาะ Mode ที่ต้องการดู
const filteredHistory = ref([]);
// #4 ref ต่อกับ v-model ใน input ของ Searchword
const seachWord = ref("");

//#5 computed ไว้ filter หากมีการกรอก searchword เข้ามาถ้าไม่มีก็ใช้ historyOfConverts ที่รับเข้ามาปกติ
const newHistory = computed(() => {
  if (seachWord.value !== null && props.historyOfConverts !== null) {
    filteredHistory.value = props.historyOfConverts.filter((history) =>
      history.convertMode.toUpperCase().includes(seachWord.value.toUpperCase())
    );
    return filteredHistory.value;
  }
  return props.historyOfConverts;
});
</script>
<template>
  <input type="checkbox" id="my-modal-3" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box relative w-11/12 max-w-2xl">
      <label
        for="my-modal-3"
        class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <div class="text-black">
        หน่วยสกุลเงินที่ต้องการค้นหา:
        <input
          type="text"
          placeholder=" eg. THB"
          v-model="seachWord"
          class="text-black text-sm border border-black caret-black"
        />
      </div>
      <br />
      <p
        v-show="newHistory === null || newHistory.length === 0"
        class="text-black"
      >
        ไม่พบประวัติการคำนวณค่าสกุลเงิน
      </p>
      <div v-for="convert in newHistory">
        <div class="text-black border border-black p-2">
          ConvertMode: {{ convert.convertMode }}, Value:
          {{ convert.inputValue }}, Summary: {{ convert.summary }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
