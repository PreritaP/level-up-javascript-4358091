class Book {
  constructor (title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0)
      return "Out of Stock";
    else if (this.numCopies < 10)
      return "Low Stock.";
    else
      return "In Stock.";
  }

  sell(numCopiesSold = 1) {
    this.numCopies -= numCopiesSold;
  }

  restock(numCopiesRestocked = 5){
    this.numCopies += numCopiesRestocked;
  }
}

const HungerGames = new Book("HungerGames", "Author ABC", 123000, 2);
console.log(HungerGames.availability);

HungerGames.restock(10);
console.log(HungerGames.availability);

HungerGames.sell(4);
console.log(HungerGames.availability);


