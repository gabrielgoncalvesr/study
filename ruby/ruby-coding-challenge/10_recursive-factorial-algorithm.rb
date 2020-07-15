# first way
def recursive_factorial(number)
  return 1 if number == 0
  return number * recursive_factorial(number - 1)
end

puts recursive_factorial(5)

# better way
def recursive_factorial(number)
  number == 0 ? 1 : number * recursive_factorial(number - 1)
end

puts recursive_factorial(5)