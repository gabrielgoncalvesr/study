# first way
array = [17, 6, 3, 7, 9, 1]
number = 5
count = 0

for item in array
  if item > 5
    count = count + 1
  end
end

puts count

# organized way
def how_many_items_are_grater_than(number, array)
  count = 0

  for item in array
    if item > 5
      count = count + 1
    end
  end

  return count
end

array = [17, 6, 3, 7, 9, 1]
puts how_many_items_are_grater_than(5, array)

# ruby way
def how_many_items_are_grater_than(number, array)
  return array.count do |item|
    item > 5
  end
end

array = [17, 6, 3, 7, 9, 1]
puts how_many_items_are_grater_than(5, array)