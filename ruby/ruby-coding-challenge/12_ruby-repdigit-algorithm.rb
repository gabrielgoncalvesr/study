# better way
def repeated_digits(number)
  array = number.to_s.split('').map(&:to_i)
  array.count { |number| number != array.first } == 0
end

puts repeated_digits(777)

# ruby way
def repeated_digits(number)
  number.to_s.squeeze.length == 1
end

puts repeated_digits(777)

# other ruby way
def repeated_digits(number)
  number.to_s.chars.uniq.length == 1
end

puts repeated_digits(777)