<template>
    <div class="t-content-index">
      <div class="info-blocks">
        <div class="info-block">
          <h1 class="title">Баланс</h1>
          <p class="value">{{ getBalance }}₽</p>
        </div>
        <div class="info-block">
          <h1 class="title">Состояние</h1>
          <p class="value">{{ getStatus }}</p>
        </div>
        <div class="info-block">
          <h1 class="title">Трафик</h1>
          <p class="value">{{ getUsedTraffic }}Гб / {{ getTraffic }}</p>
        </div>
        <div class="info-block">
          <h1 class="title">Скорость</h1>
          <p class="value">{{ getInternetSpeed }} Мбит/с</p>
        </div>
        <div class="info-block">
          <h1 class="title">Тариф</h1>
          <p class="value">{{ getTarif }}</p>
        </div>
        <div class="info-block">
          <h1 class="title">IP</h1>
          <p class="value">{{ getIP }}</p>
        </div>
        <div class="info-block">
          <h1 class="title">Заблокирован</h1>
          <p class="value">{{ getBlocked }}</p>
        </div>
        <div class="info-block">
          <h1 class="title">Дата регистрации</h1>
          <p class="value">{{ getRegDate }}</p>
        </div>
      </div>
      <div class="buttons">
        <nuxt-link class="light-button" to="/cp/pay">
          <p>Пополнить баланс</p>
        </nuxt-link>
        <nuxt-link class="dark-button" to="/cp/settings">
          <p>Изменить тариф</p>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  layout: 'cp',
    created() {
        this.$nuxt.$emit('profile-change-page-headline', 'Мой профиль');
    },
    computed:{
      getBalance(){
        return this.$store.state.data.userDataArray.balance.toFixed(2);
      },
      getInternetSpeed(){
        return this.$store.state.data.userDataArray.tarif.internetSpeed;
      },
      getUsedTraffic(){
          return this.$store.state.data.userDataArray.tarif.trafficUsed;
      },
      getTarif(){
        return this.$store.state.data.userDataArray.tarif.tarif;
      },
      getIP(){
        return this.$store.state.data.userDataArray.IP;
      },
      getRegDate(){
          return this.$store.state.data.userDataArray.registrationDate;
      },
      getStatus(){
        if (this.$store.state.data.userDataArray.status === true){
            return 'Работает';
        }
        if (this.$store.state.data.userDataArray.status === false){
            return 'Не работает';
        }
      },
      getTraffic(){
        if(this.$store.state.data.userDataArray.tarif.traffic == 'infinity'){
          return '∞';
        }

        if(this.$store.state.data.userDataArray.tarif.traffic != 'infinity'){
          return this.$store.state.data.userDataArray.tarif.traffic + 'Гб';
        }
      },
      getBlocked(){
        if(this.$store.state.data.userDataArray.blocked == true){
          return 'Да';
        }

        if(this.$store.state.data.userDataArray.blocked == false){
          return 'Нет';
        }
      }
    }
}
</script>

<style lang="scss">
  .t-content-index{
    width: 100%;
    margin-top: 20px;

    .info-blocks{
      background: rgba(0,0,0,0.1);
      border-radius: 5px;
      padding: 10px;
      width: calc(100% - 20px);
      padding-top: 30px;
      padding-bottom: 30px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-content: stretch;
      align-items: center;
      background: rgba(0,0,0,0.1);
      border-radius: 5px;
    

      .info-block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 25%;
        margin-top: 20px;
        margin-bottom: 20px;

        h1{
          background-image: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
          font-size: 14px;
          font-weight: bold;
          color: transparent;
          -webkit-background-clip: text;
          margin: 0;
        }

        p{
          font-size: 15px;
          font-weight: 600;
          margin: 0;
          margin-top: 5px;
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