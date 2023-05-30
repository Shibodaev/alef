<template>
  <div class="container max-w-2xl mx-auto pt-7 mt">
    <h5 v-if="viewStorePerson" class="font-medium text-base">
      Персональные данные
    </h5>
    <div v-if="!viewStorePerson" class="text-red-500 mt-4 font-medium">
      Данные формы не заполнены
    </div>
    <div v-else>
      <h5 class="text-base mt-5 font-bold">
        <span v-if="viewStorePerson.name">{{ viewStorePerson.name }}</span
        >&nbsp;
        <span v-if="viewStorePerson.age">{{ viewStorePerson.age }} лет</span>
      </h5>
      <div v-if="viewStorePerson.children" class="mt-14">
        <h5 class="font-medium text-base">Дети</h5>
        <ul class="flex flex-col">
          <li
            style="background-color: #f1f1f1"
            class="mt-5 py-2.5 px-5 font-bold text-base mr-auto rounded-md"
            v-for="(item, index) in viewStorePerson.children"
            :key="index"
          >
            <span v-if="item.name" class="inline-block">{{ item.name }},</span>
            <span v-if="item.age" class="inline-block ml-1"
              >{{ item.age }} лет</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      viewStorePerson: (state) => {
        return state.forms.personData[0];
      },
    }),
  },
};
</script>

<style></style>
