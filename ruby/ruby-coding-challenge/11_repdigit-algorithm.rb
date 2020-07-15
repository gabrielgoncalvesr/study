# first way
def repeated_digits(number)
  array = number.to_s.split('').map(&:to_i)
  digit = array.first
  count = array.count { |number| number != digit }

  if count == 0
    return true
  else
    return false
  end
end

puts repeated_digits(777)