class MyHashSet:
    mySet = []

    def __init__(self):
        self.mySet = []
        

    def add(self, key: int) -> None:
        if key in self.mySet:
            return
        self.mySet.append(key)


    def remove(self, key: int) -> None:
        for i, n in enumerate(self.mySet):
            if key == n:
                self.mySet = self.mySet[:i] + self.mySet[i+1:]
                return

    def contains(self, key: int) -> bool:
        for n in self.mySet:
            if key == n:
                return True
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)