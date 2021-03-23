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
        <nuxt-link tag="a" to="/auth" class="lc">Войти</nuxt-link>
        <img class="menu-m" src="@/assets/img/menu.svg" alt="Menu" @click="changeViewMenu()">

        <div class="background" :class="{ viewBack: getViewMenu }" @click="changeViewMenu()"></div>
        <div class="hidden-menu" :class="{ viewMenu: getViewMenu }">
            <nuxt-link tag="a" to="/home" class="link-m">Для дома</nuxt-link>
            <nuxt-link tag="a" to="/office" class="link-m">Для офиса</nuxt-link>
            <nuxt-link tag="a" to="/tv" class="link-m">Телевиденье</nuxt-link>
            <nuxt-link tag="a" to="/about" class="link-m">О компании</nuxt-link>
            <nuxt-link tag="a" to="/auth" class="lc-m">Войти</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            viewMenu: false
        }
    },
    computed:{
        getViewMenu(){
            return this.viewMenu;
        }
    },
    methods:{
        changeViewMenu(){
            this.viewMenu = !this.viewMenu;
        }
    }
}
</script>


<style lang="scss">
    .header{
      width: 100%;
      height: 80px;
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

      .background{
          opacity: 0;
          position: fixed;
          width: 100%;
          height: calc(100% - 80px);
          top: 80px;
          left: 0;
          z-index: 5;
          transition: 0.3s;
          background: black;
          display: none;
      }

      .viewBack{
          opacity: 0.5;
          transition: 0.3s;
          display: block !important;
      }

      .viewMenu{
          left: 0 !important;
          transition: 0.3s;
      }

      .hidden-menu{
          position: fixed;
          left: 100%;
          top: 80px;
          width: 100%;
          transition: 0.3s;
          z-index: 6;

          .link-m{
                display: flex;
                justify-content: flex-end; 
                padding: 20px;
                font-size: 12px;
                background: #21265e;
                border-top: 1px solid rgba(255,255,255,0.4)
          }

          .lc-m{
              display: flex;
                justify-content: flex-end; 
                padding: 20px;
                font-size: 12px;
                background: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
          }
      }
    }

    @media (max-width: 1000px) {

        .header{
            position: fixed;
            top: 0;
            left: 0;
            width: 95% !important;
            z-index: 6;
            background: #21265e;
        }

        .links {
            display: none !important;
        }

        .lc{
            display: none !important;
        }

        .logo{
            height: 40px !important;
        }

        .menu-m{
            height: 40px !important;
            margin-right: 10px;
            display: block !important;
        }
    }
</style>