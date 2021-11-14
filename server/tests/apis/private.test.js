const request = require("supertest");

const { app } = require('../../routing');

describe("get /private", () => {
    test('should redirect user to login page when user is not authenticated', async () => {
        const response = await request(app).get("/private").send();
    
        expect(response.statusCode).toBe(302);
        expect(response.redirect).toBeTruthy();
    });

    test('should serve content in English when user is authenticated', async () => {
        const response = await request(app).get("/private").set('Cookie', ['isAuthenticated=true']).send();
    
        expect(response.statusCode).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.text).toContain('<h1>Private Page in English</h1>');
    });

    test('should serve content in German when user is authenticated and German language is set in request params', async () => {
        const response = await request(app).get("/de/private").set('Cookie', ['isAuthenticated=true']).send();
    
        expect(response.statusCode).toBe(200);
        expect(response.redirect).toBeFalsy();
        expect(response.text).toContain('<h1>Private Seite auf Deutsch</h1>');
    });
});