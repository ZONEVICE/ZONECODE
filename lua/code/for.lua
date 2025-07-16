local mytab = {"E1", "E2", "E3"}

-- Classic syntax.
for i = 1, #mytab do
    print(i, mytab[i])
end

print()

-- This syntax returns the index and the value
--  in the table.
for index, value in ipairs(mytab) do
    print(index)
    print(value)
end

print()

-- For a table with key and value.
local keytab = { A1 = 9.5, A2 = "N/A" }

for key, value in pairs(keytab) do
    print(key, value)
end
