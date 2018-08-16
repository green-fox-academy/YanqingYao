class Person {
  constructor(name = 'Jane Doe', age = '30', gender = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal() { //eslint-disable-line
    console.log('My goal is: Live for the moment!');
  }
}

class Student extends Person {
  constructor(name = 'Jane Doe', age = '30', gender = 'female', previousOrganization = 'The School of Life') {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  getGoal() {  //eslint-disable-line
    console.log('My goal is: Be a junior software developer');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }
}

class Mentor extends Person {
  constructor(name = 'Jane Doe', age = '30', gender = 'female', level = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {  //eslint-disable-line
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} level mentor.`);
  }
}

class Sponsor extends Person {
  constructor(name = 'Jane Doe', age = '30', gender = 'female', company = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  getGoal() {  //eslint-disable-line
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} level mentor.`);
  }
}
