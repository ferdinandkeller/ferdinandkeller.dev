---
# title: A rant on python's exception system.
# description: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque earum necessitatibus ad soluta expedita voluptatum harum repudiandae neque animi temporibus rerum in, officia veniam consequatur rem aut.
published_at: 2023-01-01
---

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

On the over hand, `Rust` makes its error system very explicit:

```rust
/// This method is really awesome !
/// (btw it might raise an exception, but who cares ?)
fn awesome_typed_method(cool_number: u64) -> Option<String> {
    if cool_number % 3 == 0 {
        None
    } else {
        Some(cool_number.to_string())
    }
}
```

```rust
struct Vec<T> {
    x: T,
    y: T,
}
```

```html
<p class="like">I like potatoes</p>
```

So you what you do at the end is a mix of:
- time-consuming code exploration to make sure you catched all the possible exceptions of all the methods you use
- top-level error catching to make your entire service doesn't shutdown unexpectedly because you forgot something