import bitgetRest from '../bitget.js';
export default class bitget extends bitgetRest {
    describe(): any;
    getWsMarketId(market: any): any;
    getMarketIdFromArg(arg: any): string;
    watchTicker(symbol: any, params?: {}): Promise<any>;
    handleTicker(client: any, message: any): any;
    parseWsTicker(message: any, market?: any): import("../base/types.js").Ticker;
    watchOHLCV(symbol: any, timeframe?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    handleOHLCV(client: any, message: any): void;
    parseWsOHLCV(ohlcv: any, market?: any): number[];
    watchOrderBook(symbol: any, limit?: any, params?: {}): Promise<any>;
    handleOrderBook(client: any, message: any): void;
    handleDelta(bookside: any, delta: any): void;
    handleDeltas(bookside: any, deltas: any): void;
    watchTrades(symbol: any, since?: any, limit?: any, params?: {}): Promise<any>;
    handleTrades(client: any, message: any): void;
    parseWsTrade(trade: any, market?: any): import("../base/types.js").Trade;
    watchOrders(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    handleOrder(client: any, message: any, subscription?: any): void;
    parseWsOrder(order: any, market?: any): any;
    parseWsOrderStatus(status: any): string;
    watchMyTrades(symbol?: string, since?: any, limit?: any, params?: {}): Promise<any>;
    handleMyTrades(client: any, message: any): void;
    parseWsMyTrade(trade: any, market?: any): import("../base/types.js").Trade;
    watchBalance(params?: {}): Promise<any>;
    handleBalance(client: any, message: any): void;
    watchPublic(messageHash: any, args: any, params?: {}): Promise<any>;
    authenticate(params?: {}): any;
    watchPrivate(messageHash: any, subscriptionHash: any, args: any, params?: {}): Promise<any>;
    handleAuthenticate(client: any, message: any): void;
    handleErrorMessage(client: any, message: any): boolean;
    handleMessage(client: any, message: any): void;
    ping(client: any): string;
    handlePong(client: any, message: any): any;
    handleSubscriptionStatus(client: any, message: any): any;
}