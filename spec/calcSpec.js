describe('Calculator', function() {

    beforeEach(function() {
        calc = new Calculator;
    });

    describe('addition', function() {
        it('should return 42', function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        })
        it('should return 19', function() {
            calc.add(7);
            calc.add(12);
            expect(calc.value).toBe(19);
        })
        it('should return an error if we dont supply two numbers', function() {
            spyOn(window, 'alert');
            calc.add('hitchhikers');
            expect(window.alert).toHaveBeenCalledWith('Error!');
        })
    })
})