import { test, expect } from '@playwright/test';

test('GET request example', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
});

test('POST request example', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'QA Test', body: 'Playwright API test', userId: 1 }
  });
  expect(response.status()).toBe(201);
  const body = await response.json();
  console.log(body);
});


test('PUT request example', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: { id: 1, title: 'Updated Title', body: 'Updated Body', userId: 1 }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
});


test('PATCH request example', async ({ request }) => {
  const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
    data: { title: 'Partially Updated Title' }
  });
  expect(response.status()).toBe(200);
  const body = await response.json();
  console.log(body);
});


test('DELETE request example', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBeOneOf([200, 204]);
});
