# A rant on python's exception system

Python's exception system ... isn't great. At all. Somebody could even argue that it sucks (not me of course).

So let us see a little example:

```python
def awesome_typed_method(cool_number: int) -> str:
    '''This method is really awesome !
    (btw it might raise an exception, but who cares ?)
    '''

    if cool_number % 3 == 0:
        raise Exception("I don't like 3s :/")
    
    return str(cool_number)
```

What happens here is that when I will try to reuse this method, I will have no way to know if it might raise an exception or not.