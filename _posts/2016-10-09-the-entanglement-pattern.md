---
layout: post
title: "The Entanglement Pattern"
---
The Entanglement Pattern
===

In the software architecture of content creation tools there’s a design pattern
that I would like to call *Entanglement pattern*. The various objects in the
application are linked to each other and their states are entangled. As the user
manipulates one of these objects, the entangled objects change states.

This is necessary for various reasons. Different objects in the *visible* UI
represent different aspects of the single *invisible abstract* object. For
instance in a drawing application, when a rectangle is drawn on the canvas it
shows what the end result looks like. We can tell the position of the rectangle
in the context of the entire canvas by looking at this. However there are times
when we want to know the exact numbers that define the position. Maybe to be
sure that the rectangle's left side is aligned with another rectangle drawn
somewhere else on the canvas. One way to achieve this is to show numerical
representation of these *x* and *y* coordinates in a property panel on the side
of the canvas. From the programmer's point of view these two are different
objects, separated by many layers of API from each other. However they represent
the same abstract object, the position of the rectangle. As the rectangle is
moved by clicking and dragging on the canvas, its position changes and the
numerical representation in the property panel should change with it. On the
other hand if the numerical representation is changed by the user by typing in a
new value in the coordinate text box, then the rectangle on canvas should move
to the new position. Thus the two objects are entangled with each other in an
inseparable way.

The example above is one of the simplest of this kind of design pattern. In
practice, almost every object is entangled with many other objects in different
ways, when it comes to content creation applications. This pattern is taken for
granted. The entanglement is typically achieved by maintaining links between
these different objects. However to manage such vast number of linkages, it's
necessary to organize them systematically. Couple of solutions that are
prevalent for this problem.

1. Hierarchy or Tree - More popularly known as DAG (Directed Acyclic Graph).
   This is how the objects in the final rendering of the document are linked to
   each other. Starting from a root node, these objects are added as a child to
   existing nodes, without creating any cycles. As some of the nodes are
   changed, their parents are notified and appropriate actions are taken
   depending upon the change.

2. Events - This is a very versatile solution to entangle objects that are
   greatly separated from each other in the great tree of software architecture.
   To take the example explained above, the rectangle object that's drawn on the
   canvas is part of the scene graph (DAG), while the text-boxes representing
   the position coordinates are part of UI widget hierarchy. One could implement
   the link between them by virtue of event firing. Both parts of the code have
   access to a central event router object. When one side changes, it triggers a
   *change* event on this router. Any part of the code interested in this event
   will be listening and will take appropriate action when it receives the
   notification.


