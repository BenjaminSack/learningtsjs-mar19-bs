describe('writing basic specs', () => {
    it('should add two numbers', () => {
        //Given
        const a = 10, b = 20;

        //When
        const answer = a + b;

        //Then
        expect(answer).toBe(30);
    });
});