# organized way
def is_prime(item)
  return false if item == 1

  number = item - 1
  while number > 1
    if item % number == 0
      return false
    else
      number = number - 1
    end
  end

  return true
end

def count_how_many_are_prime(array)
  total = 0

  for item in array
    is_prime = is_prime(item)

    if is_prime
      total = total + 1
    end
  end

  return total
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
puts count_how_many_are_prime(array)

# ruby orgized way
def is_prime(number)
  return false if number == 1

  (2..(number - 1)).each do |item|
    if number % item == 0
      return false
    end
  end

  return true
end

def count_how_many_are_prime(array)
  return array.count do |item|
    is_prime(item)
  end
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
puts count_how_many_are_prime(array)

# ruby better way
require 'prime'

def count_how_many_are_prime(array)
  array.count do |item|
    Prime.prime?(item)
  end
end

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
puts count_how_many_are_prime(array)