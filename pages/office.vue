<template>
    <div class="t">
        <nuxt-link class="background" tag="div" to="/"></nuxt-link>
            <div class="office-internet">
                <h1>Тарифы для офиса</h1>
                <p>Тарифы для юридических лиц. Если нужного предложения нет в списке, мы рассмотрим предложение индивидуально</p>
                <table cellpadding="0">
                    <tr>
                        <th>Тариф</th>
                        <th>Стоимость</th>
                        <th>Скорость</th>
                        <th>Трафик</th>
                    </tr>
                    <tr class="dark">
                        <td>Сити-Деловой 2400/26</td>
                        <td>2400₽/мес.</td>
                        <td>100 Мбит/с</td>
                        <td>26 Гб</td>
                    </tr>
                    <tr>
                        <td>Сити-Деловой 3000/32</td>
                        <td>3000₽/мес.</td>
                        <td>100 Мбит/с</td>
                        <td>32 Гб</td>
                    </tr>
                    <tr class="dark">
                        <td>Сити-Деловой 4000/50</td>
                        <td>4000₽/мес.</td>
                        <td>100 Мбит/с</td>
                        <td>50 Гб</td>
                    </tr>
                    <tr>
                        <td>Сити-Деловой 6000/100</td>
                        <td>6000₽/мес.</td>
                        <td>100 Мбит/с</td>
                        <td>100 Гб</td>
                    </tr>
                    <tr class="dark">
                        <td>Сити-Деловой - 6</td>
                        <td>2500₽/мес.</td>
                        <td>6 Мбит/с</td>
                        <td>∞ Гб</td>
                    </tr>
                    <tr>
                        <td>Сити-Деловой - 8</td>
                        <td>4000₽/мес.</td>
                        <td>8 Мбит/с</td>
                        <td>∞ Гб</td>
                    </tr>
                    <tr class="dark">
                        <td>Сити-Деловой - 10</td>
                        <td>4500₽/мес.</td>
                        <td>10 Мбит/с</td>
                        <td>∞ Гб</td>
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

        .office-internet{
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
                margin-top: 30px;
            }

            h1{
                font-size: 26px;
                font-weight: 500;
                margin: 0;
            }

            p{
                font-size: 16px;
                margin-top: 10px;
                opacity: 0.8;
            }
        }
    }
    
    @media (max-width: 1000px) {
        .office-internet{
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
                    td:first-child{
                    display: none !important;
                    }

                    th:first-child{
                    display: none !important;
                    }

                    td{
                    font-size: 13px !important;
                    text-align: center;
                    padding: 13px !important;
                    }

                    th{
                    font-size: 15px !important;
                    text-align: center;
                    padding: 13px !important;
                    }
                }
            }
        }
    }
</style>