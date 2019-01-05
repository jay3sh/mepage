---
layout: post
title: Bicycle pedals
---

Bicycle Pedals
===

Here's an exercise in design thinking.

Let's say we want to model following objects as a *Software* object called **Vehicle** - Car, Motorcycle, Bicycle.

| | Input | Output |
|-|-------|--------|
|Car|Steering wheel, brake, accelerator|4 wheels|
|Motorcycle|Steering handle, brake, accelerator, gearshift|2 wheels|
|Bicycle|Steering handle,brake,pedals,gearshift|2 wheels|


What UI components will we use for input to create **Vehicle**.

* *Steering wheel* can be modeled as a rotary dial
* *Brake* as a toggle button
* *Accelerator* as a slider
* *Gearshift* as dropdown list

The only problem is modeling **bicycle pedals**.

One could model them as a single rotary dial - but that won't be appropriate because they require two feet to drive. One could model them as two rotary dials linked to each other - but then there would be redundancy (if their rotation is linked, why have two dials).

I think the reason behind this awkwardness is the fact that Bicycle can not be modeled as a closed system with *clear separation between interface and implementation*. The design of pedals is a function of bicycle's implementation (or internal mechanics), yet it has to be exposed directly to the user.

P.S. This is only an exercise in design thinking and not a judgement on bicycle's design.
