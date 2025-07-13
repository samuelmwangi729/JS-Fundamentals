#!/usr/bin/node

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('No argument');
} else {
    if (!isNaN(args[0])) {
        console.log("My number: " + parseInt(args[0]))
    } else {
        console.log("Not a number")
    }
}