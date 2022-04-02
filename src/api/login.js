import request from '@/api/request';

// 账号密码登录
export function logIn(data) {
	return request({
	    url: 'auth/login',
	    method: 'post',
	    data
	  })
}


