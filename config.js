const debug = process.env.NODE_ENV !== 'production';

export const BASE_PATH = debug ? 'http://localhost:8080/hawxwap/' : 'http://haydwx.com/hawxwap/';
export const TO_URL = debug ? 'http://localhost:8081' : 'http://haydwx.com/mocha/index.html';

export const LOGIN_URL = 'http://haydwx.com/hawxwap/login/toLogin.do?toUrl='