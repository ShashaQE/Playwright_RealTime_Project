import { test, expect } from "@playwright/test";
import { UserApi } from "../utils/apiHelper";

test.describe("User API Tests", () => {

  test("Create User", async ({ request }) => {

    const userApi = new UserApi(request);

    const payload = {
      name: "Shashananda",
      job: "QA Engineer"
    };

    const response = await userApi.createUser(payload);

    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.name).toBe(payload.name);
    expect(responseBody.job).toBe(payload.job);
    expect(responseBody.id).toBeTruthy();
  });

  test("Get User", async ({ request }) => {

    const userApi = new UserApi(request);

    const response = await userApi.getUser(2);

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.data.id).toBe(2);
    expect(responseBody.data.first_name).toBe("Janet");
  });

});