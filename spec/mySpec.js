// my specs
describe("A suite", function(){
    it("contains spec with an exception", function(){
        expect(true).toBe(true);
    });
});

describe("A suite is just a function", function(){
    var a;

    it("and so is a spec", function(){
        a=true;

        expect(a).toBe(true);
    });
});

describe("The 'toBe' matcher compares with===", function() {

    it("and has a positive case", function() {
        expect(true).toBe(true);
    });

    it("and can have a negative case", function(){
        expect(falese).not.toBe(true);
    });

    
});