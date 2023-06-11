# Terms of Reference

You have received the archive with the sources of our project. You have a bare layout without interactivity.
The archive contains everything you need: HTML layout, styles written in LESS preprocessor and converted to plain CSS, all necessary images and fonts (already connected).
Note that some elements will need to set display(flex) property to hide/show them.

⚠️ **IMPORTANT** ⚠️:
The final version should be built on any modular structure.
Functionality in all modern browsers (Chrome, Firefox, Opera, IE11, Edge, Safari)

## Welcome! 👋

This project already has a connected slider in the form of a ready-made solution. That's all we were able to do. You do not need to touch it.
It was left to keep the styles of the original project and support the mobile version. That is where it works.

## 1. The first screen should have a slider:

The first screen should have a slider. Arrows are not necessary.
Must scroll automatically at an adequate interval. Scroll animation: top to bottom

## 2. The modal window (class popup-design)

When you click on these buttons:
[Заказать]
[Заказать портрет]
[Заказать дизайн портрета]
[Хочу так же]
When you click on the cross or the substrate - the modal window should disappear.

## 3. The modal window (class popup-consultation)

When you click on these buttons:
[Подробнее об услуге]
When you click on the cross or the substrate - the modal window should disappear.

## 4. Sending form data via ajax (without page reloading)

Inside all modal windows is a form.
It should be sent via ajax (without reloading the page) and record all the data entered.
It is also necessary to notify the user of the sending status (sent, sent, error).
In the latter two states, you should replace the content of the modal window itself with a notification.
Need to mask or validate the phone number (required number of digits, country code).
Filling the name and comment - only in Russian.

## 5. When you click on a gift

A modal window (class popup-gift) should appear, and the gift itself should disappear from the page entirely.
When you click on the cross or carpet pad, the window disappears.

## 6. When you click this button [Посмотреть больше стилей]

Should load (show) additional styles (blocks). The button itself disappears in this case.

## 7. Implementation of the calculator

You set your prices, preferably in multiples of 1000 (or 500). The result is displayed in the bottom color box.
The first 2 items are mandatory. Only after selecting them the price is displayed.
If you select 1 mandatory and "Additional services" - the total amount is not displayed.
In addition, the logic should be preserved when you change your selection.
If IWANTPOPART (from gift modal) is entered in the "Promo code" field, the total amount is reduced by 30%.
Also, the logic should be preserved when the choice is changed.

## 8. Implementation of element filtering

The photo classes to filter by are already set (in HTML).
If the last 2 points are selected - we show the block portfolio-no
The same way you switch the active tab and its style

## 9. When hovering the mouse over the blocks (body > section.sizes)

They must be replaced by a picture.
The images are prepared and stored in the img folder with the "-1" postfix

When the mouse is removed from the block, everything goes back to the way it was.

## 10. Slider implementation

Arrows are obligatory, must flip slides. Must scroll automatically at a sufficient interval.
Scroll animation: horizontally.

## 11. Realize accordion

When you click on an element, text with a tooltip appears smoothly below it. The active element has a different style.

## 12. Implementation of the form «Консультация художника»

The requirements to it are the same as in the modal window. You can notify the user about the status in any way.
The mask or validation of the phone number is necessary (the required number of numbers, code).
Filling the name and comment - only in Russian.

## 13. Modal window (popup-gift)

If the user reaches the end of the page, but doesn't click any buttons - a modal window should appear (popup-gift)
and the gift itself completely disappears from the page.
If you click on the cross or the backing, the window disappears.

## 14. Modal window (popup-consultation)

If the user is on the page for more than 60 seconds - a modal window (popup-consultation) should appear.
When you click on the cross or the substrate, the window disappears.
No action interrupts, but if any modal window is already open - nothing happens.

## 15. Responsive web design

On the tablet version (992 or less width) when clicking on the hamburger - a submenu should be shown.
If a person unfolds the tablet and the width becomes larger - it hides

## 16. modular project structure

The modular structure of the project is needed, the assembly must be.

## 17. No code duplication

You don't need to bind separate actions to each button. Use a function or cycles.

