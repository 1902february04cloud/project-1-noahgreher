import boto3
from boto3.dynamodb.conditions import Key, Attr

# Get the service resource.
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')

def scan(event, context):
    table = dynamodb.Table('POKEMON')
    data = table.scan()
    hero = data['Items']
    
    return hero
