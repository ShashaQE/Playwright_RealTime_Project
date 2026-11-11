import{APIRequestContext} from "@playwright/test";

export class ApiHelper {

    private readonly BASE_URL =
        'https://reqres.in/api/users';

    constructor(
        private request: APIRequestContext
    ) {}

    async createUser(payload: object) {
        return this.request.post(
            this.BASE_URL,
            { data: payload }
        );
    }

    async getUser(userId: number) {
        return this.request.get(
            `${this.BASE_URL}/${userId}`
        );
    }

    async updateUser(
        userId: number,
        payload: object
    ) {
        return this.request.put(
            `${this.BASE_URL}/${userId}`,
            { data: payload }
        );
    }

    async deleteUser(userId: number) {
        return this.request.delete(
            `${this.BASE_URL}/${userId}`
        );
    }
}