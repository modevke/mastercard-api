export interface MerchantInterface{
    proxyServer?: string;
    proxyAuth ?: string
    proxyCurlOption ?: number;
    proxyCurlValue ?: number;
    certificatePath ?: string
    certificateVerifyPeer ?: boolean;
    certificateVerifyHost ?: number;
    gatewayUrl ?: string
    debug ?: boolean;
    version ?: string;
    merchantId ?: string
    password ?: string
    apiUsername ?: string
}


export interface PayInterface{
    card: {
        number: number;
        expiry: {
            month: number;
            year: string
        };
        securityCode: string;
    };
    order: {
        amount: number,
        currency: string,
        reference: string,
        description: string,
        subMerchant: {
            address: {
                company: string,
                country: string,
                city: string,
            },
            email: string,
            phone: string,
            tradingName: string,
            identifier: string
        },
        statementDescriptor: {
            address: {
                company: string,
                country: string,
                city: string
            },
            name: string,
            phone: string,
        }
    };
    transaction: {
        reference: string
    }

}

export interface RefundInterface{
    order:{
        reference: string;
    };
    transaction: {
        reference: string;
        amount: number;
        currency: string;
    }
}
export interface VoidInterface{
    order:{
        reference: string;
    };
    transaction: {
        reference: string;
        targetTransactionId: string;
    }
}

export interface VerifyInterface{
    order:{
        currency: string;
        reference: string;
    };
    transaction: {
        reference: string;
    };
    sourceOfFunds: {
        type: string;
    }
}

export interface FetchOrderInterface{
    order:{
        reference: string;
    };
}

export interface FetchTxnInterface{
    order:{
        reference: string;
    };
    transaction: {
        reference: string;
    };
}