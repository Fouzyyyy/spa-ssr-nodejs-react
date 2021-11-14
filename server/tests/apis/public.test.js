const request = require("supertest");

const { app } = require('../../routing');

describe("get /public", () => {
    test('should serve content in English', async () => {
        const response = await request(app).get("/public").send();
    
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<h1>Public page in English</h1>');
    });

    test('should serve content in German', async () => {
        const response = await request(app).get("/de/public").send();
    
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('<h1>Öffentliche Seite auf Deutsch</h1>');
    });
});