<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-md-center">
        <img src="https://static.openfoodfacts.org/images/misc/openfoodfacts-logo-fr-178x150.png">
      </div>
      <v-alert
        :value="alert"
        type="error"
      >
        Aucun produit trouvé !
      </v-alert>
      <v-card style="background-color:gray;">
        <v-card-title
          class="headline"
        >
          Bienvenue sur Open Food Facts !
        </v-card-title>
        <v-card-text>
          <v-form @submit.prevent="submit">
            <v-text-field
              v-model="code"
              label="Entrez le code barre et appuyez sur 'Entrée'"
              type="number"
              required
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      alert: false
    }
  },
  methods: {
    submit () {
      // Ici il faut traiter la soumission
    }
  }
}
</script>
