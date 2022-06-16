<template>
  <div>
    <button @click="signIn">SignIn</button>
    <button @click="signOut">SignOut</button>
    <router-link to="/test">test</router-link>
  </div>
</template>

<script>
import Amplify, {Auth} from "aws-amplify";
import awsConfig from "@/amplify-config.js";

Amplify.configure(awsConfig);
export default {
  name: "homePage",
  methods: {
    signIn() {
      debugger
      this.getUserInfo().then((userInfo) => {
        console.log(userInfo);
        if (!userInfo) {
          Auth.federatedSignIn();
        } else {
          this.$router.push("/test")
        }
      });
    },
    signOut() {
      Auth.signOut();
    },
    async getUserInfo() {
      let userInfo = null;
      try {
        userInfo = await Auth.currentAuthenticatedUser();
      } catch (e) {
        // This had to be added because Amplify doesn't catch the exception, this means
        // that the user is not logged in, there is other code that redirects to login page.
        console.log("login fail");
      }
      return userInfo;
    }
  }
}
</script>

<style scoped>

</style>
