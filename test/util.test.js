describe("reverse word", function() {
    it("string param", function(){
        expect("DCBA").toEqual(reverse("ABCD"));
    });
    // it("number param", function(){
    //     expect('').toEqual(reverse(1));
    // });
    it("empty param", function(){
        expect('').toEqual(reverse());
    });
});