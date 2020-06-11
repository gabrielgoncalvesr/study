# first way
def is_prime(number)
  return false if number == 1

  (2..(number - 1)).each do |item|
    if number % item == 0
      return false
    end
  end

  return true
end

def sum_prime_numbers(array)
  sum = 0;

  for item in array
    sum += item if is_prime(item)
  end

  return sum
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
puts sum_prime_numbers(array)

# ruby way
def is_prime(number)
  return false if number == 1

  (2..(number - 1)).each do |item|
    if number % item == 0
      return false
    end
  end

  return true
end

def sum_prime_numbers(array)
  array.select { |item| is_prime(item) }.reduce(:+)
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
puts sum_prime_numbers(array)