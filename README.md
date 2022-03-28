# Mars Rover

## Table of contents

- [Commands](#Commands)
- [Demonstration](#Demonstration)
- [Entry](#Entry)
- [Requirements](#Requirements)
- [Approach](#Approach)
- [What I would add next](#What-i-would-add-next)

## Commands

### `npm i`

Build the project.

### `npm test`

Runs the tests.

Test coverage is relatively low due to time, please see ([What I Would Add Next](#What-i-would-add-next))

### `npm start`

Runs the console application.

## Entry

`src/index.ts`

## Demonstration

[![demonstration.gif](https://s7.gifyu.com/images/2022-03-28-07.46.30.gif)](https://gifyu.com/image/Spu39)

## Requirements

- [x] The world should be modelled as a grid with size m x n.

- [x] Your program should read the input, update the robots, and print out the final states
      of the robots.

- [x] Each robot has a position (x, y), and an orientation (N, E, S, W).

- [x] Each robot can move forward one space (F), rotate left by 90 degrees (L), or rotate
      right by 90 degrees (R).

- [x] If a robot moves off the grid, it is marked as ‘lost’ and its last valid grid position and
      orientation is recorded.

- [x] Going from x -> x + 1 is in the easterly direction, and y -> y + 1 is in the northerly
      direction. i.e. (0, 0) represents the south-west corner of the grid.

## Approach

### Functional vs Object Orientated

I opted to build the main simulator as a function that performed it's operations on classes.

This was because the scope of the task involved a single simulator and if this were to evolve I imagined it would primarily involve adding new operations to it.

The World, Robot and Component Attacher I built as classes. I took the view that if changes were to be made I would either need to add more of any of these, or make new things that would extend from these.

### Component Attacher

On reflection this was probably excessive!

I thought it would be interesting to separate out the Navigation (where we are going) and Tracking (where we are) into different 'modules'.

On extension I was envisioning robots that could have a multitude of different modules attached to them (scanners, lights etc.) and attaching these in a modular way would be easier.

## What I would add next

Given more time I would significantly increase the test coverage. All the functions within the classes and the lib need to be tested. This would also involve adding more tests for 'non optimal' paths. Currently the only test I have for non-optimal pathing is the simulation test.

I would also significantly improve the type definitions to increase the resilience of the code.
