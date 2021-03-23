<template>
    <div class="container">
        <div class="main">
            <div class="header">
                <img class="logo" src="@/assets/img/logo.png" alt="Logo">
                <div class="user" @mouseover="chengeExitView()" @mouseleave="chengeExitView()" :class="{hover: exitView}">

                    <div class="name" @mouseover="chengeExitView()" @mouseleave="chengeExitView()"><p>{{ getName }}</p></div>
                    <div class="icon" @mouseover="chengeExitView()" @mouseleave="chengeExitView()">
                        <img src="@/assets/img/profile.svg" @mouseover="chengeExitView()" @mouseleave="chengeExitView()">
                    </div>
                </div>
                <div class="exit" @mouseover="chengeExitView()" @mouseleave="chengeExitView()" :class="{hover: exitView}">
                    <p @mouseover="chengeExitView()" @mouseleave="chengeExitView()">Выход</p>
                </div>
            </div>
            <div class="content">
                <div class="transition">
                    <transition name="change-title" @after-leave="animationEnded">
                        <h1 class="title"
                            v-if="pageHeadline !== '__PAGE_HEADLINE__'"
                            v-html="pageHeadline"
                            v-bind:key="pageHeadline"></h1>
                    </transition>
                </div>
                <nav>
                    <nuxt-link tag="div" to="/cp" class="nav-block">
                        <p>Профиль</p>
                        <div class="line"></div>
                    </nuxt-link>
                    <nuxt-link tag="div" to="/cp/pay" class="nav-block">
                        <p>Платежи</p>
                        <div class="line"></div>
                    </nuxt-link>
                    <nuxt-link tag="div" to="/cp/settings" class="nav-block">
                        <p>Настройки</p>
                        <div class="line"></div>
                    </nuxt-link>
                    <nuxt-link tag="div" to="/cp/support" class="nav-block">
                        <p>Поддержка</p>
                        <div class="line"></div>
                    </nuxt-link>
                </nav>
                <div class="page">
                    <Nuxt />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cp",
        computed:{
            getName(){
                let firstName = this.$store.state.data.userDataArray.name.firstName.substr(0, 1);
                let lastName = this.$store.state.data.userDataArray.name.lastName;
                let patronymic = this.$store.state.data.userDataArray.name.patronymic.substr(0, 1);
                return lastName + " " + firstName + ". " + patronymic + ".";
            },
            exitView(){
                return this.exitViewVar
            }
        },
        created() {
            this.$nuxt.$on('profile-change-page-headline', this.changePageHeadline);
        },
        methods: {
            changePageHeadline(headline) {
                this.pageHeadline = headline;
                this.animated = false;
            },
            animationEnded() {
                // this.animated = true;
            },
            chengeExitView(){
                this.exitViewVar = !this.exitViewVar;
            },
        },
        data: () => ({
            pageHeadline: '__PAGE_HEADLINE__',
            oldPageHeadline: '',
            animated: true,
            exitViewVar: false
        })
    }
</script>

<style lang="scss">
    .container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .main{
            width: 95%;
            max-width: 1000px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .header{
                width: 100%;
                height: 80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;

                .logo{
                    height: 40px;
                    margin: 10px;
                }

                .user{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 5px;
                    transition: 0.3s;
                    height: 65px;
                    padding-left: 30px;
                    padding-right: 30px;

                    .name{
                        padding-right: 15px;

                        p{
                            font-size: 15px;
                            font-weight: 600;
                        }
                    }

                    .icon{
                        border-radius: 100px;
                        width: 50px;
                        height: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        img{
                            width: 50px;
                            height: 50px;
                        }
                    }
                }

                .exit{
                    opacity: 0;
                    transition: 0.3s;
                    position: absolute;
                    top: 80px;
                    right: calc((100% - 1000px)/2);
                    width: 179.45px;
                    padding: 10px 30px 10px 30px;
                    font-size: 15px;
                    font-weight: 600;
                }

                .hover{
                    background: rgba(0,0,0,0.1);
                    opacity: 1;
                    transition: 0.3s;
                }
            }

            .content{
                max-width: 800px;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin-top: 150px;

                .transition{
                    position: relative;
                    height: 70px;
                    width: 300px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    h1{
                        font-size: 25px;
                        position: absolute;
                        
                    }

                    .change-title-enter-active {
                        position: absolute;
                        animation: put-in .3s ease-out;
                    }

                    .change-title-leave-active {
                        position: absolute;
                        animation: put-out .3s ease-out;
                    }

                    @keyframes put-in {
                        0% {
                        top: -35px;
                        opacity: 0;
                        }

                        50% {
                        opacity: 0;
                        }

                        100% {
                        top: 0;
                        opacity: 1;
                        }
                    }

                    @keyframes put-out {
                        0% {
                        top: 0;
                        }

                        50% {
                        opacity: 1;
                        }

                        100% {
                        top: 35px;
                        opacity: 0;
                        }
                    }
                }

                nav{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 50px;
                    border-bottom: 1px solid rgba(255,255,255,0.1);

                    .nuxt-link-exact-active{

                        .line{
                            background: linear-gradient(270deg, #fa5293 0, #f86b64 100%);
                            box-shadow: 0 -22px 75px rgba(238, 54, 43, 0.99),
                            0 -9.19107px 31.3332px rgba(238, 54, 43, 0.797109),
                            0 -4.91399px 16.7522px rgba(238, 54, 43, 0.653672),
                            0 -2.75474px 9.39116px rgba(238, 54, 43, 0.565864),
                            0 -1.46302px 4.98758px rgba(238, 54, 43, 0.530772),
                            0 -0.6088px 2.07544px rgba(238, 54, 43, 0.485068);
                            width: 100%;
                            height: 2px;
                        }

                        p{
                            opacity: 1 !important;
                        }
                    }

                    .nav-block{
                        min-width: 20%;

                        p{
                            font-size: 17px;
                            font-weight: 600;
                            opacity: 0.5;
                            cursor: pointer;
                            transition: 0.4s;
                            text-align: center;
                        }
                    }

                    .nav-block:hover{
                        p{
                            opacity: 1;
                            transition: 0.4s;
                        }
                    }
                }

                .page{
                    width: 100%;
                }
            }
        }
    }
</style>
