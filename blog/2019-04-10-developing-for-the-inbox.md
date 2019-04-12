---
title: Developing for the Inbox
date: 2019-04-10 09:35:00
description: 'How developing for the inbox'
image: './images/angry-annoyed-coffee-52608.jpg'
slug: developing-for-the-inbox
tags: 'code email'
status: 'draft'
---

## Background

My first interaction with coding emails was in 2015. I was fresh out of school where I had learned about all the modern techniques and best practices. When I was given a boilerplate for email, my mind just about exploded. "What the actual f#^\$?!" is what went through my head, I do believe. There were tables inside other tables for as far as the eye could see. There was "vml" stuff that appeared to be commented out, but once removed or changed in any way Outlook would throw and absolute fit. I quickly learned unlike HTML rendering engines in web browsers, there was not (and still isn't) a standard for how email clients render HTML. This explained why there were 3 levels of fallbacks for something as simple as a background image or a button. I was blown away, intrigued, and challenged.

My position at the time was highly focused on developing emails and landing pages for enterprise-level B2B companies. We had to support email clients as old as Lotus Notes, all the Outlooks, and all the Androids. Over the years I tried many frameworks and tools including Zurb's Foundation for Email (previously Inky), MJML, even a home-grown solution which allowed us to compile code based on which ESP the email was being sent from. Never was I happy, the code these tools spit out was unmaintainable - especially considering we took the compiled code and dropped it into marketing automation platforms like Marketo, Hubspot, and Pardot which have their own template engines.

In 2017 I had enough of it and decided my email development motto would be "keep it simple, stupid." Since that day, email development has been a way for me to connect with my roots. In an effort to save new developers some energy and frustration, I'd like to tell you about where I ended up, how I develop emails now, what tools I use, and the all important process.

## My tools

**Framework**

The framework I would ultimately select had some requirements:

- I did not want to maintain it.
- It must be responsive.
- It must have excellent email client support.
- The code must be clean. The fewer elements and inlined styles, the better.
- It must be component-based.

I tested out many frameworks, too many to list here. In the end, I chose Acorn Framework by ThemeMountain. It met all my requirements, albeit some tweaking was involved to support some outlier email clients, but that was okay with me. Here's why I like Acorn:

- The code is super clean.
- It is responsive.
- Email clients render this framework very consistently.
- It has a solid, yet simple grid.
- It is component-based, and these components are clean.
- I don't have to maintain it, though I can contribute if I'd like.
- Bonus: The whole framework (grid, spacing, typography) is based on the golden ratio.

**Email Client Testing**

There are many options out there, some ESPs even have this built right into the platform. Two of the most used are Email on Acid and Litmus. In my opinion it does not matter which of these you use, as long as you're using one. I've used both and can tell you they both work well. This is totally a personal preference, and a must-have.

## My process

In line with my entire outlook on how to develop emails, my process is quite simple. We're going to go ahead and assume I already have a design mockup.

### 1. Setup

I start with cloning the Acorn framework from GitHub and setting up my own repo for the project. I've found it to be more efficient to have the Acorn framework right there in your working files than it is to be swapping between Acron's docs and your code. Once the repo is initiated, it's time to get busy.

### 2. Layout

The next step is entirely focused on the layout. Using Acorn's boilerplate, grid, and stock components I simply copy/paste the code as needed to match the overall layout of the the design mockup. I'll spend time aligning items and getting padding close (but not perfect). I'll use placeholder images and lorem ipsum. Once I'm happy with the layout I drop it into my testing tool to make sure my layout isn't changing between email clients. Usually something pops ups, padding isn't consistent or the image is left aligned instead of right aligned in some random client. I'll edit and test until I'm happy with how the email is rendering across email clients.

### 3. Typography

Now that the email is behaving how we wish, it's time to get started on styling things. I like to begin with typography, which is usually included in the design mockups. Heading tags, paragraphs, ordered and unordered lists all must be the correct font family, size, have the right line-height and letter-spacing. I'll also spend some time working through padding and margins to match the design, without going crazy if it's not perfect. I will admit, I'm spoiled by the amount of trust my designer colleagues place in me, allowing me to make decisions as needed. Big decisions are run by them, of course. This takes a couple rounds of editing and testing until everything is rendering consistently.

### 4. Style

The fun part, styling your email. Usually, this begins with dropping in final images like brand logos and social icons. Applying colors to buttons, links, and backgrounds. I'll really dial in padding and get the email to look as similar as possible to the mockup. I'm fortunate to have a long-standing relationship with my designer colleagues who have learned to design for email along side me learning to code for email. This is a longer part, dialing things in takes time and patience. There is a lot of sending test emails to Email on Acid or Litmus, followed by making small tweaks and testing again. Eventually you're looking at a damn good looking email, once you and your designer are happy with it you can move on to some final touches.

### 5. Finalizing

This is where the real magic happens. First up don't forget to place final legal links (privacy policy/terms of service), physical address, unsubscribe token, all the important things to keep your email compliant with communication laws like CASL, CANSPAM and GDPR. Make sure all the links are working properly, most email testing tools will help with this.

More often than not the emails I build are actually email templates for platforms like Marketo and Hubspot. Until this point I've been working with straight-up HTML and CSS. But now it's time to pick this template apart and get it ready for the end-user, a marketer who does not want to deal with code. This part absolutely depends on what platform your email is going into. But there are a few general guidelines I follow no matter the platform:

- If you're working in a platform like Marketo or Hubspot determine what should be a module and what shouldn't
- If your platform allows you to assign content areas (i.e. a text area or an image) use it! Using a WYSIWYG editor to place an image in email can be detrimental to your layout.
-

## Do and Don't
