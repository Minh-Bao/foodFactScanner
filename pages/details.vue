<template>
  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3
    >
      <v-card>
        <v-img :src="$store.state.data.image_url" />

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

        <v-card-text class="mb-4">
          <v-list>
            <v-list-tile>
              <v-list-tile-title><strong>Marque :</strong> {{ $store.state.data.brands }}</v-list-tile-title>
            </v-list-tile><br>
            <v-list-tile v-if="$store.state.data.serving_size">
              <v-list-tile-title><strong>Quantité :</strong> {{ $store.state.data.serving_size }}</v-list-tile-title>
            </v-list-tile><br>
            <v-list-tile>
              <v-list-tile-title><strong>Conditionnement :</strong> {{ $store.state.data.packaging_tags.join(', ') }}</v-list-tile-title>
            </v-list-tile><br>
            <v-list-tile>
              <v-list-tile-title><strong>Magasins :</strong> {{ $store.state.data.stores }}</v-list-tile-title>
            </v-list-tile><br>
            <v-list-tile v-if="$store.state.data.manufacturing_places">
              <v-list-tile-title><strong>Fabrication :</strong> {{ $store.state.data.manufacturing_places }}</v-list-tile-title>
            </v-list-tile><br>
            <v-list-tile v-if="$store.state.data.labels">
              <v-list-tile-title>{{ $store.state.data.labels }}</v-list-tile-title><br>
            </v-list-tile><br>
            <v-list-tile>
              <img
                :src="nutriscore($store.state.data.nutrition_grades)"
                width="120px"
                class="pt-4"
              >
            </v-list-tile>
          </v-list>
          <v-card-actions>
            <v-btn
              flat
              to="/components"
              color="orange"
            >
              Composants
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Details',
  methods: {
    nutriscore (value) {
      return `https://static.openfoodfacts.org/images/misc/nutriscore-${value}.svg`
    }
  }
}
</script>
