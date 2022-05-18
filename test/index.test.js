import sut from "../src/index.js"

describe("The tests for sum", () => {

    it("Should subtract 2 numbers if a < b", () => {
        //Arrange
        const a = 3
        const b = 5
        const expected = 2
        
        //Act
        const actual = sut.sum(a, b) 
    
        //Assert
        expect(actual).toBe(expected)
    })

    it("Should add 2 numbers", () => {
        //Arrange
        const c = 5
        const d = 3
        const expected = 8
        
        //Act
        const actual = sut(c, d) 
    
        //Assert
        expect(actual).toBe(expected)
    })

    it("Should fail with a string input", () => {
        //Arrange
        const a = "str", b = 5, expected = "Bad Input"

        //Act
        const actual = sut(a, b)

        //Assert
        expect(actual).toBe(expected)
    })
})


describe("The test for cube", () =>{

    it ('should raise a number to the third power', () => {
        //arrange
        const a = 2, expectedResult = 8

        //act
        const actual = sut.cube(a)

        //assert
        expect(actual).toBe(expectedResult)
    })
    
    it ('should get an error', () => {
        //arrange
        const a = "tom", expectedResult = "Bad input"

        //act
        const actual = sut.cube(a)

        //assert
        expect(actual).toBe(expectedResult)
    })
    fit ('should get an error if we pass in a boolean', () => {
        //arrange
        const a = true, expectedResult = "Bad input"

        //act
        const actual = sut.cube(a)

        //assert
        expect(actual).toBe(expectedResult)
    })

})