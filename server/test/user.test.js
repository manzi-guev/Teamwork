import chai from 'chai';
import http from 'chai-http';
import app from '../../app';

chai.use(http);
chai.should();

const user = {
  firstname: 'Nuru',
  lastname: 'Niyigena',
  email: 'abdoul@gmail.com',
  password: 'nurureal',
  gender: 'male',
  jobRole: 'Student',
  department: 'IT',
  address: 'Kicukiro'
};
const login = {
  email: 'abdoul@gmail.com',
  password: 'nurureal'
};
const usercheck = {
  email: 'abd@gmail.com',
  password: 'nuru'
};
const usercatch = {
  password: 'nurureal'
};
const articles = {
  title: 'TESTS',
  author: 'Rutakayile Doctor',
  article: 'Hey there,am here to help out with the tests'
};
const articlecatch = {
  author: 'Rutakayile Doctor'
};
describe('User Tests', () => {
  it('User should create account', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property('message', 'User created');
        res.body.should.have.property('token');
        res.body.data.should.have.property('firstname', 'Nuru');
        res.body.data.should.have.property('lastname', 'Niyigena');
        res.body.data.should.have.property('email', 'abdoul@gmail.com');
        done();
      });
  });
  it('Cannot create account if user already exists', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(409);
        res.body.should.have.property('error', 'User already exists');
        done();
      });
  });
  it('User must be able to login', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(login)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('message', 'User successfully logged in');
        done();
      });
  });
  it('When no email is passed', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(usercatch)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('error', '"email" is required');
        done();
      });
  });
  it('Fiels required', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send(usercatch)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('error', '"firstname" is required');
        done();
      });
  });
  it('User doesnt exist', done => {
    chai
      .request(app)
      .post('/api/v1/auth/signin')
      .send(usercheck)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.have.property('error', 'User doesnt exist');
        done();
      });
  });
});
