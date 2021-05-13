<template>
  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>
        <v-img
          :src="$store.state.data.image_ingredients_url"
        />

        <v-card-title primary-title>
          <div>
            <div
              class="headline"
            >
              {{ $store.state.data.product_name }}
            </div>
            <span class="grey--text">{{ $store.state.data.generic_name }}</span>
          </div>
        </v-card-title>

        <v-card-text>
          <p><strong>Liste  des ingrédients :</strong></p>
          <p>{{ $store.state.data.ingredients_text_fr }}</p>
        </v-card-text>

        <v-card-actions>
          <v-btn
            flat
            to="/details"
            color="orange"
          >
            Détails
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Components'
}
</script>
