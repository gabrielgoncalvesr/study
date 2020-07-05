# ruby way
def fibonacci(count)
  sequence = []

  (0..count).each do |number|
    sequence << number if number <= 1
    sequence << sequence[-1] + sequence[-2] if sequence.length > 1
  end

  sequence
end

puts fibonacci(8)