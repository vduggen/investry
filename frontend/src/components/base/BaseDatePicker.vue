<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <BaseInput
        v-model="dateFormatted"
        :label="labelComputed"
        persistent-hint
        v-bind="attrs"
        @blur="date = parseDate()"
        v-on="on"
      />
    </template>

    <v-date-picker
      locale="pt-br"
      color="primary"
      v-model="date"
      no-title
      @input="menu = false"
    />
  </v-menu>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Watch,
} from 'vue-property-decorator';
import BaseInput from './BaseInput.vue';
import FormatLabel from '../../utils/formatLabel';

const BaseDatePickerProps = Vue.extend({
  components: {
    BaseInput,
  },

  props: {
    isRequired: Boolean,
  },
});

@Component
export default class BaseDatePicker extends BaseDatePickerProps {
  menu = false;

  @Prop({ default: '' }) label!: string;

  @Watch('date')
  public watchDate() {
    this.dateFormatted = this.formatDate();
  }

  get labelComputed() {
    const label = new FormatLabel(this.label, this.isRequired);

    return label.getLabel();
  }

  date = '2022-04-04';

  dateFormatted = '04/04/2022';

  get computedDateFormatted() {
    return this.formatDate;
  }

  formatDate(): string {
    if (!this.date) return '';

    const [year, month, day] = this.date.split('-');
    return `${day}/${month}/${year}`;
  }

  parseDate(): string {
    if (!this.dateFormatted) return '';

    const [month, day, year] = this.dateFormatted.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
}
</script>
