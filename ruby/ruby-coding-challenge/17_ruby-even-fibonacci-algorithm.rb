# ruby way
def fibonacci(count)
  sequence = []
  
  (0..count).each do |item|
    sequence << item if item <= 1
    sequence << sequence[-1] + sequence[-2] if item > 1
  end

  sequence
end

def sum(array)
  array.select { |number| number % 2 == 0 }.reduce(:+)
end

puts sum(fibonacci(8))