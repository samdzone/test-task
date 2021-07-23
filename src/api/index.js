export default class Api {
    static login (email, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let users = localStorage.getItem('users');
                if (!users) {
                    return reject({'status_code': 403, data: {'success': false, msg: 'Неверный email или пароль.'}});
                }
                users = JSON.parse(users);
                let user = users.find((user) => user.email === email && user.password === password);
                if (!user) {
                    return reject({'status_code': 403, data: {'success': false, msg: 'Неверный email или пароль.'}});
                }
                return resolve({'status_code': 200, data: {'success': true, msg:'', 'username': user.username, 'access_token': 'secret'}});
            },500)
        })
    }

    static registration (email, username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let users = localStorage.getItem('users');
                if (!users) {
                    users = [];
                } else {
                    users = JSON.parse(users);
                    let user = users.find((user) => user.email === email);
                    if (user) {
                        return reject({'status_code': 404, data: {'success': false, 'msg': 'Такой пользователь уже зарегистрирован.'}});
                    }
                }
                users.push({'email': email, 'username': username, 'password':password});
                localStorage.setItem('users', JSON.stringify(users))
                return resolve({'status_code': 200, data: {'success': true, 'msg': ''}});
            },500)
        })
    }

    static logout () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({'status_code': 200, data: {'success': true, 'msg': ''}})
            },500)
        })
    }


}