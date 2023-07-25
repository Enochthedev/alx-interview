# Pascal's Triangle

This is a Python script that defines a function to generate Pascal's Triangle for a given number of rows `n`.

## Requirements

- Python 3.x

## Usage

1. Save the provided Python script to a file named `pascals_triangle.py`.

2. You can use the `pascal_triangle` function by importing it into your Python code. To do this, follow these steps:

   ```python
   from pascals_triangle import pascal_triangle

   n = 5  # Replace 5 with the desired number of rows for Pascal's Triangle
   triangle = pascal_triangle(n)
   print(triangle)
   ```

   Replace `n` with the desired number of rows for Pascal's Triangle. The function will return a list of lists representing the triangle, which you can then use as needed.

3. Run your Python script, and it will display Pascal's Triangle for the specified number of rows.

## Example

Let's demonstrate how to generate Pascal's Triangle with 5 rows using the provided function.

```python
from pascals_triangle import pascal_triangle

n = 5
triangle = pascal_triangle(n)
print(triangle)
```

Output:

```
[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
```

The output represents Pascal's Triangle with 5 rows, where each row is represented as a list of integers.

Enjoy exploring Pascal's Triangle using this Python script!

## Author
* **Omosebi Enoch** (@toluthedev) - [<img src="https://img.shields.io/badge/Portfolio-20d6fe.svg?&style=plastic"/>](tolus-portfolio.vercel.app)
  [<img src="https://img.shields.io/badge/Twitter-1DA1F2.svg?&style=plastic&logo=twitter&logoColor=white"/>](https://twitter.com/itsdefWave)
  [<img src="https://img.shields.io/badge/Linkedin-0A66C2.svg?&style=plastic&logo=linkedin&logoColor=white"/>](https://www.linkedin.com/in/enoch-omosebi-b68687224/)
  [<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=plastic&logo=github&logoColor=white"/>](https://github.com/Enochthedev)