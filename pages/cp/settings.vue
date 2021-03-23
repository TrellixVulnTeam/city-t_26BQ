<template>
    <div class="t-content-settings">
        <div class="info-block">
            <div class="password-set">
                <form>
                    <h1>Смена пароля</h1>
                    <input type="password" name="old" placeholder="Старый пароль">
                    <input type="password" name="new" placeholder="Новый пароль">
                    <input type="password" name="new-repeat" placeholder="Повтор пароля">
                    <button class="light-button" style="margin-top: 20px;">Сменить</button>
                </form>
            </div>
            <div class="right-bar">
              <div class="internet-set">
                <h1>Интернет</h1>
                <div class="select">  
                  <p>{{ getStatus }}</p>
                  <img src="@/assets/img/arrow-down.svg">
                </div>
                <button class="light-button" style="margin-top: 10px;">Изменить</button>
              </div>
              <div class="tarif-set">
                <h1>Смена тарифа</h1>
                <div class="select">  
                  <p>{{ getTarif }}</p>
                  <img src="@/assets/img/arrow-down.svg">
                </div>
                <button class="dark-button" style="margin-top: 10px;">Изменить</button>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'cp',
    created() {
        this.$nuxt.$emit('profile-change-page-headline', 'Настройки');
    },
    computed:{
      getTarif(){
        return this.$store.state.data.userDataArray.tarif.tarif;
      },
      getStatus(){
        if (this.$store.state.data.userDataArray.status === true){
            return 'Включен';
        }
        if (this.$store.state.data.userDataArray.status === false){
            return 'Выключен';
        }
      }
    }
}
</script>

<style lang="scss">
.t-content-settings{
    width: 100%;
    margin-top: 20px;

    .info-block{
      border-radius: 5px;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: flex-start;
      
      flex-wrap: wrap;
      border-radius: 5px;

      .password-set{
          width: calc(50% - 30px);
          padding-right: 30px;

          form{
              width: 100%;

                h1{
                    opacity: 0.5;
                    font-size: 18px;
                }

              input{
                  margin: 0;
                    width: calc(100% - 30px);
                    align-items: center;
                    background: rgba(20, 19, 88, 0.5);
                    border: 1px solid #36378a;
                    font-size: 14px;
                    padding: 0 15px 0 15px;
                    margin-top: 7px;
              }
          }
      }

      .right-bar{
        width: 50%;
        display: flex;
        flex-direction: column;

        .internet-set{
          width: calc(100% - 30px);
          margin-left: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(255,255,255, 0.05);

            h1{
              opacity: 0.5;
              font-size: 18px;
            }

          .select{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            background: rgba(20, 19, 88, 0.5);
            border: 1px solid #36378a;
            border-radius: 5px;
            margin-top: 5px;
            width: calc(100% - 30px);
            cursor: pointer;

            p{
              font-size: 14px;
              margin: 0;
            }

            img{
              height: 10px;
            }
          }
        }

        .tarif-set{
          width: calc(100% - 30px);
          margin-left: 30px;
          padding-top: 20px;
          padding-bottom: 30px;

            h1{
              opacity: 0.5;
              font-size: 18px;
            }

          .select{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px;
            background: rgba(20, 19, 88, 0.5);
            border: 1px solid #36378a;
            border-radius: 5px;
            margin-top: 5px;
            width: calc(100% - 30px);
            cursor: pointer;

            p{
              font-size: 14px;
              margin: 0;
            }

            img{
              height: 10px;
            }
          }
        }
      }

      .light-button{
        background: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
        color: white;
        height: 50px;
        width: 100%;
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
        width: 100%;
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