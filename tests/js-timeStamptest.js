describe("UnixTimeStamp Test", function() {
it("unixTimeStamp() should return unixTimeStamp value", function() {
var unixTimeStamp = function() {
var unix = new Date();
return unix.getTime();
};
var expectedTimestamp = 1437594753; 
var result = unixTimeStamp();
expect(result).toEqual(expectedTimestamp);
});
});
