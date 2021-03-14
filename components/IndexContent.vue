<template>
    <div class="container">
        <div class="header">
          <CityHeader />
      </div>
      <section class="main-section">
          <div class="leed">
              <h1>Подключите высокоскоростной интернет от Сити-Телеком</h1>
              <p>Работаем с 2004 года, предоставляем клиентам широкий выбор тарифов, надежный доступ в интернет 24 часа в сутки и качественный сервис! </p>
              <form @submit.prevent="sendFormLeed">
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
          <div class="access">
            <h1>Узнать возможность подключения</h1>
            <div class="select">
              <p>Андропова</p>
              <img src="@/assets/img/arrow-down.svg">
            </div>
            <div class="select">
              <p>16/5</p>
              <img src="@/assets/img/arrow-down.svg">
            </div>
            <button>Проверить</button>
          </div>
      </section>
      <section class="about">
        <div class="blocks">
          <div class="block">
              <img src="@/assets/img/fast.svg">
              <h1>Скорость</h1>
              <p>Высокоскоростной доступ к сети Интернет до 1Гб/с</p>
          </div>
          <div class="block">
              <img src="@/assets/img/tv.svg">
              <h1>Телевиденье</h1>
              <p>Пакет лучших российских и мировых телеканалов</p>
          </div>
          <div class="block">
              <img src="@/assets/img/work.svg">
              <h1>Корпоративные сети</h1>
              <p>Выделенные каналы для корпоративных сетей.</p>
          </div>
          <div class="block">
              <img src="@/assets/img/licensing.svg">
              <h1>Лицензии</h1>
              <p>Сити-телеком имеет все лицензии на услуги.</p>
          </div>
        </div>
      </section>
      <section class="home-internet" id="home-internet">
        <h1>Тарифы для дома</h1>
        <p>Во все тарифы включен IPTV 80 каналов и в некоторые цифровые/аналоговые ТВ каналы, подробности узнавайте по телефону</p>
        <table cellpadding="0">
          <tr>
            <th>Тариф</th>
            <th>Стоимость</th>
            <th>Скорость</th>
            <th>Трафик</th>
          </tr>
          <tr class="dark">
            <td>Спутник-380</td>
            <td>380₽/мес.</td>
            <td>100 Мбит/с</td>
            <td>100 Гб</td>
          </tr>
          <tr>
            <td>Спутник-500</td>
            <td>500₽/мес.</td>
            <td>100 Мбит/с</td>
            <td>300 Гб</td>
          </tr>
          <tr class="dark">
            <td>Полет-380</td>
            <td>380₽/мес.</td>
            <td>25 Мбит/с</td>
            <td>∞ Гб</td>
          </tr>
          <tr>
            <td>Полет-500</td>
            <td>500₽/мес.</td>
            <td>60 Мбит/с</td>
            <td>∞ Гб</td>
          </tr>
          <tr class="dark">
            <td>Полет-600</td>
            <td>600₽/мес.</td>
            <td>80 Мбит/с</td>
            <td>∞ Гб</td>
          </tr>
          <tr>
            <td>Полет-700</td>
            <td>700₽/мес.</td>
            <td>100 Мбит/с</td>
            <td>∞ Гб</td>
          </tr>
          <tr class="dark">
            <td>Полет-1200</td>
            <td>1200₽/мес.</td>
            <td>200 Мбит/с</td>
            <td>∞ Гб</td>
          </tr>
        </table>
        <nuxt-link tag="button" to="/leed">Подключить</nuxt-link>
      </section>
      <div class="footer">
        <CityFooter />
      </div>
    </div>
</template>

<style lang="scss">
.container{
    width: 95%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .header{
      width: 100%;
      height: 60px;
      padding-top: 20px;
    }

    .footer{
      width: 100%;
      margin-top: 200px;
      border-top: 3px solid rgba(255,255,255,0.1);
      max-width: 850px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .main-section{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 200px;

      .access{
        max-width: 350px;
        width: 30%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        h1{
          font-size: 30px;
          font-weight: 500;
          margin-bottom: 30px;
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
          max-width: 250px;
          width: 100%;
          cursor: pointer;

          p{
            font-size: 14px;
            margin: 0;
          }

          img{
            height: 10px;
          }
        }

        button{
          max-width: 250px;
          width: 100%;
        }
      }

      .leed{
          max-width: 600px;
          width: 60%;

          form{
            width: 300px;
            margin-top: 50px;

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

          h1{
              font-size: 30px;
              font-weight: 500;
          }

          p{
            font-size: 18px;
            margin-top: 10px;
            opacity: 0.8;
          }
      }
    }

    .home-internet{
      width: 100%;
      display: flex;
      justify-content: left; 
      align-items: left;
      flex-direction: column;
      padding-top: 200px;

      table{
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        width: 85%;
        margin-top: 30px;
        border-spacing: 0px;
        border-collapse: collapse;

        .dark{
          background: rgba(0,0,0,0.05);
        }

        tr{
          margin: 0;
          border: none;
        }

        th{
          padding-top: 20px;
          padding-bottom: 20px;
          color: #fa5293;
          font-size: 20px;
          margin: 0;
          border: none;
        }

        td{
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 16px;
          font-weight: 500;
          padding-left: 10px;
          margin: 0;
          border: none;
        }
      }

      button{
        width: 300px;
        margin-top: 50px;
      }

      h1{
        font-size: 30px;
        font-weight: 500;
        
      }

      p{
        font-size: 18px;
        margin-top: 10px;
        opacity: 0.8;
      }
    }

    .home-work{
      width: 100%;
      display: flex;
      justify-content: left; 
      align-items: left;
      flex-direction: column;
      padding-top: 200px;

      table{
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        width: 85%;
        margin-top: 30px;
        border-spacing: 0px;
        border-collapse: collapse;

        .dark{
          background: rgba(0,0,0,0.05);
        }

        tr{
          margin: 0;
          border: none;
        }

        th{
          padding-top: 20px;
          padding-bottom: 20px;
          color: #fa5293;
          font-size: 20px;
          margin: 0;
          border: none;
        }

        td{
          padding-top: 20px;
          padding-bottom: 20px;
          font-size: 16px;
          font-weight: 500;
          padding-left: 10px;
          margin: 0;
          border: none;
        }
      }

      button{
        width: 300px;
        margin-top: 50px;
      }

      h1{
        font-size: 30px;
        font-weight: 500;
        
      }

      p{
        font-size: 18px;
        margin-top: 10px;
        opacity: 0.8;
      }
    }

    .about{
      width: 100%;
      display: flex;
      justify-content: left; 
      align-items: left;
      flex-direction: column;
      padding-top: 200px;

      h1{
        font-size: 30px;
        font-weight: 500;
        
      }

      p{
        font-size: 18px;
        margin-top: 10px;
        opacity: 0.8;
      }

      .blocks{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .block{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 23%;
          padding: 15px;
          border-radius: 5px;

          img{
            height: 50px;
            margin-top: 30px;
            margin-bottom: 20px;
          }

          h1{
            margin: 0;
            font-size: 20px;
          }

          p{
            margin: 0;
            font-size: 14px;
            text-align: center;
            margin-top: 10px;
          }
        }
      }
    }
  }


  @media (max-width: 1000px) {
      .main-section {
          flex-direction: column;
          justify-content: center !important;
          align-items: center !important;
          padding-top: 50px !important;
          width: 95% !important;


          .access{
              padding-top: 50px !important;
              width: 100% !important;
              max-width: 450px !important;
              
              h1{
                font-size: 22px !important;
                margin-bottom: 20px !important;
              }

              p{
                font-size: 14px !important;
              }

              .select{
                width: calc(100% - 30px) !important;
                max-width: 100% !important;
              }

              button{
                width: 100% !important;
                max-width: 100% !important;
              }
          }

          .leed{
              width: 100% !important;
              max-width: 450px !important;

              form{
                margin-top: 25px !important;
                width: 100% !important;
              }

              h1{
                font-size: 22px !important;
              }

              p{
                font-size: 14px !important;
              }
          }
      }

      .about {
        width: 90% !important;
        padding-top: 50px !important;
        max-width: 450px;
        .blocks{
          flex-direction: column;
          .block{
            width: 100% !important;
          }
       }
      }

      .home-internet{
        width: 90% !important;
        padding-top: 50px !important;
        max-width: 450px;

        h1{
          font-size: 22px !important;
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