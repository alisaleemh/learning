class File:
    def __init__(self, name):
        self.name = name

    def size(self):
        raise NotImplementedError("Subclass must implement abstract method")


class Document(File):

    def size(self):
        return "My size is small"


class Video(File):

    def size(self):
        return "My size is large"


files = [Document("doc1"), Document("doc2"), Video("video1")]

for doc in files:
    print doc.name + doc.size()
