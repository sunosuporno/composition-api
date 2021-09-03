<template>
  <div class="home">
    <router-link :to="{name: 'UsingProps'}">Using Props</router-link>

    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button><br>
    
    <input v-model="search" type="text"/>
    <p>{{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{name}}</div>
    <button @click="handleClick">Stop watching</button>
    <h2>{{goodName}}</h2>
  </div>
</template>

<script>
import { ref, reactive, computed } from "@vue/reactivity";
import { watchEffect, watch } from '@vue/runtime-core';

export default {
  name: "Home",
  setup() {
    const ninjaOne = ref({ name: "Yoshi", age: 25 });
    const ninjaTwo = reactive({ name: "Mario", age: 30 });
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const updateNinjaOne = () => {
      ninjaOne.value.age = 35;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.age = 45;
    };
    const search = ref('')
    const goodName = computed(() => {
      return "Suporno"
    })

    const stopWatch = watch(search, () => {
      console.log("watch function ran")
    })

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value)
    })

    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo, goodName, names, search, matchingNames, handleClick };
  },
};
</script>
