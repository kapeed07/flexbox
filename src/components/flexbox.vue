<template>
  <div class="db-flex db-row db-space-around">
    <div
      class="db-flexbox db-border db-position-relative"
      :class="[...styles, isFlexRow ? 'db-row' : 'db-column']">
        <div
          v-for="(box, index) in boxes"
          :key="index"
          class="db-box"
          :class="[ box ? 'db-self db-self-center' : '' ]"
          @click="markBox(index)">
        </div>
        <div class="db-position-absolute" style="transform: rotate(-90deg); left: -65px; top: 100px;">
          {{ isFlexRow ? 'Cross' : 'Main' }} Axis →
        </div>
        <div class="db-position-absolute" style="top: -30px; left: 55px;">
          {{ isFlexRow ? 'Main' : 'Cross' }} Axis →
        </div>
    </div>
   <div class="db-console db-border db-flex db-row db-align-center db-justify-center">
     <div class="db-flex db-column">
      <ul>
        <li>Click on any box to make it align-self: center</li>
      </ul>
      <div class="field">
        <b-switch @input="isFlexRow = !isFlexRow" :value="isFlexRow">
          {{ isFlexRow ? 'Row' : 'Column' }}
        </b-switch>
      </div>
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
      isFlexRow: true,
      boxes: [0,0,0],
      styles: ["db-flex"]
    }
  },
  methods: {
    justifyContentCenter() {
      const index = this.styles.indexOf('db-justify-center');
      if(index >=0 ) {
        this.styles.splice(index, 1)
      } else {
        this.styles.push('db-justify-center')
      }
      this.justifyContent = !this.justifyContent
    },
    markBox(index) {
      let boxes = [...this.boxes]
      boxes[index] = !boxes[index]
      this.boxes = boxes;
    },
    changeFlex() {
      const index = this.styles.indexOf('db-flex');
      if(index >=0 ) {
        this.styles.splice(index, 1)
      } else {
        this.styles.push('db-flex')
      }
    }
  }
}
</script>

<style>
.db-flex {
  display: flex;
}

.db-self-center {
  align-self: center;

}

.db-space-around {
  justify-content: space-around;
}

.db-space-between {
  justify-content: space-between;
}



.db-row {
  flex-direction: row;
}

.db-position-relative {
  position: relative;
}

.db-position-absolute {
  position: absolute;
}

.db-column {
  flex-direction: column;
}

.db-self {
  border: 3px dotted red;
}

.db-justify-center {
  justify-content: center;
}

.db-align-center {
  align-items: center;
}

.db-box {
  background-color: orange;
  box-shadow: 10px 10px 5px -10px rgba(0,0,0,0.78);
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 4px;
}

.db-border {
  border: 3px dashed #56A8E4;
  border-radius: 4px;
}

.db-console {
  width: 30%;
  height: 600px;
}

.db-flexbox {
  width: 50%;
  height: 600px;
}
</style>