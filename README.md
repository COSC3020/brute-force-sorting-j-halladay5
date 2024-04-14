[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/7eEMzrNd)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

The runtime complexity of my implementation is O(n * n!) . It starts by checking to see if the list is already sorted, it it's not it will call the permute function with l = 0. 
The permute function has a for loop that will iterate n-l times, where n is the length of the array, and l is the index we are swapping to create a new permutation of the list. When first called it will iterate 
n times. It will then check to see if the element in the array is the same, if it is there is no swap. If it isn't a duplicate it will swap. This takes constant time. It will then recursively call the permute
function, passing l+1 in place of l. This will make the for loop for the next call iterate n-l times. In the next call, the for loop will iterate one less time. This occurrs until l+1 = r, so the total number of
iterations is n!. After the permute call is made, it calls checkSorted to see if the permutation is sorted. It will iterate until it finds an unsorted element. This will iterate n times, or close to n times in
the worst case. If it returns false, then the it will swap the elements to back track and continue to recurse. If it returns true, it will add 1 to the count variable which wil then return to the original 
function. For our time complexity, the permute function will be called in the worst case n! times, and each time it's called it also calls the checkSorted function, which iterates up to n times, so the time
complexity will be O(n * n!).

A best case scenario would be either the size of the list being 1, or the list already being sorted. In the list length = 1 case, it will simpley return 1 as that is the only permutation. If the list is sorted,
it will call the checkSorted and the for loop would iterate n times, so it would be O(n) It will then return the permutations tried, which is only 1. $\ O(1)$ or $\ O(n)$.

A worst case scenario would be a list that is which the correct start value is at the end, and the rest of the list is sorted, but shifted over to the left. For example, [2,3,4,1], [2,3,4,5,1] and in a general
form, [2 ......n,1], where n is the last value in the sorted list. In this case we go through every permutations and every swap possible. The for loop will need go to the last possible swap, so it will try every
permutation before it. When swapping the correct value, the correct value for the next place in the list is now at the end. This will continue until the correct permuation is found. There are n! permutations and
checking each time, so it would be O(n *n!).

This time complexity would not change if we generated permutations randomly without memeory instead of systematically trying them, it may actually get worse. If we generate random permutations, we may get
extremely lucky and generate the correct permutation, but that is is extremely unlikely, about 1/n!. Instead, if we generated randomly without making sure to avoid duplicate numnbers, and duplicate permutations,
you would have to theoretically try n! times to get the correct permutation. So the time complexity would be O(n*n!). This is the same, but if we allow duplicate permutations when having no memory, that number
could be larger before we find the correct permutation. Its similar to throwing a deck of cards on the floor and hoping to pick them up sorted again. So I would imagine that the possible asympotic complexity
would be infinite time. O(Infinity).
We can't be sure that the sorted permutation will be generated, so it would be infinite time. Although unlikely, in the worst case scenario it would never generate the sorted permutation. It could run infinitely,
but it most likely generate before then. It's difficult to say when it will be generated. 

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Sources Used: https://www.youtube.com/watch?v=GuTPwotSdYw

