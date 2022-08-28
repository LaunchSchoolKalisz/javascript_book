=begin
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

# Problem: given a string of integers, create an array of every possible consecutive substring, and select only the odd numbers. There can be doubles. return the correct number of odd substrings

# Example
1341 -> 1 3 4 1 13 41 134 341 1341 -> 1 3 1 13 41 341 1341 -> 7

# Data: strings, arrays, integer

Algo
- Given a string, find every possible consecutive substring
- Select only the odd substrings
- Count the number of odd substrings, and return that value
=end

# def solve(integer_string)
#   array_of_substrings = []
#   idx1 = 0
#   idx2 = 0
#   loop do 
#     loop do 
#      array_of_substrings << integer_string[idx1..idx2]
#      break if idx2 >= integer_string.length - 1
#      idx2 += 1 
#     end
#     idx1 += 1
#     idx2 = idx1
#     break if idx1 >= integer_string.length
#   end
#   odd_substrings = array_of_substrings.select {|subst| subst.to_i.odd?}
#   p odd_substrings.size
# end

def solve(integer_string)
  array_of_substrings = []
  size = 1
  integer_string.chars.each_cons(size) do |subst|
    array_of_substrings << subst
  end
  p array_of_substrings
end

p solve("1341") == 7
# p solve("1357") == 10
# p solve("13471") == 12
# p solve("134721") == 13
# p solve("1347231") == 20
# p solve("13472315") == 28

