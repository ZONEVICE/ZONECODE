-- Table as a list.
local list = { "first", 2, false, function() print("fourth") end }

print(list[1]) -- first
print(list[2]) -- 2
print(list[3]) -- false
print(list[4]()) -- fourth

-- Table as a key value map.
local map = {
    my_key = "a value",
    ["a squared parentheses key"] = "parentheses value"
}

print(map.my_key) -- a value
print(map["a squared parentheses key"]) -- parentheses value
