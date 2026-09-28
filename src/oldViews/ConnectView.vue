<template>
  <div class="main">
    <div class="background"></div>
    <div class="tabs">
			<div class="tabs__menu">
				<a v-for="(tab, index) in items" @click.prevent="indexTab = index" :class="isActive(index)" :key="index">{{ tab.title }}</a>
			</div>
			<div class="tabs__items">
				<div :class="'tabs__item' + isActive(0)">
					<form>
            <h3>Connexion</h3>
            <div class="field-wrap">
              <label>
                E-mail
              </label>
              <input v-model="email" type="text" required autocomplete="off" />
            </div>
            <div class="field-wrap">
              <label>
                Mot de passe
              </label>
              <input v-model="password" type="text" required autocomplete="off" />
            </div>
            <button type="submit" class="button button-block">Se connecter</button>
          </form>
				</div>
				<div :class="'tabs__item' + isActive(1)">
					<form>
            <h3>Inscription</h3>
            <div class="top-row">
              <div class="field-wrap">
                <label>
                  Prenom<span class="req">*</span>
                </label>
                <input v-model="firstName" type="text" required autocomplete="off" />
              </div>
              <div class="field-wrap">
                <label>
                  Nom<span class="req">*</span>
                </label>
                <input v-model="name" type="text" required autocomplete="off" />
              </div>
            </div>
            <div class="field-wrap">
              <label>
                E-mail<span class="req">*</span>
              </label>
              <input v-model="email" type="text" required autocomplete="off" />
            </div>
            <div class="field-wrap">
              <label>
                Mot de passe<span class="req">*</span>
              </label>
              <input v-model="password" type="text" required autocomplete="off" />
            </div>
            <button type="submit" class="button button-block">S'inscrire</button>   
          </form>
				</div>
			</div>
		</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const firstName = ref("Qds")
const name = ref("")
const email = ref("")
const password = ref("")

const indexTab = ref(0);
const items = ref([
			{
				title: 'Connexion',
			},
			{
				title: "S'inscrire",
			},
  ])

const isActive = (index) => {
  return index == indexTab.value ? ' active' : ''
}
</script>

<style lang="css" scoped>
h3 {
  margin-top: 0;
}
.background {
  position: absolute;
  top: 82px;
  /* filter: blur(2px); */
  height: calc(100vh - 82px);
  width: 100vw;
  background-image: url('../assets/village.png');
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.tabs {
	width: 100%;
  height: 75vh;
}
.tabs__menu {
  display: flex;
  flex-direction: row;
}
a {
  margin-right: 6px;
  padding: 0.6em 1em;
  background-color: var(--primaryColor);
  text-decoration: none;
  color: #fff;
  transform: translateY( 6px );
  transition: 200ms;
  position: relative;
  z-index: 1;
}	
a:hover {
  background-color: var(--secondaryColor);
  transform: translateY( 4px );
}

a.active {
  background-color: #fff;
  color: #222;
  transform: translateY( 0 );
}
.tabs__items {
  background-color: #fff;
  position: relative;
  z-index: 2;
  overflow: hidden;
  height: inherit;
  display: flex;
}

.tabs__item {
  min-width: 320px;
  width: max-content;
  margin: auto;
  background-color: #fff;
  padding: 1em;
  position: absolute;
  top: -100%;
  left: -100%;
  opacity: 0;
  transition: opacity 400ms;
}
.tabs__item.active {
  display: block;
  position: relative;
  top: 0;
  left: 0;
  opacity: 1;
}
/* FORM */
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.field-wrap {
  display: flex;
  flex-direction: column;
}
.req {
  color: var(--primaryColor);
}
input {
  border: 2px var(--primaryColor) solid;
  font-size: 18px;
  border-radius: 8px;
}
input:focus {
  border: 2px black solid;
}

label {
  font-size: 14px;
}

.top-row {
  display: flex;
  gap: 16px;
}
.button {
  margin: 16px 0;
  border:0;
  outline:none;
  border-radius:8px;
  padding:16px 8px;
  font-size:1.5rem;
  font-weight: bold;
  letter-spacing:.1em;
  background:var(--primaryColor);
  color: var(--textColorWhite);
  transition:all.5s ease;
  -webkit-appearance: none;
  cursor: pointer;
}

.button:hover {
  background: var(--secondaryColor);
}

.button-block {
  display:block;
  width:100%;
}
</style>