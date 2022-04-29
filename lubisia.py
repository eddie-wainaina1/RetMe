from copy import deepcopy
nums = [9,41,74,87,34]
print(i for i in range(1,10))
def largest(nums_list):
    largest = 0
    for num in range(len(nums_list)):
        if nums_list[num]>=nums_list[largest]:
            largest = num
    return largest

def sort_from_largest(nums_list):
    lst = deepcopy(nums_list)
    sorted_list = []
    while len(lst)>=1:
        largest_index = largest(lst)
        sorted_list.append(lst[largest_index])
        if len(lst):
            lst.pop(largest_index)
    return sorted_list

srtd = sort_from_largest(nums)
print(nums, srtd)
