# first way
def fibonacci(count)
  sum = 0
  number = 0
  sequence = []
  
  (0..count).each do |item|
    number = item if item <= 1
    number = sequence[-1] + sequence[-2] if item > 1
    sequence << number

    sum += number if number % 2 == 0
  end
  
  sum
end

puts fibonacci(8)