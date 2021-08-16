import ApiInstance from '../';
import { BasicResponse } from '../types'
import * as Response from './types'

class AuthAPI extends ApiInstance {

    constructor() {
        super('/auth');
    }

    makeLoginRequest = async (payload : { login: string, password: string }) => this.instance.post<BasicResponse>('/login', payload).then(resp => resp.data);

    getUserRequest = async () => this.instance.get<Response.AuthorizedUser>(`/me`).then(resp => resp.data);

    makeRegisterRequest = async (payload: { login: string, pass: string, pass2: string }) => this.instance.post<BasicResponse>('/register', payload).then(resp => resp.data);

    changePasswordRequest = async (payload: { old: string, new: string, repeat: string }) => this.instance.post<BasicResponse>('/change', payload).then(resp => resp.data);
}

const AuthAPIService = new AuthAPI();

export default AuthAPIService;