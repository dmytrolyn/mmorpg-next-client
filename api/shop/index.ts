import ApiInstance from '../';
import * as Response from './types';
import { BasicResponse } from '../types'

class ShopAPI extends ApiInstance {

    constructor() {
        super('/shop');
    }

    getShopItems = () => this.instance.get<Response.ShopItems>('/').then(res => res.data);

    makePurchaseRequest = (id: number) => this.instance.post<BasicResponse>('/buy', { id }).then(res => res.data);
}

const ShopAPIService = new ShopAPI();

export default ShopAPIService;