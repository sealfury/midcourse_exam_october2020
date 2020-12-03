## Written Exam

How and when to use `.forEach`, `.map`, `.filter`, and `.find` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.


### When To Use:
- `.forEach`
    - Calls a provided callback function once for each element in e.g. an array in ascending order
      ```
      const array = ['something', 'something else', 'a third thing']
      array.forEach(item => console.log(item))
      
      *console outputs each array item*
      ```
    - Especially useful if we have an extensive array that we want to apply a function to

- `.map`
    - calls a function once for each element in an array and constructs a new array with the results
        ```
        array.map(item => {
          return (
            <div>
              {item.name}
            </div>
          )
        })
        ```
    - Above example maps over each item in an array to return the name of each item in the `<div>` 

- `.filter`
    - creates a new array with all elements that pass the conditions provided by the function
      ```
      const array = [1, 2, 5, 8, 11, 18]
      let doubleDigits = array.filter((number) => {
        return number > 10
      })
      ```
    - useful to select specific items from a large array, e.g. if all first names in a list are to be displayed
  
- `.find`
    - finds the first element in an array that satisfies the test function
      ```
      const numbers = [5, 10, 100, 1000, 10000]
      const firstBigNumber = numbers.find(item => item > 10)
      return(firstBigNumber)
      ```
    