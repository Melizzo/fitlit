const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User')
const Hydration = require('../src/Hydration')
// const userDataTest = require('../data/userDataTest')

describe('Hydration', function() {
  let user;
  let hydration;

  beforeEach(() => {
    user = new User({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        2,
        3
      ]
    })

    hydration = new Hydration({
      "userID": 1,
      "date": "2019/09/16",
      "numOunces": 37
    },)

  })
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  // it('should have a user id', function() {
  //   expect(user.id).to.equal(user.id);
  // });

  // it('should have a user name', function() {
  //   expect(user.name).to.equal(user.name);
  // });

  // it('should have a user address', function() {
  //   expect(user.address).to.equal(user.address);
  // });

  // it('should have a user email address', function() {
  //   expect(user.email).to.equal(user.email);
  // });

  // it('should have a user stride length', function() {
  //   expect(user.strideLength).to.equal(user.strideLength);
  // });

  // it('should have a user daily step goal', function() {
  //   expect(user.dailyStepGoal).to.equal(user.dailyStepGoal);
  // });

  // it('should have a user list of friends', function() {
  //   expect(user.friends).to.equal(user.friends);
  // });

  // it('should display the users first name', function() {
  //   expect(user.displayFirstNameOnly()).to.equal('Luisa');
  // });

})
