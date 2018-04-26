var iPhone6S = new Phone("Apple", 2250, "silver", "yes", "4.3.1");
var SamsungGalaxyS6 = new Phone("Samsung", 2000, "white", "yes", "4.4.4");
var OnePlusOne = new Phone("OnePlus", 2500, "blue", "yes", "5.1.1");

function Phone(brand, price, color, mp3Player, androidVersion) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.mp3Player = mp3Player;
	this.androidVersion = androidVersion;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ",  mp3Player: " + this.mp3Player + ", version of Android is: " + this.androidVersion + ".");
}

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();