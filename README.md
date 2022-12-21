## Infos

```
This is a small POC, about: 

* NestJs
* Localstack
* Docker
* SNS (Consumer, Emitter)
```

## Configure Local AWS

```
aws --endpoint-url=http://localhost:4566 configure 

AWS_ACCESS_KEY_ID => "ACCESS_KEY_ID"
SECRET_ACCESS_KEY => "ACCESS_SECRET"
AWS_DEFAULT_REGION => "us-east-1"
```
## Create Local Queue

```
aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name NEW_ORDER
```

## Run

```
1 - npm i
2 - docker-compose up
3 - aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name NEW_ORDER
4 - Send a GET request to http://localhost:3000/
```
