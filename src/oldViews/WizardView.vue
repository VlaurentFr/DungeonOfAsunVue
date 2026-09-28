<script setup lang="ts">
import { ref, computed } from 'vue';


const weaponCheck = ref<string>('');
const magicCheck = ref<string>('');
const blackMagicCheck = ref<string>('');
const classes = computed(() => {
  console.log('here')
  if(magicCheck.value == 'yes') {
    if(blackMagicCheck.value == 'yes') {
      return 'Chevalier du Néant';
    }
    return 'Grand Croisé'
  }
  if (magicCheck.value == 'unique') {
    return 'Archimage'
  }
  if(weaponCheck.value == 'swords') {
    return 'Epeiste';
  }
  return 'Epeiste';
})
</script>

<template>
<div>
  <h2>Faites votre choix de classe</h2>
  <form id="form">
    <div>
      <p class="questions">Quelle est votre armes de prédilection ?</p>
      <div>
        <input type="radio" id="swords" name="swords" value="swords" v-model="weaponCheck" />
        <label for="swords">Epee</label><br />
      </div>
      <div>
        <input type="radio" id="daggers" name="daggers" value="daggers" v-model="weaponCheck" />
        <label for="daggers">Dague</label><br />
      </div>
      <div>
        <input type="radio" id="bow" name="bow" value="bow" v-model="weaponCheck" />
        <label for="bow">Arc</label><br />
      </div>
      <div>
        <input type="radio" id="axe" name="axe" value="axe" v-model="weaponCheck" />
        <label for="axe">Hache</label><br />
      </div>
      <div>
        <input type="radio" id="masse" name="masse" value="masse" v-model="weaponCheck" />
        <label for="masse">Masse</label><br />
      </div>
      <div>
        <input type="radio" id="Poing" name="Poing" value="Poing" v-model="weaponCheck" />
        <label for="Poing">Poing</label><br />
      </div>
      <div>
        <input type="radio" id="spear" name="spear" value="spear" v-model="weaponCheck" />
        <label for="spear">Lance</label><br />
      </div>
      <div>
        <input type="radio" id="magic" name="magic" value="magic" v-model="weaponCheck" />
        <label for="magic">Magie</label><br />
      </div>
    </div>
    <div>
      <p class="questions">Voulez vous utilisé de la magie ?</p>
      <div>
        <input type="radio" id="unique" name="unique" value="unique" v-model="magicCheck" />
        <label for="unique">Uniquement</label><br />
      </div>
      <div>
        <input type="radio" id="yes" name="yes" value="yes" v-model="magicCheck" />
        <label for="yes">Oui</label><br />
      </div>
      <div>
        <input type="radio" id="no" name="no" value="no" v-model="magicCheck" />
        <label for="no">Non</label><br />
      </div>
    </div>
    <div>
      <p class="questions">Voulez vous utilisé de la magie obscure ?</p>
      <div>
        <input type="radio" id="yes2" name="yes2" value="yes" v-model="blackMagicCheck" />
        <label for="yes2">Oui</label><br />
      </div>
      <div>
        <input type="radio" id="no2" name="no2" value="no" v-model="blackMagicCheck" />
        <label for="no2">Non</label><br />
      </div>
    </div>
  </form>
  <p  class="questions">
    Nous vous conseillons la classe : {{ classes }} 
  </p>
</div>
</template>

<style scoped>
#form {
  display: flex;
  gap: 64px;
  flex-wrap: wrap;
}
#form div input {
  margin-right: 8px;
}
.questions {
  margin: 64px 0;
}
</style>