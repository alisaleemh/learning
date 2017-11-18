def print_directory_contents(spath):
    import os
    for path in os.listdir(spath):
        childPath = os.path.join(spath, path)
        if os.path.isdir(childPath):
            print_directory_contents(childPath)
        else:
            print childPath


print_directory_contents('/home/alisaleemh/Development/learning')
