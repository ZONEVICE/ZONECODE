# Variable

Lua is dynamic typed.

```lua
local my_number = 5
local my_string = "hello world"
local single_c_string = 'hello world'
local multiline_string = [[ hello
world]]
local bool1, bool2 = true, false
local my_null = nil

local dynamic = true
dynamic = 10
print(dynamic) // 10
```

Variables can hold functions.

```lua
local higher_function = function(value)
    return function(foo)
        return value + foo
    end
end

local add_one = higher_function(1)
print(add_one(2)) // 3
```