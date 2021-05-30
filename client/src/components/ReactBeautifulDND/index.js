import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";
import randomWords from "random-words";
import removeImg from "../../imgs/remove (2).png";

const randomWordsList = randomWords(5);
console.log(randomWordsList);
const itemsFromGenerator = [
  { id: uuidv4(), content: randomWordsList[0] },
  { id: uuidv4(), content: randomWordsList[1] },
  { id: uuidv4(), content: randomWordsList[2] },
  { id: uuidv4(), content: randomWordsList[3] },
  { id: uuidv4(), content: randomWordsList[4] },
];

// click btn to open modal
// give words
// user can choose words, or roll new words

// Lift state for words in column
// Use chosenWords array as state
// set user's saved ChosenWords as initial state
// Update state when selecting words from modal
  // helper function to assign uuidv4 to chosen word
    //  .push? chosenWord into chosenWords column


const columnsFromBackend = {
  [uuidv4()]: {
    name: "My Words",
    items: itemsFromGenerator,
  },
  [uuidv4()]: {
    name: "My Idea Map",
    items: [],
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function ReactBeautifulDND() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={columnId}
            >
              <h2>{column.name}</h2>
              <div style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? "lightblue"
                            : "lightgrey",
                          borderRadius: "12px",
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      borderRadius: "12px",
                                      ...provided.draggableProps.style,
                                      display: "flex",
                                      justifyContent: "space-around",
                                    }}
                                  >
                                    {item.content}
                                    <button
                                      type="button"
                                      // onClick={() => {
                                      //   const newState = [...state];
                                      //   newState[ind].splice(index, 1);
                                      //   setState(
                                      //     newState.filter(group => group.length)
                                      //   );
                                      // }}
                                    >
                                      <img src={removeImg} alt="remove"></img>
                                    </button>
                                  </div>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default ReactBeautifulDND;
