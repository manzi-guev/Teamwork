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
const articleupdate = {
  title: 'Real'
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
describe('Article Tests', () => {
  it('Viewing all articles when they dont exist', done => {
    chai
      .request(app)
      .get('/api/v1/feeds')
      .send()
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error', 'No articles');
        done();
      });
  });
  it('Article successfully created', done => {
    chai
      .request(app)
      .post('/api/v1/articles')
      .send(articles)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.have.property(
          'message',
          'Article Successfully created'
        );
        done();
      });
  });
  it('Article having empty fields', done => {
    chai
      .request(app)
      .post('/api/v1/articles')
      .send(articlecatch)
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.have.property('error', '"title" is required');
        done();
      });
  });
  it('Viewing all articles', done => {
    chai
      .request(app)
      .get('/api/v1/feeds')
      .send(articles)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Viewing specific article', done => {
    const id = 1;
    chai
      .request(app)
      .get('/api/v1/articles/' + id)
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
  it('Viewing specific article that doesnt exist', done => {
    const id = 10;
    chai
      .request(app)
      .get('/api/v1/articles/' + id)
      .send()
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property(
          'error',
          'No article with id passed found'
        );
        done();
      });
  });
  it('Update an article', done => {
    const id = 1;
    chai
      .request(app)
      .patch('/api/v1/articles/' + id)
      .send(articleupdate)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property(
          'message',
          'Article updated successfully'
        );
        done();
      });
  });
  it('Delete an article', done => {
    const id = 1;
    chai
      .request(app)
      .delete('/api/v1/articles/' + id)
      .send()
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property(
          'message',
          'Article deleted successfully'
        );
        done();
      });
  });
  it('Delete an article that doesnt exist', done => {
    const id = 1;
    chai
      .request(app)
      .delete('/api/v1/articles/' + id)
      .send()
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error', 'Article not found');
        done();
      });
  });
  it('Update an article that doesnt exist', done => {
    const id = 1;
    chai
      .request(app)
      .delete('/api/v1/articles/' + id)
      .send()
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.have.property('error', 'Article not found');
        done();
      });
  });
});
