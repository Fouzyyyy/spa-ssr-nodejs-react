const request = require("supertest");

const { app } = require('../../routing');

describe("POST /login", () => {

  test("should respond with 401 when no credentials are provided", async () => {
    const response = await request(app).post("/login").send();

      expect(response.statusCode).toBe(401);
  });

  test('should response with 401 when email is missing', async () => {
    const response = await request(app).post("/login").send({
        password: 'password'
    });

    expect(response.statusCode).toBe(401);
  });

  test('should response with 401 when password is missing', async () => {
    const response = await request(app).post("/login").send({
        email: 'admin'
    });

    expect(response.statusCode).toBe(401);
  });

  test('should response with 200 when given credentials are correct', async () => {
    const response = await request(app).post("/login").send({
        email: 'admin',
        password: 'password'
    });

    expect(response.statusCode).toBe(200);
  });
})