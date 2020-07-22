<template>
  <div class="text-left">
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title class="headline grey lighten-2">
          The magic card
        </v-card-title>

        <v-card-text>
            Jag kommer lägga upp kort för kort i tre högar.
            När helst du känner för det bestämmer du dig för att tänka på ett kort.
            Efter alla kort delats ut letar du upp den hög som ditt uttänkta kort finns i. 
            Klicka därefter "Välj" ovan för den högen.
            <br />
            <br />
            För att göra det klurigare så kommer jag lägga ut korten igen. Nu ska du åter igen leta rätt på SAMMA uttänkta kort som tidigare.
            Välj den hög som kortet dyker upp i. Detta görs ytterligare en sista gång, kom ihåg vilken kort du tänkt på. Välj sedan den högen som kortet ligger i.
<br />
            Där efter tar min magi vid och jag kommer visa dig vilken kort du har tänkt på!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK, kör!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name: 'how-to-play',
    data: () => ({
        dialog: true
    })
}
</script>

<style>

</style>