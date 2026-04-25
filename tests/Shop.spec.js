import { test, expect } from "@playwright/test";

test("Client App login", async ({ page }) => {
  const email = "anshika@gmail.com";
  await page.goto("https://rahulshettyacademy.com/client");
  await page.fill("#userEmail", email);
  await page.fill("#userPassword", "Iamking@000");
  await page.click("[value='Login']");
  await page.waitForLoadState("networkidle");
  const productCard = page.locator(".card-body").filter({ hasText: "ZARA COAT 3" });
  await productCard.getByText("Add To Cart").click();
  await page.click("[routerlink*='cart']");
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.click("text=Checkout");
  await page.getByPlaceholder("Country").pressSequentially("ind", { delay: 150 });
  await page.getByText('India', { exact: true }).click();
  const emailValue =await page.locator('label:has-text("anshika@gmail.com")').isVisible();
  expect(emailValue).toBeTruthy();
  await page.click(".action__submit");
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log("Order ID:", orderId);
  await page.click("button[routerlink*='myorders']");
  await page.locator("tbody").waitFor();
  const rows = page.locator("tbody tr");
  for (let i = 0; i < await rows.count(); i++) {
  const rowOrderId = await rows.nth(i).locator("th").textContent();
  if (orderId.includes(rowOrderId)) {
    await rows.nth(i).getByText("View").click();
    break;
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();
}





});
