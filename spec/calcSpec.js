describe('calculator', function() {
    describe('addition', function() {
        it('should return 42', function() {
            expect(addition(20, 22)).toBe(42);
        })
        it('should return 19', function() {
            expect(addition(7, 12)).toBe(19);
        })
        it('should return an error if we dont supply two numbers', function() {
            expect(addition('hitchhikers', 'guide')).toBe('Error!');
        })
    })
})