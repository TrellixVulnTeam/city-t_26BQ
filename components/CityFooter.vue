<template>
    <div class="footer-t">
        <div class="block logo">
            <img class="logo" src="@/assets/img/logo.png" alt="Logo">
        </div>
        <div class="block links">
            <nuxt-link tag="a" to="/home" class="link">Для дома</nuxt-link>
            <nuxt-link tag="a" to="/office" class="link">Для офиса</nuxt-link>
            <nuxt-link tag="a" to="/tv" class="link">Телевиденье</nuxt-link>
            <nuxt-link tag="a" to="/about" class="link">О компании</nuxt-link>
        </div>
        <div class="block contacts">
            <p>+7(496)-644-06-43</p>
            <p>+7(496)-647-46-46</p>
            <p>admin@city-t.ru</p>
        </div>
    </div>
</template>

<style lang="scss">
.footer-t{
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .block{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .logo{
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contacts{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        p{
            font-size: 15px;
            padding: 10px;
            margin: 0;
                
        }
    }

    .links{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        a{
            font-size: 15px;
            padding: 10px;
            border-left: solid #21265e 2px;
        }

        a:hover{
            border-left: solid #f86b64 2px;
        }
    }
}

@media (max-width: 1000px) {
    
}
</style>