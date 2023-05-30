<template>
  <label
    :class="labelClass"
    class="overflow-hidden h-14 rounded inline-block relative bg-white pt-2 px-4 pb-2 border-solid border-gray-250 border"
  >
    <span class="gray-new leading-3 text-sm1 m-0 absolute top-3"
      >{{ names }}<sup v-if="required" class="text-red-500">*</sup></span
    >
    <input
      :required="required"
      :class="inputClass"
      class="w-full focus:border-none text-sm1 focus:outline-none mt-5"
      :id="id"
      :data-children="children"
      :type="typeField"
      :maxlength="typeField === 'number' ? '2 ' : false"
      @input="$emit('addPersonName', $event), maxName($event)"
    />
  </label>
</template>

<script>
export default {
  data() {
    return {
      parentName: "",
    };
  },
  methods: {
    maxName(e) {
      if (e.target.getAttribute("type") === "text") {
        e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "");
      }
    },
  },
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    id: String || Number,
    names: String,
    labelClass: String,
    inputClass: String,
    children: {
      type: Boolean,
      default: false,
    },
    typeField: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style></style>
