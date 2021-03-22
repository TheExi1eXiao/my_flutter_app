<template>
  <div class="about">
    <web-page title="关于页面">
      <!-- <more-list 
        api="game"
        :params="{reportDate: '2020-07-08'}"
        :preLoad="false"
      >
        <template v-slot:default="{ dataList }">
          <about-list :dataList="dataList"></about-list>
        </template>
        
      </more-list> -->
      <template>
        <div>{{orderDetail.id}}</div>
        <div v-for="(item, index) in order.matchData" :key="index">
          <div>{{ item.home }}</div>
          <match-list :data="item.odds"></match-list>
        </div>
      </template>
    </web-page>
  </div>
</template>

<script>
import { AboutList, MatchList } from './components'
import OrderDetail from './dto'
export default {
  data() {
    return {
      order: {
        id : 1,
        matchData: [
          {
            id: 2,
            home: '清水心跳4',
            odds: {
              0: {
                rangqiu: 1,
                oddsList: [
                  {
                    rangqiu: 1,
                    label: "胜",
                    odds: 1.1,
                  },
                  {
                    rangqiu: 1,
                    label: "平",
                    odds: 1.3,
                  },
                  {
                    rangqiu: 1,
                    label: "负",
                    odds: 2.1,
                  }
                ]
              }
            }
          },
          {
            id: 3,
            home: '清水心跳3',
            odds: {
              0: {
                rangqiu: 1,
                oddsList: [
                  {
                    rangqiu: 1,
                    label: "胜",
                    odds: 1.1,
                  },
                  {
                    rangqiu: 1,
                    label: "平",
                    odds: 1.3,
                  },
                  {
                    rangqiu: 1,
                    label: "负",
                    odds: 2.1,
                  }
                ]
              }
            }
          },
          {
            id: 4,
            home: '清水心跳2',
            odds: {
              0: {
                rangqiu: 1,
                oddsList: [
                  {
                    rangqiu: 1,
                    label: "胜",
                    odds: 1.1,
                  },
                  {
                    rangqiu: 1,
                    label: "平",
                    odds: 1.3,
                  },
                  {
                    rangqiu: 1,
                    label: "负",
                    odds: 2.1,
                  }
                ]
              }
            }
          },
        ]
      },
      orderDetail: {}
    };
  },

  components: {
    AboutList,
    MatchList,
  },

  mounted() {
    let { a } = this.$route.params;
    console.log(this.$route)
    console.log(a);
    let orderDetail = new OrderDetail(this.order);
    console.log(orderDetail)
    this.orderDetail = orderDetail;
  },

  methods: {

  }
};
</script>