# LOG-MOCKER

Periodically emits a log message in stdout, with random message and length.

__Log format:__

```json
{ "message_length": 10, "message": "abcdefghij" }
```

__Env variables:__

* cronTime - default is '* * * * *'
* minLogSize - default is 1000
* maxLogSize - default is 20000