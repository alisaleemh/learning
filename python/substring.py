import numpy

def longestSubstringFinder(str1, str2):
    answer = ""

    if len(str1) == len(str2):
        if str1==str2:
            return str1
        else:
            longer=str1
            shorter=str2
    elif (len(str1) == 0 or len(str2) == 0):
        return ""
    elif len(str1)>len(str2):
        longer=str1
        shorter=str2
    else:
        longer=str2
        shorter=str1

    matrix = numpy.zeros((len(shorter), len(longer)))

    for i in range(len(shorter)):
        for j in range(len(longer)):
            if shorter[i]== longer[j]:
                matrix[i][j]=1

    longest=0
    start=[-1,-1]
    end=[-1,-1]
    print matrix
    for i in range(len(shorter)-1, -1, -1):
        for j in range(len(longer)):
            count=0
            begin = [i,j]
            while matrix[i][j]==1:

                finish=[i,j]
                count=count+1
                if j == len(longer)-1 or i==len(shorter)-1:
                    break
                else:
                    j = j+1
                    i = i+1
            # i = i-count

            if count>longest:
                longest=count
                start=begin
                end=finish
                break

    print end
    print shorter[end[0]] 
    answer=shorter[int(start[0]): int(end[0])+1]

    return answer

print longestSubstringFinder("bbbbali", "ccccali")
