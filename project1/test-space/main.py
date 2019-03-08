import boto3

dynamodb=boto3.resource('dynamodb',region_name='us-east-1')

def put(event, context):
    table=dynamodb.Table('POKEMON')
    
    type=event['type']
    name=event['name']
    description=event['description']

    table.put_item(
        Item={
            'TYPE': type,
            'NAME': name,
            'DESCRIPTION': description
        }
    )
    return 'POKEMON SUCCESSFULLY ADDED!'