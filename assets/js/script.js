class Student {
    constructor(name, age, career, enrollmentNumber) {
      this.name = name;
      this.age = age;
      this.career = career;
      this.enrollmentNumber = enrollmentNumber;
    }
  
    showInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Career: ${this.career}`);
      console.log(`Enrollment Number: ${this.enrollmentNumber}`);
    }
  }
  
  let student = new Student("John Smith", 22, "Computacion", "12345678");
  student.showInfo();
  



  class Band {
    constructor(name, members, genre, albums) {
      this.name = name;
      this.members = members;
      this.genre = genre;
      this.albums = albums;
    }
  
    showInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Members: ${this.members}`);
      console.log(`Genre: ${this.genre}`);
      console.log(`Albums:`);
      this.albums.forEach(album => console.log(album));
    }
  
    listAlbums() {
      console.log(`Albums:`);
      this.albums.forEach(album => console.log(album));
    }
  }
  
  let band = new Band("The Beatles", 4, "Rock", ["Please Please Me", "With the Beatles", "A Hard Day's Night"]);
  band.showInfo();
  console.log("\n");
  band.listAlbums();
  

  class Dog {
    constructor(name, breed, age, weight) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.weight = weight;
    }
  
    showInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Breed: ${this.breed}`);
      console.log(`Age: ${this.age}`);
      console.log(`Weight: ${this.weight}`);
    }
  
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
  let dog = new Dog("Max", "German Shepherd", 3, 60);
  dog.showInfo();
  console.log("\n");
  dog.bark();