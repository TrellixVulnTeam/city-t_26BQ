<template>
    <div class="t">
        <div class="leed-t">
            <h1 style="text-align: center;">Оставить заявку</h1>
            <p style="width: 80%; min-width: 300px; margin-top: 20px;">Подключите высокоскоростной интернет от Сити-телеком. Получите надежный доступ в сеть 24 часа в сутки и качественный сервис!</p>
            <form @submit.prevent="sendFormLeed" style="width: 300px; margin-top: 20px;">
                  <div class="phone">
                      <div class="phone-mask">
                        <p>+7</p>
                      </div>
                      <div class="phone-input">
                        <input placeholder="(999)-999-99-99" type="number">
                      </div>
                  </div>
                  <button>Подключить</button>
              </form>
        </div>
        <nuxt-link class="background" tag="div" to="/"></nuxt-link>
    </div>
</template>

<script>
export default {
  layout: 'index',
}
</script>

<style lang="scss">

    .t{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;


        .background{
            background: rgba(0,0,0,0.6);
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;

        }

        .leed-t{
            position: fixed;
            z-index: 3;
            width: 100%;
            max-width: 450px;
            display: flex;
            justify-content: center; 
            align-items: center;
            flex-direction: column;
            background: #21265e;
            border-radius: 10px;
            height: auto;
            padding: 30px;

            h1{
                font-size: 26px;
                font-weight: 500;
                margin: 0;
                
            }

            p{
                font-size: 16px;
                margin-top: 10px;
                opacity: 0.8;
                text-align: center;
            }

            form{
            

            .phone{
              width: 100%;
              display: flex;
              justify-content: space-between; 
              align-items: center;
              background: rgba(20, 19, 88, 0.5);
              border: 1px solid #36378a;
              height: 50px;
              border-radius: 5px;

              .phone-mask{
                width: 50px;
                padding-left: 10px;
                padding-right: 10px;
                border-right: solid 1px white;

                P{
                  margin: 0;
                  text-align: center;
                }
              }

              .phone-input{
                width: calc(100% - 60px);

                input{
                  border: none;
                  background: none;
                  margin: 0;
                }
              }
            }
          }
        }
    }

    @media (max-width: 1000px) {
        .leed-t{
            width: calc(90% - 60px) !important;
            max-height: 500px;
            overflow-y: scroll;

            p{
                font-size: 14px !important;
            }

            button{
                width: 100% !important;
            }
        }
    }
    
</style>