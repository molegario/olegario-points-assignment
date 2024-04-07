---
title: README
isFeatured: false
date: '2024/04/07'
---

## Taxcalculator Application: Overview

The Taxcalculator Application is a standalone application that can be installed on any webserver with NodeJS v18.18.0+.  The application requires a local installation of the Taxrates server provided by the Points development team and running on port 5001.  For more information on the server provided please refer to the README.md of the project at this [GIT-repository](https://github.com/Points/interview-test-server).

Once installed and browsable on the default port of 3000, one can navigate to the root page of the applcations and begin to evaluate any income between $1 to $1000000 for a breakdown of the tax rates being applied over the ranges that the income exceeds. At the very end the report you will find the resulting total taxed income, the total tax to be paid, and the effective tax rate calculated from the totals.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Using the Taxcalculator Application

By default the application loads on port 3000.  Visitors can browse to the application webroot at port 3000 to access the application landing page.

### Selecting the Year of Assessment

The landing page offers visitors the option to select the year at which they wish to perform the assessment of a desired income.  The supported years are listed on the lower half of the landing page by buttons labelled with the supporting year.  Upon selection the application will request the rates for the year selected and redirect the visitor to the assessment page of the application.

### Setting the Income to Assess

At the top of the assessment page visitor can use the slider bar shown to select a value for the income to assess or directly enter the amount to the nearest penny in the text field above the slider bar.  Once the desired income amout is selected visitors can press the 'calculate' button below the slider bar to display the results of the analysis.

### Reviewing the Assessment Results

Upon pressing the 'calculate' button a breakdown of the given income is shown in a table format below.  New assessments can be performed within the same year by simply readjusting the income slider and hitting the 'calculate' button the regenerate the results display.

### Issues Accessing the Rates Server

The Rates Server occassionally becomes inaccessible or return errors on valid queries.  For this reason the assessment page takes advantage of NextJS getServerSideProps to attempt a prepull of the rates before rendering the assessment page.  On the rendering of the assesment page another client side fetch is done for the rates.  Between the 2 rate pulls before and after the rendering of the page the rates data should succeed.

Should a visitor experience a momentary failure of both attempts to obtain the rates for the selected year they will be alternatively shown a recovery window instead of the income selector on the assessment page.  The recovery window will then prompt the visitor to re-try pulling the rates for the selected year.  On a successful re-pull of the rates the assessment page will then show the income selector form.

### Supported Years

The routes on the application have been coded to reflect the year of assessment.  Visitors can bookmark directly to the specific year of assessment for convenience.  Since the provided rates server only provides data for years between 2019 - 2022, the options on the front page lead to only supported years.  Any attempt to access unsupported year via direct linking will be met with a custom 404 to warn visitors of the unavailable route and a link to navigate back to the application landing page. 

## Starting up the Webserver
First install the project using your choice of package manager (npm, yarn):
```bash
npm install
# or
yarn install
```

Afterwards, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
