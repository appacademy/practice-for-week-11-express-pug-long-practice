# Making a Basic Application with Express and Pug

In this project, you will create a basic application with Express and Pug to
store and display data for bands, musicians, and instruments.

## Getting started

Download the starter. When you open it, you'll find there is a very simple
`app.js` file where you will create an Express application and render Pug
templates.

The database schema for this project looks something like this:

![db-schema]

Sequelize migrations, models, and seeders are all set up for you. From your
knowledge of Sequelize, you should set up your database that is fully seeded
based on the given Sequelize files.

## Phase 1: Configure the Express Application

First, you need to create and configure an Express application to use Pug as its
rendering template engine in the __app.js__ file.

Use port 8081 for your server.

## Phase 2: `GET /`

Create an endpoint for `GET /` that will render an HTML page that shows all the
bands in the database in a table.

The HTML page should look something like this (disregard any discrepancies in
CSS styling between the screenshot below and your HTML page):

![bands-list-screenshot]

The "Number of Musicians" column represents the number of musicians who
belong to the band in each row.

The "Band Musicians" link on each row should link to `/bands/:name` where
`:name` is replaced with the name of the band in that row.

The "Band Instruments" link on each row should link to
`/bands/:name/instruments` where `:name` is, again, replaced with the name
of the band in that row.

> Hint: Create the endpoint, make a SQL query to get the data that needs to be
> displayed on the HTML page, create a Pug template to render that data
> dynamically.

Remember, to create a table in a Pug.js template, you'll use something like the
following code:

```pug
table
  thead
    tr
      th Header 1
      th Header 2
  tbody
    each thing in things
      tr
        td= thing.property1
        td= thing.property2
```

## Phase 2: `GET /bands/:name`

Create an endpoint for `GET /bands/:name` that will render an HTML page that
shows all the musicians that belong to the band which matches the `:name` route
parameter.

The HTML page should look something like this (disregard any discrepancies in
CSS styling between the screenshot below and your HTML page):

![band-musicians-screenshot]

This page should only show a list of musicians who belong to the band.

The "Name" column represents the name of the musician in each row and each
column value should link to `/musicians/:musicianId` where `:musicianId` is
replaced with the id of the musician in that row.

The "Instruments of the Band" link at the bottom should link to
`/bands/:name/instruments` where `:name` is replaced with the name
`:name` route parameter in the current endpoint.

## Phase 3: `GET /bands/:name/instruments`

Create an endpoint for `GET /bands/:name/instruments` that will render an HTML
page that shows all the instruments that are used by the members of the band
which matches the `:name` route parameter.

The HTML page should look something like this (disregard any discrepancies in
CSS styling between the screenshot below and your HTML page):

![band-instruments-screenshot]

This page should only show a list of instruments played by the musicians of
the band.

The "Name" column represents the name of the instrument in each row. Each
column value should link to `/instruments/:name` where `:name` is
replaced with the name of the instrument in that row.

The "Played By" column represents the first name and last name of the musician
who plays that instrument in each row. Each column value should link to
`/musicians/:musicianId` where `:musicianId` is replaced with the id of the
musician who plays that instrument in that row.

## Phase 4: `GET /musicians/:musicianId`

Create an endpoint for `GET /musicians/:musicianId` that will render an HTML
page that shows the band and the instruments of the musician whose `id` matches
the `:musicianId` route parameter.

The HTML page should look something like this (disregard any discrepancies in
CSS styling between the screenshot below and your HTML page):

![musician-details-screenshot]

This page should only show a list of instruments that the musician plays.

The "Band" value should link to `/bands/:name` where `:name` is replaced with
the name of the band that the musician is in.

The "Name" column under "Instruments" represents the name of the instrument in
each row. Each column value should link to `/instruments/:name` where `:name` is
replaced with the name of the instrument in that row.

## Phase 5: `GET /instruments/:name`

Create an endpoint for `GET /instruments/:name` that will render an HTML
page that shows the instrument that matches the `:name` route parameter. It
also displays all the musicians who play that instrument.

The HTML page should look something like this (disregard any discrepancies in
CSS styling between the screenshot below and your HTML page):

![instrument-details-screenshot]

This page should only show a list of musicians who play that instrument.

The "Type" value should link to `/instrument-types/:type` where `:type` is
replaced with the `type` of the instrument.

The "Name" column under "Musicians who Play this Instrument" represents the name
of the musician in each row. Each column value should link to
`/musicians/:musicianId` where `:musicianId` is replaced with the `id` of the
musician in that row.

## Phase 6: `GET /instrument-types/:type`

Create an endpoint for `GET /instrument-types/:type` that will render an HTML
page that shows the instrument type that matches the `:type` route parameter. It
also displays all the instruments that has that `type` as an attribute.

The HTML page should look something like this (disregard any discrepancies in
CSS styling between the screenshot below and your HTML page):

![instrument-type-screenshot]

This page should only show a list of instruments that have the given type.

The "Name" column under "Instruments of this Type" represents the name
of the instrument in each row. Each column value should link to
`/instruments/:name` where `:name` is replaced with the name of the
instrument in that row.

## Challenge Phase: SQL Aggregates

See if you can use SQL aggregation to calculate any of the data that is
displayed across your web pages.

[db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/express-pug-app-bands-db-schema.png
[bands-list-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/bands-list-screenshot.png
[band-musicians-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/band-musicians-screenshot.png
[band-instruments-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/band-instruments-screenshot.png
[musician-details-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/musician-details-screenshot.png
[instrument-details-screenshot]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/instrument-details-screenshot.png
[instrument-type-screenshot]:https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/express/projects/instrument-type-screenshot.png