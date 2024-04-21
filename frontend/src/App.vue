<script setup lang="ts">
// import { ref } from "vue";
import AppButton from "./components/app-button.vue";

// const displayBioForm = ref(false)
// const displayPictureForm = ref(false)
// const displayAsfRoleForm = ref(false)
// const displayQuotesForm = ref(false)


// // show the bioform
// const showBioform = () => displayBioForm.value = true;
// const showPictureForm = () => displayPictureForm.value = true;
// const showAsfRoleForm = () => displayAsfRoleForm.value = true;
// const showQuotesForm = () => displayQuotesForm.value = true;

// // hide the bioform
// const hideBioform = () => displayBioForm.value = false;
// const hidePictureForm = () => displayPictureForm.value = false;
// const hideAsfRoleForm = () => displayAsfRoleForm.value = false;
// const hideQuotesForm = () => displayQuotesForm.value = false;


// // the form data
// const bioData = ref({
//   name: "",
//   email: "",
//   phone: "",
//   address: "",
//   dob: "",
// });

// const pictureData = ref({
//   picture: "",
// });

// const asfRoleData = ref({
//   role: "",
// });

// const quotesData = ref({
//   quote: "",
// });

// // the form submit
// const submitBioForm = () => {
//   console.log(bioData.value);
//   hideBioform();
// };

</script>

<template>
  <div class="container py-10 sm:py-20 h-[100vh-40px]">
    <h1 class="text-4xl font-bold text-center">Dear Untoppable ...</h1>
    <p class="leading-1 text-base text-center">
      So, you made it to the finish line and we think It would be great to share
      in you Joy and Success, dont you think 🫣

      So the Task is Simple, Provide us with some inofmration and it's all has been 🎒

      Swipe left when ready or cliclk the Button Below! ✨
    </p>

    <img src="" alt="image">
    <AppButton
      text="Begin"
      class="bg-black w-full text-white block mt-4 relative bottom-0"
    />
  </div>
</template>

<style scoped></style>
