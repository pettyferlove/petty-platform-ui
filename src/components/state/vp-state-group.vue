<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-state-group vp-panel">
      <div class="item" v-for="item in data" :style="{ width: itemWidth }" :key="item.id">
      <span class="icon" :style="{ color: item.color }">
        <i :class="item.icon"></i>
      </span>
        <p>
          {{ item.title }} {{ item.value }}
        </p>
      </div>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    name: 'vp-state-group',
    props: {
      data: {
        type: Array,
        default: function () {
          return [
            {
              title: 'title',
              icon: 'fa fa-user',
              value: '666',
              color: '#41b883'
            }
          ]
        }
      }
    },
    computed: {
      itemWidth: function () {
        let p = 'calc( ' + 1 / this.data.length * 100 + '% - 1px )'
        return p
      }
    },
    mounted: function () {
      // console.log(1 / this.data.length * 100 + '%')
    }
  }
</script>
