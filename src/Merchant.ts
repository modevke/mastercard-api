import { MerchantInterface } from "./interfaces";

export class Merchant {

    private proxyServer = "";
    private proxyAuth = "";
    private proxyCurlOption = 0;
    private proxyCurlValue = 0;
    private certificatePath = "";
    private certificateVerifyPeer = false;
    private certificateVerifyHost = 0;
    private gatewayUrl = "";
    private debug = false;
    private version = "0";
    private merchantId = "";
    private password = "";
    private apiUsername = "";

    constructor(configArray: MerchantInterface) {
        if ('proxyServer' in configArray) {
            this.proxyServer = configArray.proxyServer;
        }
        if ('proxyAuth' in configArray) {
            this.proxyAuth = configArray.proxyAuth;
        }
        if ('proxyCurlOption' in configArray) {
            this.proxyCurlOption = configArray.proxyCurlOption;
        }
        if ('proxyCurlValue' in configArray) {
            this.proxyCurlValue = configArray.proxyCurlValue;
        }
        if ('certificatePath' in configArray) {
            this.certificatePath = configArray.certificatePath;
        }
        if ('certificateVerifyPeer' in configArray) {
            this.certificateVerifyPeer = configArray.certificateVerifyPeer;
        }
        if ('certificateVerifyHost' in configArray) {
            this.certificateVerifyHost = configArray.certificateVerifyHost;
        }
        if ('gatewayUrl' in configArray) {
            this.gatewayUrl = configArray.gatewayUrl;
        }
        if ('debug' in configArray) {
            this.debug = configArray.debug;
        }
        if ('version' in configArray) {
            this.version = configArray.version;
        }
        if ('merchantId' in configArray) {
            this.merchantId = configArray.merchantId;
        }
        if ('password' in configArray) {
            this.password = configArray.password;
        }
        if ('apiUsername' in configArray) {
            this.apiUsername = configArray.apiUsername;
        }
    }

    getProxyServer() { return this.proxyServer; }
    getProxyAuth() { return this.proxyAuth; }
    getProxyCurlOption() { return this.proxyCurlOption; }
    getProxyCurlValue() { return this.proxyCurlValue; }
    getCertificatePath() { return this.certificatePath; }
    getCertificateVerifyPeer() { return this.certificateVerifyPeer; }
    getCertificateVerifyHost() { return this.certificateVerifyHost; }
    getGatewayUrl() { return this.gatewayUrl; }
    getDebug() { return this.debug; }
    getVersion() { return this.version; }
    getMerchantId() { return this.merchantId; }
    getpassword() { return this.password; }
    getApiUsername() { return this.apiUsername; }
    setProxyServer(newproxyServer) { this.proxyServer = newproxyServer; }
    setProxyAuth(newproxyAuth) { this.proxyAuth = newproxyAuth; }
    setProxyCurlOption(newproxyCurlOption) { this.proxyCurlOption = newproxyCurlOption; }
    setProxyCurlValue(newproxyCurlValue) { this.proxyCurlValue = newproxyCurlValue; }
    setCertificatePath(newcertificatePath) { this.certificatePath = newcertificatePath; }
    setCertificateVerifyPeer(newcertificateVerifyPeer) { this.certificateVerifyPeer = newcertificateVerifyPeer; }
    setCertificateVerifyHost(newcertificateVerifyHost) { this.certificateVerifyHost = newcertificateVerifyHost; }
    setGatewayUrl(newgatewayUrl) { this.gatewayUrl = newgatewayUrl; }
    setDebug(newdebug) { this.debug = newdebug; }
    setVersion(newversion) { this.version = newversion; }
    setMerchantId(newmerchantId) { this.merchantId = newmerchantId; }
    setpassword(newpassword) { this.password = newpassword; }
    setApiUsername(newapiUsername) { this.apiUsername = newapiUsername; }

}