#project1
import logging
import promath
import util

logger = logging.getLogger()

def halfer(event, context):
    try:
        n = float(event['number'])
        return util.jsonify(str(n) + ' divided by two is ' + str(n/2))
    except ValueError:
        logger.error('Input number is not a number.')
        return util.jsonify('Please input a REAL number.')
