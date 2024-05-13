import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from './actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ ...task, description: editedDescription }));
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditedDescription(e.target.value);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <input type="checkbox" checked={task.isDone} onChange={() => {}} />
          <span>{task.description}</span>
          <button onClick={handleEdit}>Edit</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editedDescription}
            onChange={handleInputChange}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
  );
};

export default Task;
