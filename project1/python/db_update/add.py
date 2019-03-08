import boto3

dynamodb=boto3.resource('dynamodb',region_name='us-east-1')

def put(event, context):
    table=dynamodb.Table('POKEMON')
    
    type=event['type']
    name=event['name']
    level=event['level']
    nick_name=event['nick_name']

    table.put_item(
        Item={
            'TYPE': type,
            'NAME': name,
            'LEVEL':level,
            'NICK_NAME':nick_name
        }
    )
    return 'hero created scucessfully'