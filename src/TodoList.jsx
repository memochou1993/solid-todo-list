import { createSignal } from 'solid-js';

function TodoList() {
  let input;
  let taskId = 0;

  const [tasks, setTasks] = createSignal([]);

  const createTask = (content) => {
    setTasks([
      ...tasks(),
      {
        id: taskId++,
        content,
        completed: false,
      },
    ]);
    input.value = '';
  };

  const updateTask = (id) => {
    setTasks(
      tasks().map((task) => task.id === id ? { ...task, completed: !task.completed } : task),
    );
  };

  return (
    <>
      <div>
        <input ref={input} />
        <button onClick={() => createTask(input.value)}>Add</button>
      </div>
      <ul>
        <For each={tasks()}>
          {(task) => {
            const { id, content, completed } = task;
            return (
              <li>
                <input type="checkbox" checked={completed} onChange={() => updateTask(id)} />
                <span style={{ 'text-decoration': completed ? 'line-through': 'none' }}>{content}</span>
              </li>
            );
          }}
        </For>
      </ul>
    </>
  );
}

export default TodoList;
