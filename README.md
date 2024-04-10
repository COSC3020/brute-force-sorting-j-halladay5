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

The runtime complexity of my implementation is O(n!) . It starts by first calling the permute function with l = 0; This l is what matters in the time complexity because it increases every time permute is called.
So at first it is called with 0, and the for loop will iterate r - l times. r is the length of the list, so r-0 = r. So if n is the size of the list, then the for loop iterates n times. Inside this for loop, it 
checks to see if our swap values are duplicates, and if not, they will swap. Swap takes constant time, but becasue it is in the for loop, it will happen n times. It then checks to see if the list is sorted taking
constant time. It will then swap back, acting as our backtrack to find the other permutations. This all happens in the for loop, taking constant time, so it will happen n times. It is then called again inside 
the for loop, passing l+1 as the l value. Now, the for loop will iterate n-1 times, and this will continue until l +1 = r. Then it will return 1, giving us a time complexity of n * (n-1) * ...... * (1) = O(n!).

A best case scenario would be either the size of the list being 1, or the list already being sorted. In the list length = 1 case, it will simpley return 1 as that is the only permutation. If the list is sorted,
it will permute and swap the 0 index with the 0 index, doing nothing to the list, and then checking and finding that it is sorted. It will then return the permutations tried, which is only 1. $\O(1)$

A worst case scenario would be the list being reversely sorted. In this case we go through every permutations and every swap possible. The for loop will need go to the last possible swap, so it will try every permutation before it. This will continue until the correct permuation is found. There are n! permutations, so it would be O(n!).

This time complexity would not change if we generated permutations randomly without memeory instead of systematically trying them, it may actually get worse. If we generate random permutations, we may get
extremely lucky and generate the correct permutation, but that is is extremely unlikely, about 1/n!. Instead, if we generated randomly without making sure to avoid duplicate numnbers, and duplicate permutations,
you would have to theoretically try n! times to get the correct permutation. So the time complexity would be O(n!). This is the same, but if we allow duplicate permutations, that number could be larger before 
we find the correct permutation. Its similar to throwing a deck of cards on the floor and hoping to pick them up sorted again. So I would imagine that the possible asympotic complexity would be infinite time.
We can't be sure that the sorted permutation will be generated, so it would be infinite time. Although unlikely, in the worst case scenario it would never generate the sorted permutation. It could run infinitely,
but it most likely generate before then. It's difficult to say when it will be generated. 

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

Sources Used: https://www.youtube.com/watch?v=GuTPwotSdYw

