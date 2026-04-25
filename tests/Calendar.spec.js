const {test, expect} = require('@playwright/test');

test("Calendar Validation",async ({page})=>
{
const Month="11";
const Date="19";
const Year="2027";
const expectedList = [Month,Date,Year];
await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
console.log(await page.title());
await page.locator(".react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.getByText(Year).click();
await page.locator(".react-calendar__year-view__months__month").nth(Number(Month)-1).click();
//await page.locator("//abbr[text()='"+Date+"']").click();
await page.getByText(Date).click();
const inputs =  page.locator('.react-date-picker__inputGroup__input')
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]);
 
    }

});