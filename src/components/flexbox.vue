<template>
  <div>
    <div class="flexbox"
    :class="[...styles]">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div style="margin-top: 100px;" class="flex row justify-center">
        <div class="field">
            <b-switch @input="justifyContentCenter" :value="justifyContent">
                Justify Content Center
            </b-switch>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flexbox',
  props: {
    
  },
  data () {
    return {
      isFlex: false,
      justifyContent: false,
      styles: ["flex", "row"]
    }
  },
  methods: {
    justifyContentCenter() {
      const index = this.styles.indexOf('justify-center');
      if(index >=0 ) {
        this.styles.splice(index, 1)
      } else {
        this.styles.push('justify-center')
      }
      this.justifyContent = !this.justifyContent
    },
    changeFlex() {
      const index = this.styles.indexOf('flex');
      if(index >=0 ) {
        this.styles.splice(index, 1)
      } else {
        this.styles.push('flex')
      }
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

.justify-center {
  justify-content: center;
}

.box {
  background-color: orange;
  box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.78);
  width: 100px;
  margin: 10px;
  border-radius: 4px;
  height: 100px;
}

.flexbox {
  border: 3px dashed #56A8E4;
  width: 60%;
  height: 80%;
  margin: 0 auto;
}
</style>