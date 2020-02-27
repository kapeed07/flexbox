<template>
  <div class="db-flex db-row db-space-around">
    <div
      class="db-flexbox db-border db-position-relative"
      :class="[value,...styles, isFlexRow ? 'db-row' : 'db-column', isFlexWrap ? 'db-flex-wrap' : '']">
        <div
          v-for="(box, index) in boxes"
          :key="index"
          :value="index"
          class="db-flex db-justify-center db-align-center db-box db-position-relative"
          :class="[ box ? 'db-self db-self-center' : '']"
          @click="markBox(index)"
          >
            {{index}}
          <div @click="removeBox(index)" class="db-close db-pointer">
            <i class="fa fa-times"></i>
          </div>
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
       <template>
        <el-select v-model="value" @change="changeJustify" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
      <ul>
        <li><b-button type="is-primary" @click="addBox">Click to add box</b-button></li>
        <li>Click on any box to make it align-self: center</li>
      </ul>
      
        <b-switch @input="isFlexRow = !isFlexRow" :value="isFlexRow">
          {{ isFlexRow ? 'Row' : 'Column' }}
        </b-switch>
        <b-switch @input="isFlexWrap = !isFlexWrap" :value="isFlexWrap">
          {{ isFlexWrap ? 'Wrap' : '' }}
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
      options: [
        {
          value: 'db-justify-start',
          label: 'flex-start'
        },
        {
          value: 'db-justify-center',
          label: 'flex-center'
        },
        {
          value: 'db-justify-end',
          label: 'flex-end'
        }
        ],
        value: '',
      isFlexRow: true,
      isFlexWrap: false,
      boxes: [0,0,0],
      styles: ["db-flex"]
    }
  },
  methods: {
    removeBox(index) {
      this.boxes.splice(index, 1);
    },
    addBox() {
      this.boxes.push(0);
    },
    changeJustify() {
      // let styles = [...this.styles]
      // if(styles.length === 1) {
      //   styles.push();
      // } else {
      //   styles.pop();
      //   styles.push(value);
      // }
      // this.styles = styles;
      // const index = this.styles.indexOf(`db-justify-${value}`);
      // if(index >=0 ) {
      //   this.styles.splice(index, 1)
      // } else {
      //   this.styles.push(`db-justify-${value}`)
      // }
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

.db-justify-start {
  justify-content: flex-start;
}

.db-justify-end {
  justify-content: flex-end;
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

.db-close {
  width: 15px;
  font-size: 12px;
  height: 15px;
  position: absolute;
  right: 0px;
  color: white;
  top: 3px;
}

.db-flex-wrap {
  flex-wrap: wrap;
}
 
 .db-pointer {
   cursor: pointer;
 }
</style>