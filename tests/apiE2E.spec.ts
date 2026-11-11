import { test, expect } from '@playwright/test';
import { ApiHelper } from '../utils/apiHelper';

test.describe('User API Tests', () => {

    test('Verify CRUD Operations', async ({ request }) => {

        const apiHelper = new ApiHelper(request);

        const createUserPayload = {
            name: 'Ray Ten',
            job: 'Manual QA'
        };

        const updateUserPayload = {
            name: 'JJ TT',
            job: 'Manual Test QA'
        };

        // Create User
        const createResponse =
            await apiHelper.createUser(createUserPayload);

        expect(createResponse.status()).toBe(201);

        const createBody =
            await createResponse.json();

        expect(createBody.name)
            .toBe(createUserPayload.name);

        // Get User
        const getResponse =
            await apiHelper.getUser(2);

        expect(getResponse.status()).toBe(200);

        // Update User
        const updateResponse =
            await apiHelper.updateUser(
                2,
                updateUserPayload
            );

        expect(updateResponse.status())
            .toBe(200);

        // Delete User
        const deleteResponse =
            await apiHelper.deleteUser(2);

        expect(deleteResponse.status())
            .toBe(204);
    });

});
