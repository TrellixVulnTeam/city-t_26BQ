<template>
    <div class="t">
        <nuxt-link class="background" tag="div" to="/"></nuxt-link>
        <div class="tv">
            <h1>Подключение к СКТВ</h1>
            <p>В пакете более 100 самых рейтинговых российских и зарубежных телеканалов, в т.ч. десятки цифровых и HD телеканалов. Если у Вас в квартире несколько телевизоров, то за одну абонентскую плату Вы сможете смотреть на каждом телевизоре разные телеканалы одновременно.</p>
            <p>Для просмотра цифрового пакета телеканалов Ваш телевизор должен поддерживать формат кабельного цифрового телевизионного вещания «DVB-C/MPEG 4».</p>
            <table cellpadding="0">
                    <tr>
                        <th>Условие</th>
                        <th>Цена</th>
                        <th>Кол-во каналов</th>
                    </tr>
                    <tr>
                        <td>Физичиское лицо</td>
                        <td>220₽/мес.</td>
                        <td>100 каналов</td>
                    </tr>
                    <tr>
                        <td>Юридическое лицо</td>
                        <td>500₽/мес.</td>
                        <td>100 каналов</td>
                    </tr>
            </table>
            <div class="button">
                <nuxt-link tag="button" to="/leed" >Подключить</nuxt-link>
            </div>
        </div>
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

        .tv{
            position: fixed;
            z-index: 3;
            width: 100%;
            max-width: 950px;
            display: flex;
            justify-content: left; 
            align-items: left;
            flex-direction: column;
            background: #21265e;
            border-radius: 10px;
            height: auto;
            padding: 30px;

            button{
                width: 300px;
                margin-top: 50px;
            }

            h1{
                font-size: 26px;
                font-weight: 500;
                margin: 0;
            }

            p{
                font-size: 16px;
                margin-top: 15px;
                opacity: 0.8;
            }
        }
    }


    @media (max-width: 1000px) {
    .tv{
        width: calc(90% - 60px) !important;
        max-height: 500px;
        overflow-y: scroll;

            h1{
                text-align: center;
            }

            p{
                font-size: 14px !important;
            }

            button{
                width: 100% !important;
            }

            table{
          width: 100% !important;

          tr{
            td:last-child{
              display: none !important;
            }

            th:last-child{
              display: none !important;
            }

            td{
              font-size: 13px !important;
              text-align: center;
              padding: 10px;
            }

            th{
              font-size: 15px !important;
              text-align: center;
              padding: 10px;
            }
          }
        }
    }
}
    
</style>