<template>
    <div class="t-content-pay">
        
        <div class="info-block">
            <div class="table-payments">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Дата</th>
                        <th>Сумма</th>
                        <th>Способ</th>
                        <th>Коментарий</th>
                    </tr>
                    <tr v-for="(item, index) in getPayments" :key="index">
                        <td>#{{ item.id }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.sum.toFixed(2) }}₽</td>
                        <td>{{ item.way }}</td>
                        <td>{{ item.comment.substr(0, 31) }}...</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="buttons">
            <nuxt-link class="light-button" to="/cp/pay">
                <p>Пополнить картой</p>
            </nuxt-link>
            <nuxt-link class="dark-button" to="/cp/settings">
                <p>Обещанный платеж</p>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'cp',
    created() {
        this.$nuxt.$emit('profile-change-page-headline', 'Платежи');
    },
    computed:{
        getPayments(){
            return this.$store.state.data.paymentArray;
        }
    }
}
</script>

<style lang="scss">
.t-content-pay{
    width: 100%;
    margin-top: 20px;

    .info-block{
      background: rgba(0,0,0,0.1);
      border-radius: 5px;
      padding: 10px;
      width: calc(100% - 20px);
      padding-top: 0px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0,0,0,0.1);
      border-radius: 5px;
    

      .table-payments{
        width: 100%;

        table{
            width: 100%;
            margin: 0;

            th{
                text-align: left;
                padding-left: 10px;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                font-size: 16px;
                background-image: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
                font-weight: bold;
                color: transparent !important;
                -webkit-background-clip: text;
                
            }
            td{
                text-align: left;
                border-bottom: 1px solid rgba(255,255,255,0.1);
                font-size: 13px;
            }
        }
      }
    }

    .buttons{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 15px;

      .light-button{
        background: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
        color: white;
        height: 50px;
        width: 250px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        p{
          font-weight: 500;
        }
      }

      .dark-button{
        background: linear-gradient(270deg, rgba(250, 82, 147, 0.1) 0, rgba(248, 107, 100, 0.1) 100%);
        height: 50px;
        width: 250px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fa5293;

        p{
          font-weight: 500;
        }
      }
    }
  }
</style>