import { PayInterface, RefundInterface, VoidInterface, VerifyInterface, FetchOrderInterface, FetchTxnInterface } from "./interfaces";
import { Merchant } from "./Merchant";
import reqmaker from "./reqmaker";

export class Mastercard {

    public gatewayUrl: string;
    public version: string;
    public url: string;
    public headers = {
        'Content-Type': 'Application/json;charset=UTF-8',
        'Authorization': ''
    };

    constructor(merchant: Merchant) {
        this.gatewayUrl = merchant.getGatewayUrl();
        this.version = merchant.getVersion();
        this.url = merchant.getGatewayUrl() + `/version/${merchant.getVersion()}/merchant/${merchant.getMerchantId()}`;
        this.headers.Authorization = `Basic ${Buffer.from(merchant.getApiUsername() + ':' + merchant.getpassword()).toString('base64')}`

    }

    async checkConnectivity() {

        let connectivity;
        try{

            connectivity = await reqmaker(
                `${this.gatewayUrl}/version/${this.version}/information`,
                'GET'
            ); 

        }catch(e){
            return e;
        }

        return connectivity;
    }

    async pay(data: PayInterface) {

        let pay;
        try{

            pay = await reqmaker(
                `${this.url}/order/${data.order.reference}/transaction/${data.transaction.reference}`,
                'PUT',
                {
                    apiOperation: 'PAY',
                    sourceOfFunds: {
                        type: 'CARD',
                        provided: {
                            card: data.card
                        }
                    },
                    order: data.order,
                    transaction: data.transaction
                },
                this.headers

            ); 

        }catch(e){
            return e;
        }

        return pay;

    }

    async refund(data: RefundInterface){
        let refund;
        try{
            refund = await reqmaker(
                `${this.url}/order/${data.order.reference}/transaction/${data.transaction.reference}`,
                'PUT',
                {
                    apiOperation: 'REFUND',
                    transaction: data.transaction
                },
                this.headers
            )
        } catch(e){
            return e
        }

        return refund;
    }

    async voidTxn(data: VoidInterface){
        let voidTxn;
        try{
            voidTxn = await reqmaker(
                `${this.url}/order/${data.order.reference}/transaction/${data.transaction.reference}`,
                'PUT',
                {
                    apiOperation: 'VOID',
                    transaction: data.transaction
                },
                this.headers
            )
        }catch(e){
            return e
        }

        return voidTxn
    }

    async verifyTxn(data: VerifyInterface){
        let verifyTxn;
        try{
            verifyTxn = await reqmaker(
                `${this.url}/order/${data.order.reference}/transaction/${data.transaction.reference}`,
                'PUT',
                {
                    apiOperation: 'VERIFY',
                    order: {
                        currency: data.order.currency
                    },
                    sourceOfFunds: {
                        type: 'CARD'
                    }
                },
                this.headers
            )
        }catch(e){
            return e
        }

        return verifyTxn
    }

    async retieveOrder(data: FetchOrderInterface){
        let order;
        try{
            order = await reqmaker(
                `${this.url}/order/${data.order.reference}`,
                'GET',
                '',
                this.headers
            )
        }catch(e){
            return e
        }

        return order
    }

    async retieveTransaction(data: FetchTxnInterface){
        let order;
        try{
            order = await reqmaker(
                `${this.url}/order/${data.order.reference}/transaction/${data.transaction.reference}`,
                'GET',
                '',
                this.headers
            )
        }catch(e){
            return e
        }

        return order
    }



}