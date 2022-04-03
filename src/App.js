import React, { useState } from "react";

function App() {
  const [itemList, updateList] = useState([]);

  function addItem() {
    let input = document.getElementById("input");
    if (input.value === '')
      return
    updateList([...itemList, {
      text: input.value,
      done: false
    }]);
    input.value = '';
  }
  
  function clearList() {
    updateList([]);
  }
  
  function deleteItem(key) {
    updateList(itemList.filter((item, index) => index !== key));
  }

  function crossItem(key) {
    let newList = itemList;
    newList[key].done = !newList[key].done;
    updateList([...newList]);
  }

  return (
    <div className="App">
      <div>
        <input type="text" id="input" placeholder="Enter Item Here" onKeyDown={e => {if (e.keyCode===13) addItem()}}></input>
        <button onClick={addItem}>Add Item</button>
        <button onClick={clearList}>Clear List</button>
      </div>
      <div id="item_list">
        {itemList.map((item, index) => {
          return (
          <div className={"item" + ((item.done)? " done":'')} key={index}>
            <i className="fa-solid fa-square-check" onClick={() => crossItem(index)}></i>
            <span onClick={() => crossItem(index)}>{item.text}</span>
            <i className="fa-solid fa-trash-can" onClick={() => deleteItem(index)}></i>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;
