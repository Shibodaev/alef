<template>
  <div>
    <div class="container max-w-3xl pl-8 mx-auto pt-7 mt">
      <div class="flex flex-col max-w max-w-xl2 mx-auto" action="">
        <h5 class="font-medium text-base">Персональные данные</h5>
        <FieldInput
          :names="`Имя`"
          :labelClass="`mt-5 max-w-xl2 w-full`"
          data-te-toggle="tooltip"
          data-te-placement="top"
          data-te-ripple-init
          data-te-ripple-color="light"
          title="Поле обязательно для заполнения"
          :required="true"
          :typeField="`text`"
          v-on:addPersonName="addPerson"
        />
        <FieldInput
          :names="`Возраст`"
          :labelClass="`max-w-xl2 w-full mt-2.5`"
          data-te-toggle="tooltip"
          data-te-placement="top"
          data-te-ripple-init
          data-te-ripple-color="light"
          title="Поле обязательно для заполнения"
          :required="true"
          :typeField="`number`"
          v-on:addPersonName="addPerson"
        />

        <!-- content -->
        <div class="mt-8">
          <div class="flex items-center max-w">
            <h5 class="font-medium text-base">Дети (макс. 5)</h5>
            <div
              @click="addChildren($event)"
              :class="[
                [person.children.length === 5 ? 'hidden' : ''],
                [
                  !person.name && !person.age
                    ? 'pointer-events-none bg-slate-200 border-slate-200 text-black opacity-50'
                    : '',
                ],
              ]"
              class="ml-auto btn-hover text-sm text-defaultBlue transition-all duration-300 ease-linear hover:bg-defaultBlue hover:text-white btn inline-flex cursor-pointer items-center py-2.5 rounded-6xl border border-defaultBlue px-5"
            >
              <img class="mr-1" src="../assets/plus.svg" alt="Plus" />
              <span class=""> Добавить ребенка</span>
            </div>
            <!--  -->
          </div>
          <div class="mt-2.5">
            <div
              v-for="(item, index) in person.children"
              :key="item"
              :id="index"
              class="flex items-center gap-4"
              :class="index >= 1 ? 'mt-2.5' : ''"
            >
              <FieldInput
                :names="`Имя`"
                :labelClass="`max-w-lightxs  w-full`"
                :children="true"
                :typeField="`text`"
                v-on:addPersonName="addPerson"
              />
              <FieldInput
                :names="`Возраст`"
                :labelClass="`max-w-lightxs w-full`"
                :children="true"
                :typeField="`number`"
                v-on:addPersonName="addPerson"
              />
              <span
                @click="removeF($event.target.parentNode.getAttribute('id'))"
                class="cursor-pointer text-defaultBlue text-sm"
              >
                Удалить
              </span>
            </div>
            <div
              v-show="person.children.length === 5"
              class="font-medium text-sm text-red-500 mt-3"
            >
              Лимит полей ввода
            </div>
            <div
              @click="addToStore()"
              :class="[
                `ml-auto`,
                person.children.length === 0 ? 'hidden' : 'visible',
              ]"
              class="btn text-white bg-defaultBlue mt-8 inline-flex cursor-pointer items-center py-2.5 rounded-6xl border border-defaultBlue px-5 hover:bg-transparent hover:text-defaultBlue transition-all duration-300 ease-linear"
            >
              <span class="text-sm">Сохранить</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldInput from "../components/FieldInput.vue";
import { mapState, mapActions } from "vuex";
import store from "@/store";
export default {
  name: "FormView",
  components: {
    FieldInput,
  },
  data() {
    return {
      isHidden: true,
      limit: false,
      person: {
        name: null,
        age: null,
        children: [],
      },
    };
  },
  watch: {
    ...mapState({
      viewStore: (state) => state.forms.personData[0],
    }),
  },
  computed: {
    ...mapActions(["fieldIncrement"]),
  },
  methods: {
    addToStore() {
      store.dispatch("fieldIncrement", this.person);
    },
    addChildren() {
      this.person.children.push(
        new Object({
          name: null,
          age: null,
        })
      );
    },
    addPerson(e) {
      if (e.target.getAttribute("data-children") === "true") {
        let id = e.target.closest("div").getAttribute("id");
        if (e.target.getAttribute("type") === "text") {
          this.person.children[id].name = e.target.value;
        }
        if (e.target.getAttribute("type") === "number") {
          this.person.children[id].age = e.target.value;
        }
      } else {
        if (e.target.getAttribute("type") === "text") {
          this.person.name = e.target.value;
        }
        if (e.target.getAttribute("type") === "number") {
          this.person.age = e.target.value;
        }
      }
      // this.$store.dispatch("fieldIncrement", {});
    },
    removeF(id) {
      this.person.children.splice(id, 1);
    },
  },
};
</script>
