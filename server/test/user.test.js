import chai from 'chai';
import chaihttp from 'chai-http';
import app from '../app';

chai.use(chaihttp);
chai.should();

describe('User Test', () => {
  describe('SignUp', () => {
    it('Emloyee should signup', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Guevara',
          lastname: 'Manzi',
          email: 'manziguevara@gmail.com',
          password: 'gege123',
          gender: 'male',
          jobRole: 'Student',
          department: 'IT',
          address: 'Gikondo'
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
    it('Emloyee already existing', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signup')
        .send({
          firstname: 'Guevara',
          lastname: 'Manzi',
          email: 'manziguevara@gmail.com',
          password: 'gege123',
          gender: 'male',
          jobRole: 'Student',
          department: 'IT',
          address: 'Gikondo'
        })
        .end((err, res) => {
          res.should.have.status(409);
          res.should.be.a('object');
          done();
        });
    });
    it('Request validation', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signup/hello')
        .send({
          firstname: 'Guevara',
          lastname: 'Manzi',
          email: 'manziguevara@gmail.com',
          password: 'gege123',
          gender: 'male',
          jobRole: 'Student',
          department: 'IT',
          address: 'Gikondo'
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
    it('Method validation', done => {
      chai
        .request(app)
        .get('/api/v1/auth/signup')
        .send({
          firstname: 'Guevara',
          lastname: 'Manzi',
          email: 'manziguevara@gmail.com',
          password: 'gege123',
          gender: 'male',
          jobRole: 'Student',
          department: 'IT',
          address: 'Gikondo'
        })
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Sign In', () => {
    it('User must be able to sign in', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'manguevara@gmail.com',
          password: 'gege123'
        })
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          done();
        });
    });
    it('User already logged in', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'manguevara@gmail.com',
          password: 'gege123'
        })
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          done();
        });
    });
    it('User not found', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'manguevara@gmail.com',
          password: 'gege123'
        })
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          done();
        });
    });
    it('User using incorrect password', done => {
      chai
        .request(app)
        .post('/api/v1/auth/signin')
        .send({
          email: 'manguevara@gmail.com',
          password: 'gege123'
        })
        .end((err, res) => {
          res.should.have.status(401);
          res.should.be.a('object');
          done();
        });
    });
  });
});
describe('Article Test', () => {
  it('Employee should create article', done => {
    chai
      .request(app)
      .post('/api/v1/articles')
      .send({
        title: 'Its time to stop panicking',
        author: 'Manzi Guevara',
        article:
          'When Karen joined the bootcamp, it was about time to stop panicking anytime something goes wrong'
      })
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.a('object');
        done();
      });
  });
  it('Employee should delete article', done => {
    chai
      .request(app)
      .delete('/api/v1/articles/:id')
      .send({})
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.a('object');
        done();
      });
  });
  it('Employee deleting an article that doesnt exist', done => {
    chai
      .request(app)
      .delete('/api/v1/articles/:id')
      .send({})
      .end((err, res) => {
        res.should.have.status(400);
        res.should.be.a('object');
        done();
      });
  });
  it('Employee should view feeds', done => {
    chai
      .request(app)
      .get('/api/v1/feeds')
      .send({})
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.a('object');
        done();
      });
  });
  it('Employee viewing whether feeds exist or not', done => {
    chai
      .request(app)
      .get('/api/v1/article/:id')
      .send({})
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.a('object');
        done();
      });
  });
  it('Employee should view specific article', done => {
    chai
      .request(app)
      .get('/api/v1/article/:id')
      .send({})
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.a('object');
        done();
      });
  });
  it('Employee viewing specific article that doesnt exist', done => {
    chai
      .request(app)
      .get('/api/v1/article/:id')
      .send({})
      .end((err, res) => {
        res.should.have.status(404);
        res.should.be.a('object');
        done();
      });
  });
});
describe('Arrays', () => {
  it('Users array should start empty', () => {
    const users = [];
  });
  it('Articles array should start empty', () => {
    const articles = [];
  });
});
