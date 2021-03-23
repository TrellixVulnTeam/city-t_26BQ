export const state = () => ({
    // Отчистить массивы после указания get-запросов

    userDataArray: {
        id: "09051",
        balance: 119,
        status: true,
        blocked: false,
        address: 'Куйбышева, 24, кв. 21',
        IP: '172.18.38.149',
        MAC: '34:08:04:12:e3:e7',
        registrationDate: '04.05.2018',
        tarif: {
            tarif: 'Полет-500',
            monthPay: 500,
            internetSpeed: 60,
            traffic: 'infinity',
            trafficUsed: 200
        },
        name:{
            firstName: 'Наталья',
            lastName: 'Шадрина',
            patronymic: 'Геннадьевна'
        }
    },

    paymentArray: [
        {
            id: 1,
            date: '12.01.2021',
            way: 'Обещаный платёж',
            sum: 166,
            comment: 'Обещанный платеж. Истекает 12-02-2021 в 00:00'
        },{
            id: 2,
            date: '23.01.2021',
            way: 'Wire transfer',
            sum: 500,
            comment: 'Платеж по банковской карте (2021-01-23 10:25:35)'
        },{
            id: 3,
            date: '14.03.2021',
            way: 'Обещаный платёж',
            sum: 166,
            comment: 'Обещанный платеж. Истекает 14-04-2021 в 00:00'
        },{
            id: 4,
            date: '12.02.2021',
            way: 'Wire transfer',
            sum: 14,
            comment: 'Платеж по банковской карте (2021-02-12 09:19:56)'
        },{
            id: 5,
            date: '12.02.2021',
            way: 'Wire transfer',
            sum: 500,
            comment: 'Платеж по банковской карте (2021-02-12 09:19:56)'
        },
    ],

    ticketsArray: [
        {
            id: 1,
            date: '12.01.2021',
            name: 'Тема пробемы',
            message: 'Тело сообщения, проблема заключается в том, что у меня не работает интернет',
            status: false
        },{
            id: 2,
            date: '13.01.2021',
            name: 'Тема пробемы',
            message: 'Тело сообщения, проблема заключается в том, что у меня не работает интернет',
            status: true
        },{
            id: 3,
            date: '14.01.2021',
            name: 'Тема пробемы',
            message: 'Тело сообщения, проблема заключается в том, что у меня не работает интернет',
            status: false
        },{
            id: 4,
            date: '15.01.2021',
            name: 'Тема пробемы',
            message: 'Тело сообщения, проблема заключается в том, что у меня не работает интернет',
            status: true
        },{
            id: 5,
            date: '16.01.2021',
            name: 'Тема пробемы',
            message: 'Тело сообщения, проблема заключается в том, что у меня не работает интернет',
            status: false
        },
    ]
})

export const mutations = {
    userDataUpdate(state, array) {
        state.userDataArray = array;
    }
}

export const actions = {
    async userDataFetch({commit}){
        let token = this.$cookies.get("token");
        const data = this.$axios.$get('path://user.data?token=' + token);
        if(data.result == 'success'){
            commit('userDataUpdate', data.userData);
        }
    }
} 