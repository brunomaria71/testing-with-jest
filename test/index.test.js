import sut from "../src/index.js"; // sut is used by convention so everyone knows what we are testing.  

describe("the tests for sum", () => {

    it("Should add 2 numbers", () => {
        // Arrange
        const c = 5
        const d = 3
        const expected = 8
        // Act
        const actual = sut(c, d)
    
        // Assert 
        expect(actual).toBe(expected)
    
    })

    it("Should fail with a string input", () => {
        // Arrange
        const a = "str", b = 5, expected = "bad input"
        // Act
        const actual = sut(a, b)
        // Assert
        expect(actual).toBe(expected)
    })
    });

    it("Should subtract 2 numbers", () => {
        // Arrange
        const c = 3
        const d = 5
        const expected = 2
        // Act
        const actual = sut(c, d)
    
        // Assert 
        expect(actual).toBe(expected)
    
    })