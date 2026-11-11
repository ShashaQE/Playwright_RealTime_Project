import{test, expect} from "@playwright/test";

test.describe.serial("API CRUD Operations", ()=>{

test('Create User', async ({ request }) => {

  const response = await request.post('https://reqres.in/api/users', {
    headers: {
      'x-api-key': 'reqres-free-v1'
    },
    data: {
      name: 'Tim',
      job: 'QA'
    }
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  console.log(body)

  expect(body.name).toBe('Tim');
  expect(body.job).toBe('QA');
  expect(body.id).toBeTruthy();
  expect(body.createdAt).toBeTruthy();
});

test('Get User', async ({ request }) => {

  const getresponse = await request.get(
    'https://reqres.in/api/users/2'
  );

  expect(getresponse.ok()).toBeTruthy();

  const getbody = await getresponse.json();

  expect(getbody.data.id).toBe(2);
  expect(getbody.data.email).toContain('@');
});

test('Update User', async({request})=>{

    const putResponse = await request.put('https://reqres.in/api/users/2', {data: 
        {
            "name": "James Bond007",
            "job": "Detective"
        } })

    expect(putResponse.status()).toBe(200);
    expect(putResponse.statusText()).toBe('OK')

    const putbody = await putResponse.json();

    expect(putbody.name).toBe('James Bond007')
    expect(putbody.job).toBe('Detective')
    expect(putbody.updatedAt).toBeTruthy()
})

test("Partially Update User", async({request})=>{

    const patch_response = await request.patch('https://reqres.in/api/users/2', {data : 
        {
            "name": "John Wick"
        }})

    expect(patch_response.status()).toBe(200);
    expect(patch_response.statusText()).toBe('OK')

    const patch_body = await patch_response.json();

    expect(patch_body.name).toBe('John Wick')
})

test('Delete User', async ({ request }) => {

  const response = await request.delete(
    'https://reqres.in/api/users/2'
  );

  expect(response.status()).toBe(204);
});
})