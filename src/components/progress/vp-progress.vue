<template>
  <el-card :body-style="{ padding: '0px' }">
    <el-row class="vp-progress vp-panel">
      <el-row type="flex" align="middle" justify="space-between" class="panel-heading">
        {{ title }}
        <el-radio-group v-model="order" size="small" @change="handleSortData">
          <el-radio-button label="0"><i class="fa fa-bars"></i></el-radio-button>
          <el-radio-button label="1"><i class="fa fa-sort-amount-asc"></i></el-radio-button>
          <el-radio-button label="-1"><i class="fa fa-sort-amount-desc"></i></el-radio-button>
        </el-radio-group>
      </el-row>
      <table>
        <tbody>
        <tr v-for="(item, index) in rebuildData" :key="item.id">
          <td style="width: 3%">
            {{ index | indexPlus }}
          </td>
          <td style="width: 10%">
            {{ item.name }}
          </td>
          <td v-if="item.tags" :key="item.id" style="width: 25%">
            <el-tag style="margin-left: 5px" size="small" type="primary" v-for="item in item.tags" :key="item.id">{{ item }}
            </el-tag>
          </td>
          <td style="width: 50%">
            <el-progress :percentage="item.value"
                         :status="item.value>50?item.value===100?'success':'':'exception'"/>
          </td>
        </tr>
        </tbody>
      </table>
    </el-row>
  </el-card>
</template>
<script>
  export default {
    name: 'vp-progress',
    props: {
      title: {
        type: String,
        default: 'Progress'
      },
      data: {
        type: Array,
        default: function () {
          return [
            {
              name: 'JesseLuo',
              tags: ['hansome', 'cool'],
              value: 100
            }
          ]
        }
      }
    },
    data: function () {
      return {
        order: '0',
        rebuildData: []
      }
    },
    filters: {
      indexPlus: function (value) {
        return ++value
      }
    },
    methods: {
      sortData: function (data, type) {
        if (type === 1) {
          data.sort((a, b) => {
            return a.value - b.value
          })
        } else if (type === -1) {
          data.sort((a, b) => {
            return b.value - a.value
          })
        }
      },
      handleSortData: function () {
        if (this.order === '0') {
          this.rebuildData = this.data.slice(0)
        } else if (this.order === '1') {
          this.sortData(this.rebuildData, 1)
        } else if (this.order === '-1') {
          this.sortData(this.rebuildData, -1)
        }
      },
      checkStatus: function () {
        return 'success'
      }
    },
    created () {
      this.rebuildData = this.data.slice(0)
    }
  }
</script>
