=begin
30. Anagram difference
(https://www.codewars.com/kata/5b1b27c8f60e99a467000041)
6 kyu
Given two words, how many letters do you have to remove from them to make them anagrams?

Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.

Problem: given 2 strings, remove 1 letter until they are anagrams
 - anagram: a word with all of the same letters, and the same number of letters

Example
  - codewars, hackerrank
    - , hkrank
    - c e a r
    - o d w s hkrank

Data 
 - strings, arrays, integers

Algorithm
- given 2 strings
- create a result, intialized to 0
- determine larger of the 2 strings
- split the smaller of the 2 into characters
  - iterate through the smaller string, and check to see if that character is included in the larger. 
  - If it is included, remove it from the larger
  - If it is not included, increment a count of letters to remove
- whatever letters are left in the larger string after the iteration, count those and add to the result count
- return the result count
=end

def anagram_difference(string1, string2)
  result_count = 0
  if string1.length > string2.length
    larger_string = string1
    smaller_string = string2
  else
    larger_string = string2
    smaller_string = string1
  end
  smaller_string.chars.each do |letter|
    if larger_string.include?(letter)
      larger_string.sub!(letter, "")
    else
      result_count += 1
    end
  end
   result_count + larger_string.length
end

p anagram_difference('', '') == 0
p anagram_difference('a', '') == 1
p anagram_difference('', 'a') == 1
p anagram_difference('ab', 'a') == 1
p anagram_difference('ab', 'ba') == 0
p anagram_difference('ab', 'cd') == 4
p anagram_difference('aab', 'a') == 2
p anagram_difference('a', 'aab') == 2
p anagram_difference('codewars', 'hackerrank') == 10
