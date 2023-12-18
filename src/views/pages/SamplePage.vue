<script setup lang="ts">
import { ref } from 'vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <UiParentCard title="Movimientos"> 
                <div class=""><p class="text-body-1">Adiciona un movimiento </p></div>
                <v-form>
                    <v-text-field
                    label="Descripción"
                    prepend-inner-icon="mdi-sticker-text"
                    ></v-text-field>
                    <v-text-field
                    label="Costo"
                    type="number"
                    prepend-inner-icon="mdi-cash-multiple"
                    ></v-text-field>
                    <v-text-field
                    label="Fecha"
                    type="date"
                    prepend-inner-icon="mdi-gift-open"
                    ></v-text-field>
                    <v-btn
                    color="primary"
                    type="submit" block
                    class="mt-2"
                    append-icon="mdi-plus-circle"
                    >Crear</v-btn>
                </v-form>
            </UiParentCard>
        </v-col>
    </v-row>
</template>
