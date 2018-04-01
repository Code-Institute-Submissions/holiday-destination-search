//testing the searchPlacesOfInterest


describe("searchPlacesOfInterests", function() {
    


    spyOn(window, 'searchPlacesOfInterests');
 
    describe("when calc is used to peform basic math operations", function(){
         
        //Test for sum operation
        it("Call to museum", function() {
            //call any method
            searchPlacesOfInterests("museum);
 
            //verify it got executed
            expect(searchPlacesOfInterests).toHaveBeenCalled();
            expect(searchPlacesOfInterests).toHaveBeenCalledWith("museum");
        });
 
    });
});


/*
describe("Search Places Of Interest", function() {
    describe("when searchPlacesOfInterests is used for Natural Places Of Interest", function(){
         
        //Spec for nature operation
        it("should be able to show nature", function() {
            expect(searchPlacesOfInterests("nature")).toEqual("nature");
        });
        //Spec for museum operation
        it("should be able to show museum", function() {
            expect(searchPlacesOfInterests("museum")).toEqual("museum");
        });
        //Spec for zoo operation
        it("should be able to show zoo", function() {
            expect(searchPlacesOfInterests("zoo")).toEqual("zoo");
        });            
        
    });
});
*/