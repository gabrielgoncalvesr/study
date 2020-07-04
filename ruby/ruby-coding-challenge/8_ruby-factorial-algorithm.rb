# ruby way
def ruby_factorial(number)
  (1..number).reduce(:*)
end

puts ruby_factorial(5)