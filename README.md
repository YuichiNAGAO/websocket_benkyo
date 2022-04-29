# websocket_benkyo
websocketの勉強


### セットアップ
サーバー側
```
node index.js
```

クライアント側
```
client.htmlをブラウザで開く
```


### tcpdumpでtrafficをキャプチャしてみる

```
tcpdump -i lo0 src port 3000 or dst port 3000
```
