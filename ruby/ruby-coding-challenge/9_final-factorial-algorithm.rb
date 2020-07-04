# final way
def ruby_factorial(number)
	return 1 if number == 0
  number.downto(1).reduce(:*)
end

puts ruby_factorial(0)