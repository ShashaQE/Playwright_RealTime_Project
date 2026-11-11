import { test, expect } from "@playwright/test";

test.describe.serial("API Testcases", () => {

    test("Create User and Validate Response", async ({ request }) => {

        const requestPayload = {
            name: "Shashananda",
            job: "QA Engineer"
        };

        // Step 1: Create User
        const postResponse = await request.post(
            "https://reqres.in/api/users",
            {
                data: requestPayload
            }
        );

        // Validate POST response
        expect(postResponse.status()).toBe(201);
        expect(postResponse.statusText()).toBe("Created");

        const postResponseBody = await postResponse.json();

        console.log("POST Response:", postResponseBody);

        expect(postResponseBody.name).toBe(requestPayload.name);
        expect(postResponseBody.job).toBe(requestPayload.job);
        expect(postResponseBody.id).toBeTruthy();
        expect(postResponseBody.createdAt).toBeTruthy();

        // Step 2: GET existing user
        const getResponse = await request.get(
            "https://reqres.in/api/users/2"
        );

        // Validate GET response
        expect(getResponse.status()).toBe(200);
        expect(getResponse.statusText()).toBe("OK");

        const getResponseBody = await getResponse.json();

        console.log("GET Response:", getResponseBody);

        expect(getResponseBody.data.id).toBe(2);
        expect(getResponseBody.data.email).toBeTruthy();
        expect(getResponseBody.data.first_name).toBeTruthy();
        expect(getResponseBody.data.last_name).toBeTruthy();
    });

});
