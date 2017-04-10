var config = {};

// Configuration of the LWTM2M Server
//--------------------------------------------------
config.server = {
    port: 5684,                         // Port where the server will be listening
    lifetimeCheckInterval: 1000,        // Minimum interval between lifetime checks in ms
    udpWindow: 100,
    defaultType: 'Device',
    logLevel: 'DEBUG',
    ipProtocol: 'udp4',
    serverProtocol: 'udp4',    
    formats: [
        {
            name: 'application-vnd-oma-lwm2m/text',
            value: 1541
        },
        {
            name: 'application-vnd-oma-lwm2m/tlv',
            value: 1542
        },
        {
            name: 'application-vnd-oma-lwm2m/json',
            value: 1543
        },
        {
            name: 'application-vnd-oma-lwm2m/opaque',
            value: 1544
        }
    ],
    writeFormat: 'application-vnd-oma-lwm2m/text',
    authenticate:  true,    
    //conectar com o servidor
    dtls_opts : {
      psk:    new Buffer("AAAAAAAAAAAAAAAA"),
      PSKIdent: new Buffer("32323232-3232-3232-3232-323232323232"), 
      key: null,
      peerPublicKey: null
    }, 
    //chave para o server do cliente
    //o servidor tera que conectar 
    dtls_opts_server : {
        key: "/home/caio/Desktop/fiware/lwm2m-dtls/node-coap-dtls/examples/127_0_0_1.pkey",
        debug: 1,
        handshakeTimeoutMin: 3000
    },
    types: [
        {
            name: 'Room',
            url: "/elemento/Room/rd"
        }
    ]
};

// Configuration of the LWTM2M Client
//--------------------------------------------------
config.client = {
    lifetime: '85671',
    version: '1.0',
    logLevel: 'DEBUG',
    observe: {
        period: 3000
    },
    ipProtocol: 'udp4',
    serverProtocol: 'udp4',
    formats: [
        {
            name: 'lightweightm2m/text',
            value: 1541
        }
    ],
    writeFormat: 'lightweightm2m/text',
    authenticate:  true,
    //conectar com o servidor
    dtls_opts : {
      psk:    new Buffer("AAAAAAAAAAAAAAAA"),
      PSKIdent: new Buffer("32323232-3232-3232-3232-323232323232"), 
      key: null,
      peerPublicKey: null
    }, 
    //chave para o server do cliente
    //o servidor tera que conectar 
    dtls_opts_server : {
        key: "/home/caio/Desktop/fiware/lwm2m-dtls/node-coap-dtls/examples/127_0_0_1.pkey",
        debug: 1,
        handshakeTimeoutMin: 3000
    }
};

module.exports = config;
