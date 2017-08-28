const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
    cert: `-----BEGIN CERTIFICATE-----
        MIICATCCAWoCCQCRRBQN6vqzAzANBgkqhkiG9w0BAQUFADBFMQswCQYDVQQGEwJB
        VTETMBEGA1UECBMKU29tZS1TdGF0ZTEhMB8GA1UEChMYSW50ZXJuZXQgV2lkZ2l0
        cyBQdHkgTHRkMB4XDTE3MDgyODE1NTAzM1oXDTE4MDgyODE1NTAzM1owRTELMAkG
        A1UEBhMCQVUxEzARBgNVBAgTClNvbWUtU3RhdGUxITAfBgNVBAoTGEludGVybmV0
        IFdpZGdpdHMgUHR5IEx0ZDCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAu96C
        Kw0t1+kUoLxj3WOGWzPQk5zprpgrm3v5zo2Q2ECCzbn63BB6BKKmKz6gs+pkPpg6
        zUwCDGAHVStk32EIbKEyBl58G+jMej6QPBOH8uH2SgPb/teFsUTVNpTqQgYsie06
        ksMvuu6de+W/mFRvbaIKUDx6YArsLMzEHxClSVkCAwEAATANBgkqhkiG9w0BAQUF
        AAOBgQCgQ9vWXpWBxLpajlxB6xBGpzD5fBA8SKXekyqrgLXncIPGPrLSQBKLWAD/
    A2Ulxb9jGPhMPHE3+H8OrQFCFL1ILq9ovpDYQWiv1nL5SfIG3NNzWciDLyGCvVwq
nYi6zc1Yos2s2cbumvn6ntEfqcGk02K5SL5JQFDQDkrg9H0+6A==
-----END CERTIFICATE-----`,
    key: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgQC73oIrDS3X6RSgvGPdY4ZbM9CTnOmumCube/nOjZDYQILNufrc
EHoEoqYrPqCz6mQ+mDrNTAIMYAdVK2TfYQhsoTIGXnwb6Mx6PpA8E4fy4fZKA9v+
14WxRNU2lOpCBiyJ7TqSwy+67p175b+YVG9togpQPHpgCuwszMQfEKVJWQIDAQAB
AoGAWKfdR5G1k5FDkcK1YdFIoxtlj3NZ93GKCprLvQSjWNnAoHLmhhkka7GRtxCb
56tx2PQfs6ftw4dBjpimxp9UyJZy4Htxl90RlD362tOV4eJIs4XuqsnJGo1x/yHg
IA8jkZRE7ydujkxTz+k4wl1xas3rUJ8WJ0/ESYJNdDAzG/ECQQD0Br18kWuZurBk
0xI3+qhLmQv/al+nkNGZpFLZ+pdza+i/VP2XN/ZBh9jwqd7RumPjmzix3umPHvXQ
8z2pIl7FAkEAxRZeLZCRgsi0DzPudmcPzHx/+djUJtPJF12mWmrxyom6FnmwhIxi
wOqoUikSneaX/8rk1G2rB7qQK2EL7/KphQJBALPbD+fzCnpotb/qLcBil434hHZB
QbUwMLvr+EC+yMeCXi4/BxVgYrkT1hozKY4ssZi8/AFlSYF6ETVrQiQZt/0CQER4
9fVcocFPW4dgonuOaOXBZ3D1TRfEQrwUdEQ7nY+hc/50/se+Ql0F6b7JuEcVoz9i
TUgkZeREg+weRlhx9UUCQF5zY858Cg3ORp06iOljUvN94DHtCiXE3m7L3ReA/iX0
6aG1VEW76HYkvS/I923qBMCo7pe4zBxpEw3s0EmpFbc=
-----END RSA PRIVATE KEY-----`
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection (ws) {
    ws.on('message', function message (msg) {
        console.log(msg);
        ws.send(msg)
    });
});
