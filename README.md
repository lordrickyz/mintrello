# [Mintrello](https://lordrickyz.github.io/mintrello/#/)


![img](https://i.ibb.co/MNcvzzy/Screen-Shot-2021-11-19-at-5-31-21-PM.png)

### Background:

Mintrello is a serverless drag and drop project board. Where user's can break up projects in to smaller pieces by creating cards and organize them into certain orders. This is a runner up project for Mintbean's hackathon.

### Technologies
- React
- JavaScript

![img](https://i.ibb.co/Gcpq1gy/Screen-Shot-2021-11-19-at-5-31-06-PM.png)

### Functionality & MVPs:

- List Creation
- Card Creation
- CRUD for List's and Card's.
- Reset Board

#### Snippets
onDragEnd is a function that is utilized to aid in saving correct positions and index values for cards and lists whenever it is being dragged and dropped into another set of droppable div.

```js
onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      const newColumnOrder = Array.from(this.props.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      this.props.receiveColumnOrder(newColumnOrder);
      return;
    }

    const start = this.props.columns[source.droppableId];
    const finish = this.props.columns[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cardIds);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        cardIds: newCardIds,
      };
      this.props.updateColumn(newColumn)
      return;
    }
 ```
 
 ![img](https://i.ibb.co/bX3vkB3/Screen-Shot-2021-11-19-at-5-31-53-PM.png)
