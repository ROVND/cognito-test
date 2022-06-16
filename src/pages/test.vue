<template>
  <div>
    <button @click="test">test</button>
  </div>
</template>

<script>
import Amplify from "aws-amplify";
import {API} from "aws-amplify";

export default {
  name: "appPage",
  methods: {
    async test() {
      console.log("test")
      const data = await this.getData();
      console.log(data);
    },
    async getData() {
      Amplify.Logger.LOG_LEVEL = "DEBUG";
      const apiRequest = {
        body: {
          name: "hongdy"
        },
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log("API Request:", apiRequest);
      const apiName = "LambdaSimpleProxy";
      const apiPath = "/helloworld";
      return await API.post(apiName, apiPath, apiRequest);
    }
  }
}
</script>

<style scoped>

</style>
