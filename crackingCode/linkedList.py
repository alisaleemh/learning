
class Node(object):
    def __init__(self, data=None, nextNode=None):
        self.data = data
        self.nextNode = nextNode

    def setNextNode(self, nextNode):
        self.nextNode = nextNode

    def setData(self, data):
        self.data = data

    def getNextNode(self):
        return self.nextNode


class LinkedList(object):
    def __init__(self):
        self.head = None

    def insertNode(self, data):
        newNode = Node(data)
        newNode.setNextNode(self.head)
        self.head = newNode

    def deleteNode(self, data):
        current = self.head
        while current:
            nextNode = current.getNextNode()
            if nextNode.data == data:
                print "here"
                aheadNode = current
            if current.data == data:
                print "here2"
                aheadNode = current
                behindNode = current.getNextNode()
                aheadNode.setNextNode(behindNode)
                # debug code
                debug = aheadNode.getNextNode()
                print debug.data
                return
            current = current.getNextNode()

    def size(self):
        current = self.head
        count = 0
        while current:
            print "current data: %s" % current.data
            current = current.getNextNode()
            count += 1
        
        return count


linkedList = LinkedList()
linkedList.insertNode(1)
linkedList.insertNode(2)
linkedList.insertNode(3)

print linkedList.size()
 
linkedList.deleteNode(2)
print linkedList.size()
