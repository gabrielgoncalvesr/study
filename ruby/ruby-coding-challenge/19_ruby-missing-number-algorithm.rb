# ruby way
def find_missing_numbers(array)
  (1..10).each do |item|
    return item unless array.include?(item)
  end
end

array = [9, 2, 4, 8, 3, 10, 5, 1, 6]
puts find_missing_numbers(array)