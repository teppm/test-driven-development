describe('whatCanIDrink', function() {

    beforeEach(function() {
        drink = new whatCanIDrink;
    })

    describe('checks age', function() {


        it('should exist', function() {
            expect(whatCanIDrink).toBeDefined;
        })

        it('Should return drink Toddy when called whatCanIDrink(13)', function() {
            var result = whatCanIDrink(13);
            expect(result).toBe('Drink Toddy')
        })

        it('Should return drink Toddy when called whatCanIDrink(17)', function() {
            var result = whatCanIDrink(17);
            expect(result).toBe('Drink Coke')
        })

        it('Should return drink Toddy when called whatCanIDrink(18)', function() {
            var result = whatCanIDrink(18);
            expect(result).toBe('Drink Beer')
        })

        it('Should return drink Toddy when called whatCanIDrink(20)', function() {
            var result = whatCanIDrink(20);
            expect(result).toBe('Drink Beer')
        });
        it('Should return drink Toddy when called whatCanIDrink(30)', function() {
            var result = whatCanIDrink(30);
            expect(result).toBe('Drink Whiskey')
        })

        it('Should return drink Toddy when called whatCanIDrink(140)', function() {
            var result = whatCanIDrink(140);
            expect(result).toBe('Sorry. I can’t tell what drink because that age is incorrect!')
        })

        it("should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink");
            expect(result).not.toEqual(-1);
        })

    })
});