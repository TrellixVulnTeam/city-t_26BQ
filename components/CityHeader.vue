<template>
    <div class="header">
        <img class="logo" src="@/assets/img/logo.png" alt="Logo">
        <div class="menu">
            <div class="links">
                <nuxt-link tag="a" to="/home" class="link">Для дома</nuxt-link>
                <nuxt-link tag="a" to="/office" class="link">Для офиса</nuxt-link>
                <nuxt-link tag="a" to="/tv" class="link">Телевиденье</nuxt-link>
                <nuxt-link tag="a" to="/about" class="link">О компании</nuxt-link>
            </div>
        </div>
        <nuxt-link tag="a" to="/tarifs" class="lc">Войти</nuxt-link>
        <img class="menu-m" src="@/assets/img/menu.svg" alt="Menu">
    </div>
</template>

<style lang="scss">
    .header{
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo{
        height: 40px;
        margin: 10px;
      }

      .lc{
        background: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
        border-radius: 100px;
        padding-left: 40px;
        padding-right: 40px;
        height: 45px;
        font-size: 14px;
        font-weight: 500;

        display: flex;
        align-items: center;
    }

        .menu-m{
            display: none;
        }

      .menu{
          height: 60px;

          .links{
             display: flex;
             justify-content: space-between; 
             align-items: center;
             height: 60px;

             .link{
                 font-size: 14px;
                 font-weight: 500;
                 padding-left: 30px;
                 padding-right: 30px;
                 padding-top: 23px;
                 padding-bottom: 23px;
             }

             .link:hover{
                 padding-bottom: 21px;
                 border-bottom: solid #f86b64 2px;

             }
          }
      }
    }

    @media (max-width: 1000px) {
        .links {
            display: none !important;
        }

        .lc{
            display: none !important;
        }

        .logo{
            height: 40px !important;
        }

        .menu{
            height: 40px !important;
            margin-right: 10px;
        }
    }
</style>