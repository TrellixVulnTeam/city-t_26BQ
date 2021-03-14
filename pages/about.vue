<template>
    <div class="t">
        <nuxt-link class="background" tag="div" to="/"></nuxt-link>
        <div class="about-t">
            <h1>О компании</h1>
            <p>Компания Сити-Телеком создана в 2004 году.</p>
            <p>Основное направление деятельности Сити-Телеком - развертывание сетей широкополосного доступа в г. Ступино Московской области по технологии FTTB и предоставление на их основе телекоммуникационных услуг для населения, государственных и коммерческих структур.</p>
            <p>Сити-Телеком владеет транспортной сетью в Ступино на базе волоконно-оптических линий связи протяженностью более 200 км с пропускной способностью до 1 Гбит/с.</p>
            <p>Сити-Телеком сегодня - это:</p>
            <ul>
                <li>Высокоскоростной доступ к сети Интернет и передача данных с использованием высокоскоростного выделенного канала связи для юридических и физических лиц.</li>
                <li>Пакет лучших российских и мировых телеканалов с возможностью просмотра разных телеканалов на всех телевизорах вашего дома без дополнительного оборудования.</li>
                <li>Организация выделенных каналов передачи данных для построения корпоративной сети клиента.</li>
                <li>Сити-телеком имеет все необходимые лицензии и разрешительные документы на соответствующие услуги.</li>
            </ul>
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

        .about-t{
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
                margin: 0;
                margin-top: 20px;
                opacity: 0.8;
            }

            ul{
                margin-top: 5px;
                padding-left: 15px;
                list-style-type: decimal !important;
                
                li{
                    margin:0;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    opacity: 0.8;
                    font-size: 14px;
                    width: 70%;
                    font-weight: 500;
                    font-family: 'Montserrat', sans-serif;
                    color: white;
                }
            }
        }
    }

    @media (max-width: 1000px) {
    .about-t{
        width: calc(90% - 60px) !important;
        max-height: 500px;
        overflow-y: scroll;
        padding-bottom: 20px !important;

            h1{
                text-align: center;
            }

            p{
                font-size: 14px !important;
            }

            li{
                width: 100% !important;
                font-size: 13px !important;
            }

            button{
                width: 100% !important;
            }
    }
}
    
</style>