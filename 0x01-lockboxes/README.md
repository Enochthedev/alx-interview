# Lock Boxes Puzzle Solver

This is a Python script that provides a solution to the "Lock Boxes Puzzle." It includes two functions, `look_next_opened_box` and `canUnlockAll`, which can be used to determine if all the boxes can be opened based on the keys contained within them.

## Requirements

- Python 3.x

## Usage

1. Save the provided Python script to a file named `lock_boxes_puzzle.py`.

2. You can use the `canUnlockAll` function by importing it into your Python code. To do this, follow these steps:

   ```python
   from lock_boxes_puzzle import canUnlockAll

   boxes = [
       [1],            # Box 0 with a key to Box 1
       [2, 3],         # Box 1 with keys to Box 2 and Box 3
       [],             # Box 2 is empty
       [4],            # Box 3 with a key to Box 4
       [5],            # Box 4 with a key to Box 5
       []              # Box 5 is empty
   ]

   result = canUnlockAll(boxes)
   print(result)
   ```

   Modify the `boxes` list to represent your specific scenario. The function will return `True` if all boxes can be opened, and `False` otherwise.

3. Run your Python script, and it will display the result of whether all the boxes can be unlocked.

## Example

Let's demonstrate how to use the `canUnlockAll` function with a sample set of boxes.

```python
from lock_boxes_puzzle import canUnlockAll

boxes = [
    [1],            # Box 0 with a key to Box 1
    [2, 3],         # Box 1 with keys to Box 2 and Box 3
    [],             # Box 2 is empty
    [4],            # Box 3 with a key to Box 4
    [5],            # Box 4 with a key to Box 5
    []              # Box 5 is empty
]

result = canUnlockAll(boxes)
print(result)
```

Output:

```
True
```

The output represents that all the boxes in the given example can be unlocked successfully.

Enjoy solving the Lock Boxes Puzzle using this Python script!

## Author
* **Omosebi Enoch** (@toluthedev) - [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](tolus-portfolio.vercel.app)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/itsdefWave)
  [<img src="https://img.shields.io/badge/Linkedin-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/enoch-omosebi-b68687224/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/Enochthedev)

## Note

This script is a solution to the Lock Boxes Puzzle, where each box can contain keys to other boxes. The function `canUnlockAll` determines if it's possible to unlock all the boxes by following the key links. Modify the `boxes` list to represent your specific puzzle and test different scenarios.