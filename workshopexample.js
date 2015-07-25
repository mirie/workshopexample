#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path')

function fpath (f) {
    return path.join(__dirname, f)
}

workshopper({
    name        : 'workshopexample',
    title       : 'Example Workshopper',
    subtitle    : 'Example of creating a workshopper lesson',
    appDir      : __dirname,
    menuItems   : []
})
