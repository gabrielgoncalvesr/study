# first way
def fibonacci(count)
  if count <= 1
    return count
  else
    return fibonacci(count  - 1) + fibonacci(count  - 2)
  end
end

puts fibonacci(8)

# better way
def fibonacci(count)
  count <= 1 ? count : fibonacci(count  - 1) + fibonacci(count  - 2)
end

puts fibonacci(8)