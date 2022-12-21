
## Configure Local AWS

aws --endpoint-url=http://localhost:4566 configure 

AWS_ACCESS_KEY_ID="ACCESS_KEY_ID"
SECRET_ACCESS_KEY="ACCESS_SECRET"
AWS_DEFAULT_REGION="us-east-1"

## Create Local Queue

aws --endpoint-url=http://localhost:4566 sqs create-queue --queue-name NEW_ORDER
