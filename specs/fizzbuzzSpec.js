describe('My fizzBuzz function', function() {

    beforeEach(function() {
        fizzbuzz = new fizzBuzz;
    })

    describe('Returns number, fizz, buzz or fizzbuzz', function() {

        it('should exist', function() {
            expect('fizzBuzz').toBeDefined();
        })

        it('should return FizzBuzz when call as fizzBuzz(15)', function() {
            var result = fizzBuzz(15);
            expect(result).toBe('FizzBuzz');
        })

        it('should return Fizz when called as fizzBuzz(9)', function() {
            var result = fizzBuzz(9);
            expect(result).toBe('Fizz');
        })

        it('should return Buzz when called as fizzBuzz(50)', function() {
            var result = fizzBuzz(50);
            expect(result).toBe('Buzz');
        })

        it('should return (4) when called as fizzBuzz(4)', function() {
            var result = fizzBuzz(4);
            expect(result).toBe(4);
        })

    })
})