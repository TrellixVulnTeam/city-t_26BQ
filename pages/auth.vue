<template>
    <div class="t">
        <div class="auth">
            <h1 style="text-align: center;">Личный кабинет</h1>
            <form @submit.prevent="sendFormLeed" style="width: 300px; margin-top: 20px;">
                  <div class="input">
                    <input placeholder="Логин" type="number">
                  </div>
                  <div class="input">
                    <input placeholder="Пароль" type="password">
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

        .auth{
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
                margin-top: 30px;
              .input{
                margin-bottom: 5px;

                input{
                    margin: 0;
                    width: calc(100% - 30px);
                    align-items: center;
                    background: rgba(20, 19, 88, 0.5);
                    border: 1px solid #36378a;
                    font-size: 14px;
                    padding: 0 15px 0 15px;
                }
              
            }
          }
        }
    }

    @media (max-width: 1000px) {
        .auth{
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