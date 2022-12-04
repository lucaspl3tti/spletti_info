<template>
  <div class="form-group">
    <label :for="inputId" class="form-label">
      {{ label }}:
    </label>

    <input
      :id="inputId"
      ref="input"
      class="form-control"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :name="inputId"
      :aria-describedby="inputHelp !== '' ? inputHelp : ''"
      @input="onInput"
      @enter="onEnter"
      @focusout="onFocusout"
    />

    <div v-if="inputHelp !== ''" :id="inputHelpId" class="form-text">
      {{ inputHelp }}
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change',
  },

  props: {
    inputId: {
      type: String,
      default: '',
      required: true
    },

    label: {
      type: String,
      default: '',
      required: true
    },

    value: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text',
    },

    placeholder: {
      type: String,
      default: 'Enter text',
    },

    inputHelp: {
      type: String,
      default: '',
    },

    inputHelpId: {
      type: String,
      default: '',
    }
  },

  methods: {
    onInput(event) {
      this.$emit('change', event.target.value)
    },

    onEnter() {
      this.$emit('enter')
    },

    onFocusout() {
      this.$emit('focusout')
    }
  },
}
</script>
