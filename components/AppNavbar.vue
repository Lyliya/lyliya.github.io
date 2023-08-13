<script lang="ts" setup>
const items = [
  {
    label: "Education",
    to: "#education",
  },
  {
    label: "Experiences",
    to: "#experiences",
  },
  {
    label: "Projects",
    to: "#projects",
  },
];
</script>

<template>
  <header
    class="w-full fixed top-0 h-20 flex gap-2 items-center justify-between px-8 bg-gray-200 dark:bg-[#050505] z-10"
  >
    <a
      class="text-xl md:text-4xl font-bold dark:text-white text-black"
      href="#me"
    >
      Guillaume G.
    </a>

    <!-- Desktop -->
    <div class="gap-4 hidden md:flex">
      <nav>
        <ul class="flex gap-4 items-center">
          <li v-for="item in items" :key="item.to">
            <a
              :href="item.to"
              class="transition-all font-medium hover:font-bold"
              >{{ item.label }}</a
            >
          </li>
          <li>
            <MyDarkToggle v-slot="{ toggle, isDark }">
              <button class="transition-all flex items-center" @click="toggle">
                <Icon size="20" :name="isDark.value ? 'uil:sun' : 'uil:moon'" />
              </button>
            </MyDarkToggle>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile -->
    <div class="gap-2 flex md:hidden items-center">
      <MyDarkToggle v-slot="{ toggle, isDark }">
        <button class="transition-all px-4 py-4" @click="toggle">
          <Icon size="20" :name="isDark.value ? 'uil:sun' : 'uil:moon'" />
        </button>
      </MyDarkToggle>
      <HeadlessMenu as="div" v-slot="{ open }">
        <HeadlessMenuButton as="button"
          ><Icon
            :name="!open ? 'uil:bars' : 'material-symbols:close-rounded'"
            size="20px"
        /></HeadlessMenuButton>
        <Transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform opacity-0"
          enter-to-class="transform opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform opacity-100"
          leave-to-class="transform opacity-0"
        >
          <HeadlessMenuItems
            class="absolute flex flex-col right-0 mt-6 gap-2 w-screen bg-gray-300 dark:bg-[#050505] rounded-sm"
          >
            <HeadlessMenuItem
              v-for="item in items"
              :key="item.to"
              class="flex items-center justify-center"
            >
              <a
                :href="item.to"
                class="transition-all font-medium px-4 py-4 hover:font-bold dark:hover:font-bold w-full"
                >{{ item.label }}</a
              >
            </HeadlessMenuItem>
          </HeadlessMenuItems>
        </Transition>
      </HeadlessMenu>
    </div>
  </header>
</template>
