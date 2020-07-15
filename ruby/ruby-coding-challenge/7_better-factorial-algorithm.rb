# better way
def better_factorial(number)
  result = number
  (1..(number - 1)).each do |item|
    result = result * item
  end
  
  return result
end

puts better_factorial(5)