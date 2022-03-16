# LOG-MOCKER-DOCKER-IMAGE

Periodically emits a log message in stdout, with random message and length.

Use with `docker pull thedilon/log-mocker` 

__Log format:__

```json
{ "message_length": 10, "message": "abcdefghij" }
```

__Env variables:__

* CRON - default is '* * * * *'
* MIN_MESSAGE_SIZE - default is 1000
* MAX_MESSAGE_SIZE - default is 20000
