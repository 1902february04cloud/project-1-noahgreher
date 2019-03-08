#project1
import math

def isPrime(n):
    if n < 2:
        return False
    if n == 2 or n == 3:
        return True
    if n%2 == 0 or n%3 == 0:
        return False
    
    sqrt = int(math.sqrt(n)) + 2

    for i in range(6, sqrt, 6):
        if n % (i-1) == 0 or n % (i+1) == 0:
            return False
    
    return True 